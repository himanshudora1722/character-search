import Head from 'next/head'
import SearchDetail from './SearchDetail'

export default function Home() {
  return (
    <div className="container-fluid">
      <Head>
        <title>Get Details</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchDetail />
    </div>
  )
}
