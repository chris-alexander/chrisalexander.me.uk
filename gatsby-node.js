import fs from 'fs-extra-promise';
import sm from 'sitemap';
import config from './config';

function pagesToSitemap(pages) {
  const urls = pages.map((page) => {
    if (page.path !== undefined) {
      return {
        url: page.path,
        changefreq: 'daily',
        priority: 0.7,
      };
    }
    return undefined;
  });
  return urls.filter(url => url !== undefined);
}

function generateSiteMap(pages) {
  const sitemap = sm.createSitemap({
    hostname: config.blogUrl,
    cachetime: '60000',
    urls: pagesToSitemap(pages),
  });
  console.log('Generating sitemap.xml'); // eslint-disable-line
  fs.writeFileSync(
    `${__dirname}/public/sitemap.xml`,
    sitemap.toString()
  );
}

function postBuild(pages, callback) {
  generateSiteMap(pages);
  callback();
}

exports.postBuild = postBuild;
