declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elem: string]: { [key: string]: object };
    }
  }
}
