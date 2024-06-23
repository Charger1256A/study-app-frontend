interface ImportMetaEnv extends Readonly<Record<string, string>> {
    readonly VITE_BACKEND_URL: string
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }