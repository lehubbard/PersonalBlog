
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/lucas/Documents/web-projects/personal-blog/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/lucas/Documents/web-projects/personal-blog/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/home/lucas/Documents/web-projects/personal-blog/src/pages/about.js")),
  "component---src-pages-blog-index-js": preferDefault(require("/home/lucas/Documents/web-projects/personal-blog/src/pages/blog/index.js")),
  "component---src-pages-blog-mdx-slug-js": preferDefault(require("/home/lucas/Documents/web-projects/personal-blog/src/pages/blog/{mdx.slug}.js")),
  "component---src-pages-contact-js": preferDefault(require("/home/lucas/Documents/web-projects/personal-blog/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/home/lucas/Documents/web-projects/personal-blog/src/pages/index.js")),
  "component---src-pages-video-photo-portfolio-js": preferDefault(require("/home/lucas/Documents/web-projects/personal-blog/src/pages/video-photo-portfolio.js")),
  "component---src-pages-web-dev-portfolio-js": preferDefault(require("/home/lucas/Documents/web-projects/personal-blog/src/pages/web-dev-portfolio.js"))
}

