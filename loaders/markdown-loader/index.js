import frontMatter from 'front-matter';
import markdownIt from 'markdown-it';
import hljs from 'highlight.js';

const highlight = (str, lang) => {
  if ((lang !== null) && hljs.getLanguage(lang)) {
    try {
      return hljs.highlight(lang, str).value;
    } catch (_error) {
      console.error(_error);
    }
  }
  try {
    return hljs.highlightAuto(str).value;
  } catch (_error) {
    console.error(_error);
  }
  return '';
};

const md = markdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight,
})
  .use(require('markdown-it-footnote'))
  .use(require('markdown-it-emoji'))
  .use(require('markdown-it-link-attributes'), {
    target: '_blank',
    rel: 'noopener noreferrer',
  });

function loader(content) {
  this.cacheable();
  const meta = frontMatter(content);
  const body = md.render(meta.body);
  const result = Object.assign({}, meta.attributes, {
    body,
  });
  this.value = result;
  return `module.exports = ${JSON.stringify(result)}`;
};

module.exports = loader;
