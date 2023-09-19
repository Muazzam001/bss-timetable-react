import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        "react-refresh",
        react({
            refresh: true,
            babel: {
                plugins: ['babel-plugin-macros']
            },
        })
    ],
    "rules": {
        "react-refresh/only-export-components": "warn"
    },
    resolve: {
        alias: {
            "@": "./",
        },
    },
});
