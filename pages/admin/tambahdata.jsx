import TambahDataContents from "../../components/admin_dashboard/tambahdatacontents";
import Layout from "../../components/utils/layout";

export default function TambahDataPage() {
  return (
    <Layout title="Tambah Data - Monitoring PKL" activeNavBarItem={1} activeUser={'Admin'}>
      <TambahDataContents />
    </Layout>
  )
}