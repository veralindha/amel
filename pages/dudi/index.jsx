import TableDudi from "../../components/table/table_dudi";
import ContentHeader from "../../components/utils/content-header";
import Layout from "../../components/utils/layout";

export default function DuDi(){
  const breadcrumbs = [
    {
      isActive: false,
      text: 'DUDI',
      url: '#'
    },
    {
      isActive: true,
      text: 'Data DUDI',
      url: '#'
    },
  ]
  return (
    <Layout title="DUDI" activeNavBarItem={6} activeUser={'Admin'}>
      <ContentHeader title={'Data DUDI'} listBreadcrumb={breadcrumbs} />
      <TableDudi />
    </Layout>
  )
}