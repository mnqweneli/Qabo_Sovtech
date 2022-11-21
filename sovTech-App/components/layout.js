import Head from 'next/head'
import Image from 'next/image'
import profile from '/images/profile.jpg'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Mnqweneli Qabo'
export const siteTitle = 'Mnqweneli sovTech App'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Mnqweneli sovTech App"
        />
      </Head>
      <header className={styles.header}>
        {
          <>
            <Image
              priority
              src={profile}
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        }
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  )
}
