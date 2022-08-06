import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Fragment } from 'react'
import { File, getFiles } from '../lib/files'

export async function getStaticProps() {
  const allFiles = getFiles()
  return {
    props: {
      allFiles
    }
  }
}

const Home: NextPage<{allFiles: File[]}> = ({ allFiles }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Fusillade</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link href="https://fonts.googleapis.com/css2?family=Tangerine&display=swap" rel="stylesheet"></link>
      </Head>

      <p className='text-white text-center text-5xl mt-2' style={{
        fontFamily: `'Tangerine', cursive`
      }}>Fusillade</p>

      <main className="flex w-full flex-1 flex-col px-2">
        {allFiles.map(file => (
          <Fragment key={file.fileName}>
            <div className='relative full w-full h-96 mb-2'>
              <Image src={`/${file.fileName}`} layout="fill" objectFit='contain' />
            </div>
          </Fragment>
        ))}
      </main>
    </div>
  )
}

export default Home
