import AdminDashboardContent from "../../components/admin_dashboard/contents";
import Layout from "../../components/utils/layout";
import useLoginStore from "../../store/store";

export default function AdminHome(){
  const user = useLoginStore((state) => state.user)
  const role = useLoginStore((state) => state.role)
  console.log(user)
  return (
    <Layout title="Admin - Monitoring PKL" activeNavBarItem={0} activeUser={user}>
      <AdminDashboardContent />
    </Layout>
  )
}
