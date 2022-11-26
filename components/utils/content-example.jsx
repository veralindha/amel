import Activity from "./activity_siswa/activity";
import ContentBody from "./content-body";
import ContentHeader from "./content-header";
import ProfileSiswa from "./profile/profile-siswa";
import ProfileGuru from "./profile/profile-guru";
import TableGuru from "./table/table_guru";
import TableUsers from "./table/table_users";

const breadcrumbs = [
  {
    isActive: false,
    text: 'Home',
    url: '#'
  },
  {
    isActive: true,
    text: 'Dashboard v1',
    url: '#'
  },
]

export default function Content() {
  return (
    <div className='content-wrapper'>
      <ContentHeader title={'Dashboard'} listBreadcrumb={breadcrumbs}/>
      <ContentBody />
      <Activity/>
      <ProfileGuru/>
      <ProfileSiswa/>
      <TableUsers/>
      <TableGuru/>
    </div>
  )
}