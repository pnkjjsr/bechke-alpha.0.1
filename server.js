const { join } = require('path')
const { https } = require('firebase-functions')
const { default: next } = require('next')

const appDir = join('src', require('./src/next.config.js').distDir)

const app = next({
    dev: false,
    conf: {
        distDir: appDir,
    },
})
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = express();
  
    server.all("*", (req, res) => {
      const parsedUrl = parse(req.url, true);
      const { pathname } = parsedUrl;
  
      // handle GET request to /service-worker.js
      if (pathname === "/sw.js" || pathname.startsWith('/workbox-')) {
        const filePath = join(__dirname, ".next", pathname);
        app.serveStatic(req, res, filePath);
      } else {
        handle(req, res, parsedUrl);
      }
    });
  
    const serviceWorkers = [
      {
        filename: "sw.js",
        path: "./static/sw.js",
      },
      {
        filename: "firebase-messaging-sw.js",
        path: "./static/firebase-messaging-sw.js",
      },
    ];
  
    serviceWorkers.forEach(({ filename, path }) => {
      server.get(`/${filename}`, (req, res) => {
        app.serveStatic(req, res, path);
      });
    });
  });

exports.website = https.onRequest((req, res) => {
    return app.prepare().then(() => handle(req, res))
})