/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://winsomeinteriors.com.au', // 🔥 replace this
  generateRobotsTxt: true, // auto creates robots.txt
  sitemapSize: 7000,

  changefreq: 'weekly',
  priority: 0.7,

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};