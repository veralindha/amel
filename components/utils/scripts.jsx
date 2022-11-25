import Script from 'next/script'

export default function Scripts() {
  return (
    <>
      <Script defer src="/plugins/jquery/jquery.min.js"></Script>
      {/* <!-- jQuery UI 1.11.4 --> */}
      <Script defer src="/plugins/jquery-ui/jquery-ui.min.js"></Script>
      {/* <!-- Bootstrap 4 --> */}
      <Script defer src="/plugins/bootstrap/js/bootstrap.bundle.min.js"></Script>
      {/* <!-- AdminLTE App --> */}
      <Script defer src="/dist/js/adminlte.js"></Script>
      {/* <!-- Sparkline --> */}
      <Script defer src="/plugins/sparklines/sparkline.js"></Script>
    </>
  )
}