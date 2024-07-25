import Link from 'next/link'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
 
function Home() {
  const cookieStore = cookies()
  const isLogin = cookieStore.get('isLogin')

  if (!isLogin) {
    redirect('/login')
  }

  return (
    <div className="flex-1">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/feed">Feed</Link>
    </div>
  )
}
 
export default Home