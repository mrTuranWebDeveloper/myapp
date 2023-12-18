import Link from 'next/link'

export default function Home() {
  return (
  <div>
    <Link href="/hakkimizda">Hakkımızda</Link>
    <br />
    <Link href="/docs/post-1" >Post 1</Link>
    <br />
    <Link 
    target='_blank'
    className='Test'
    href={{
      pathname : "/hakkimizda",
      query: {
        name: "next",
        surname: "JS",
      },
    }}
    >
    
    Hakkımızda Obje İle
    </Link>
  </div>
  );
}
