declare module 'aos' {
  interface AosInitOptions {
    [key: string]: any;
  }

  export function init(options?: AosInitOptions): void;
  export function refresh(): void;
  const aos: { init: (options?: AosInitOptions) => void; refresh: () => void };
  export default aos;
}
