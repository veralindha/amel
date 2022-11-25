import ContentBody from "./content-body";
import ContentHeader from "./content-header";

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
    </div>
  )
}