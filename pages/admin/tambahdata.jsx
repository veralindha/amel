import TambahDataContents from "../../components/admin_dashboard/tambahdatacontents";
import Layout from "../../components/utils/layout";
import TableUsers from "../../components/table/table_users"
import useLoginStore from "../../store/store";

export default function TambahDataPage() {
  const user = useLoginStore((state) => state.user)
  return (
    <Layout title="Tambah Data - Monitoring PKL" activeNavBarItem={1} activeUser={user}>
      <TambahDataContents />
      <TableUsers />
    </Layout>
  )
}