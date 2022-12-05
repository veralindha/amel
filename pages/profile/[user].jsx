import { useRouter } from "next/router"
import ProfileDudi from '../../components/profile/profile-dudi'
import Layout from "../../components/utils/layout"
import useLoginStore from "../../store/store"

export default function Profile() {
  const userIn = useLoginStore((state) => state.user)
  const router = useRouter()
  const { user } = router.query

  return (
    <Layout activeUser={userIn} activeNavBarItem={'-'}>
      <ProfileDudi />
    </Layout>
  )
}