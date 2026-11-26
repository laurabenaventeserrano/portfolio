/* Lista de archivos de public/video y public/craft (plugin publicMedia en vite.config.ts) */
declare module 'virtual:public-media' {
  const files: Set<string>;
  export default files;
}
