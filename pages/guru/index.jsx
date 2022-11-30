import ContentHeader from "../../components/utils/content-header";
import Layout from "../../components/utils/layout";
import TableGuru from "../../components/table/table_guru";

export default function DataGuru(){
  const breadcrumbs = [
    {
      isActive: false,
      text: 'Guru',
      url: '#'
    },
    {
      isActive: true,
      text: 'Data Guru',
      url: '#'
    },
  ]

  return (
    <Layout title="Data Guru - Montoring PKL" activeNavBarItem={1} activeUser={'Admin'}>
      <ContentHeader title={'Data Guru'} listBreadcrumb={breadcrumbs} />
      <TableGuru />
    </Layout>
  )
}