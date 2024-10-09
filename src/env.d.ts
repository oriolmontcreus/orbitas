/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
    readonly POCKETBASE_DEV_API_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}