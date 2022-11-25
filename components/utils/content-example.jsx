import Activity from "./activity/activity";
import ContentBody from "./content-body";
import ContentHeader from "./content-header";
import Profile from "./profil.jsx/profile";
import TableGuru from "./table_guru/table";

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
      <Profile/>
      <TableGuru/>
    </div>
  )
}