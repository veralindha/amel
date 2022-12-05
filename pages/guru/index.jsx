import ContentHeader from "../../components/utils/content-header";
import Layout from "../../components/utils/layout";
import TableGuru from "../../components/table/table_guru";
import useLoginStore from "../../store/store";

export default function DataGuru(){
  const user = useLoginStore((state) => state.user)
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
    <Layout title="Data Guru - Montoring PKL" activeNavBarItem={2} activeUser={user}>
      <ContentHeader title={'Data Guru'} listBreadcrumb={breadcrumbs} />
      <TableGuru />
    </Layout>
  )
}