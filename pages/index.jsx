import Head from 'next/head'
// import Content from '../components/utils/content-example'
import Navbar from '../components/utils/navbar'
import Scripts from '../components/utils/scripts'
import Sidebar from '../components/utils/sidebar'

export default function Home() {
  return (
    <div className="hold-transition sidebar-mini layout-fixed">
      <div className='wrapper'>
        <Head>
          <title>Monitoring PKL</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
      </div>
      <Sidebar />
      {/* <Content /> */}
      <Scripts />
    </div>
  )
}
