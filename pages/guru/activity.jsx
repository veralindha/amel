import Layout from "../../components/utils/layout";
import Activity from "../../components/activity_guru/activity";
import ContentHeader from "../../components/utils/content-header";
import useLoginStore from "../../store/store";

export default function ActivityGuru(){
  const user = useLoginStore((state) => state.user)
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
    <Layout title="Activity Guru - Monitoring PKL" activeNavBarItem={3} activeUser={'Admin'}>
      <ContentHeader title={'Aktivitas Guru'} listBreadcrumb={breadcrumbs} />
      <Activity />
    </Layout>
  )
}