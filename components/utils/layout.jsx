import Head from "next/head";
import Navbar from "./navbar";
import Scripts from "./scripts";
import Sidebar from "./sidebar";

export default function Layout({ children, title = '', activeNavBarItem = 0, activeUser = '' }) {
  return (
    <div className="hold-transition sidebar-mini layout-fixed">
      <div className="wrapper">
        <Head>
          <title>{title}</title>
          <meta name="description" content={title} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
      </div>
      <Sidebar isActiveNavItem={activeNavBarItem} activeUser={activeUser} />
      <div className="content-wrapper">
        {children}
      </div>
      <Scripts />
    </div>
  )
}