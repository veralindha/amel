import AdminDashboardContent from "../../components/admin_dashboard/contents";
import Layout from "../../components/utils/layout";

export default function AdminHome(){
  return (
    <Layout title="Admin - Monitoring PKL" activeNavBarItem={0} activeUser={'Admin'}>
      <AdminDashboardContent />
    </Layout>
  )
}
