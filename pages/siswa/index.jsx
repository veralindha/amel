import TableSiswa from "../../components/table/table_siswa";
import ContentHeader from "../../components/utils/content-header";
import Layout from "../../components/utils/layout";

export default function DataSiswa(){
  const breadcrumbs = [
    {
      isActive: false,
      text: 'Siswa',
      url: '#'
    },
    {
      isActive: true,
      text: 'Data Siswa',
      url: '#'
    },
  ]
  return (
    <Layout title="Data Siswa - Monitoring PKL" activeNavBarItem={3} activeUser={'Admin'}>
      <ContentHeader title={'Data Siswa'} listBreadcrumb={breadcrumbs} />
      <TableSiswa />
    </Layout>
  )
}