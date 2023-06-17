import Activity from "../../components/siswa/activity";
import ContentHeader from "../../components/utils/content-header";
import Layout from "../../components/utils/layout";
import useLoginStore from "../../store/store";

export default function ActivitySiswa(){
  const user = useLoginStore((state) => state.user)
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
    <Layout title="Activity Siswa - Monitoring PKL" activeNavBarItem={6} activeUser={user}>
      <ContentHeader title={'Aktivitas Siswa'} listBreadcrumb={breadcrumbs} />
      <Activity />
    </Layout>
  )
}