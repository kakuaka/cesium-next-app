import Link from 'next/link'
 
function Home() {
  return (
    <ul>
      <li>
        <Link
          href={{
            pathname: '/',
          }}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href={{
            pathname: '/dashboard',
          }}
        >
          Dashboard
        </Link>
      </li>
    </ul>
  )
}
 
export default Home