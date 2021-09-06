declare module '*.svg' {
  const content: any
  export default content
}

export type TGetStaticPaths = {
  id: string
}
