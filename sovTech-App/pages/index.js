import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
      <div>
        <img src="/images/profile.jpg" />
    </div>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
      <p>
          Welcome to my page, my name is <strong>Mnqweneli Mlungiseleli Qabo</strong>. 
          I’m a software development graduate from the Nelson Mandela university. Who is eager to learn.
          An inquisitive person who can easily adapt to any environment.
        </p>
        <h2>Why Sovtech?</h2>
        <p>
          Firstly, it shall be a privilege for any aspiring professional to have a fruitfull career with a reputed firm like yours.

          I believe the qualifications, hardwork and dedication I possess not only shall bring value to your organization, but in turn
          shall also help me to acquire experience and sharpen my skills amidst your organization's professional work culture.
          
        </p>
      </section>
    </Layout>
  )
}
