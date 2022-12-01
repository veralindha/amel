import Image from "next/image"
import Link from "next/link"

export default function Sidebar({isActiveNavItem=0, activeUser=''}) {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <Link href="/admin" className="brand-link">
        <Image src="/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} width={128} height={128} />
        <span className="brand-text font-weight-light">Monitoring PKL</span>
      </Link>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <Image src="/dist/img/user.png" className="img-circle elevation-2" alt="User Image" width={128} height={128} />
          </div>
          <div className="info">
            <a href="#" className="d-block">{activeUser}</a>
          </div>
        </div>
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <li className="nav-header">ADMIN</li>
            <li className="nav-item">
              <Link href="/admin" className={`nav-link ${isActiveNavItem == 0 ? ' active':''}`}>
                <i className="nav-icon fas fa-th" />
                <p>
                  Dashboard
                </p>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/admin/tambahdata" className={`nav-link ${isActiveNavItem == 1 ? ' active':''}`}>
                <i className="nav-icon fas fa-th" />
                <p>
                  Tambah Data
                </p>
              </Link>
            </li>
            <li className="nav-header">GURU</li>
            <li className="nav-item">
              <Link href="/guru" className={`nav-link ${isActiveNavItem == 2 ? ' active':''}`}>
                <i className="nav-icon fas fa-th" />
                <p>
                  Data Guru
                </p>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/guru/activity" className={`nav-link ${isActiveNavItem == 3 ? ' active':''}`}>
                <i className="nav-icon fas fa-th" />
                <p>
                  Aktivitas Guru
                </p>
              </Link>
            </li>
            <li className="nav-header">SISWA</li>
            <li className="nav-item">
              <Link href="/siswa" className={`nav-link ${isActiveNavItem == 4 ? ' active':''}`}>
                <i className="nav-icon fas fa-th" />
                <p>
                  Data Siswa
                </p>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/siswa/activity" className={`nav-link ${isActiveNavItem == 5 ? ' active':''}`}>
                <i className="nav-icon fas fa-th" />
                <p>
                  Aktivitas Siswa
                </p>
              </Link>
            </li>
            <li className="nav-header">DUDI</li>
            <li className="nav-item">
              <Link href="/dudi" className={`nav-link ${isActiveNavItem == 6 ? ' active':''}`}>
                <i className="nav-icon fas fa-th" />
                <p>
                  Data DUDI
                </p>
              </Link>
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>

  )
}