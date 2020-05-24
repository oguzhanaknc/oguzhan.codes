const SitemapPlugin = require("sitemap-webpack-plugin").default;
const paths = [
  {
    path: "/",
    lastmod: new Date().toISOString().slice(0, 10),
    priority: "0.8",
    changefreq: "hourly"
  },
  {
    path: "/snippets",
    lastmod: new Date().toISOString().slice(0, 10),
    priority: "0.8",
    changefreq: "hourly"
  },
  {
    path: "/posts",
    lastmod: new Date().toISOString().slice(0, 10),
    priority: "0.8",
    changefreq: "hourly"
  }
];

module.exports = {
  configureWebpack: {
    plugins: [
      new SitemapPlugin("https://oguzhan.codes", paths, {
        filename: "sitemap.xml",
        lastmod: true,
        changefreq: "hourly",
        priority: "0.8"
      })
    ]
  }
};
