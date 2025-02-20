import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from "node:path";
import {resolve} from "path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue({
            compat: true,
        })
    ],
    resolve: {
        symlinks: false,
        alias: {
            vue: path.resolve('./node_modules/vue'),
            '@': resolve(__dirname, 'src'),
        }
    }
})
