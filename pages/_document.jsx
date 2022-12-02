import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body className='hold-transition sidebar-mini layout-fixed'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}