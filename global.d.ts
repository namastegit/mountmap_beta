// global.d.ts
export {};

declare global {
  interface Window {
    Alpine: any;  // You can replace `any` with a more specific type if you know the structure of `Alpine`.
  }
}
