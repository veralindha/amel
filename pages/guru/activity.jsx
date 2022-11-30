import Layout from "../../components/utils/layout";
import Activity from "../../components/activity_guru/activity";
import ContentHeader from "../../components/utils/content-header";

export default function ActivityGuru(){
  const breadcrumbs = [
    {
      isActive: false,
      text: 'Guru',
      url: '#'
    },
    {
      isActive: true,
      text: 'Activity',
      url: '#'
    },
  ]
  return (
    <Layout title="Activity Guru - Monitoring PKL" activeNavBarItem={2} activeUser={'Admin'}>
      <ContentHeader title={'Aktivitas Guru'} listBreadcrumb={breadcrumbs} />
      <Activity />
    </Layout>
  )
}