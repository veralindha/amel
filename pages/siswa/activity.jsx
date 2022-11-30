import Activity from "../../components/activity_siswa/activity";
import ContentHeader from "../../components/utils/content-header";
import Layout from "../../components/utils/layout";

export default function ActivitySiswa(){
  const breadcrumbs = [
    {
      isActive: false,
      text: 'Siswa',
      url: '#'
    },
    {
      isActive: true,
      text: 'Activity',
      url: '#'
    },
  ]
  return (
    <Layout title="Activity Siswa - Monitoring PKL" activeNavBarItem={4} activeUser={'Admin'}>
      <ContentHeader title={'Aktivitas Siswa'} listBreadcrumb={breadcrumbs} />
      <Activity />
    </Layout>
  )
}