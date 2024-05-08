import express from "express";
import path from "path";
import logger from "morgan";
import viewController from "./controllers/viewController.js";
import errorController from "./controllers/errorController.js";

// Inicialización de variables.

const app = express();
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const PORT = process.env.PORT ?? 3000;

// Middlewares

app.use(logger('dev'));

app.set("/views", path.join(__dirname, "/views"));
app.set("view engine", "pug");

app.use(express.static("public", {
    setHeaders: (response, path) => {
        if (path.endsWith(".css")) {
            response.setHeader("Content-Type", "text/css");
        }
    }
}))
app.use(express.static(path.join(__dirname, "/public")));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Configurar la CSP - Content-Security-Policy. Quitar unsafe-inline porque es peligroso.
app.use((req, res, next) => {
    res.setHeader('Content-Security-Policy', `style-src 'self' https://cdnjs.cloudflare.com https://cdn.jsdelivr.net https://fonts.googleapis.com 'unsafe-inline'; script-src 'self' https://kit.fontawesome.com https://cdnjs.cloudflare.com https://cdn.jsdelivr.net`);
    next();
});

app.get("/", viewController.getHome);

app.use(errorController.error404);

app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`);
})