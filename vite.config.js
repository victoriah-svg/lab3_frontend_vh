import { defineConfig } from "vite";
import { resolve } from "path"; 
import {  ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig ({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                about: resolve(__dirname, "about.html")
            }
        }
    },
    plugins: [
        ViteImageOptimizer({
            jpeg: {
                quality: 70
            },
            jpg: {
                quality: 70
            },
            webp: {
                quality: 75
            },
            svg: {
                quality: 70
            }
        })
    ]
});