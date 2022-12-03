import { useRouter } from "next/router"
import ProfileDudi from '../../components/profile/profile-dudi'
import Layout from "../../components/utils/layout"

export default function Profile() {
  const router = useRouter()
  const { user } = router.query

  return (
    <Layout activeUser="Admin" activeNavBarItem={'-'}>
      <ProfileDudi />
    </Layout>
  )
}