import TambahDataContents from "../../components/admin_dashboard/tambahdatacontents";
import Layout from "../../components/utils/layout";
import TableUsers from "../../components/table/table_users"

export default function TambahDataPage() {
  return (
    <Layout title="Tambah Data - Monitoring PKL" activeNavBarItem={1} activeUser={'Admin'}>
      <TambahDataContents />
      <TableUsers />
    </Layout>
  )
}