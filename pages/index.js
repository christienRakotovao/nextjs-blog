import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

// import { getSortedPostsData } from '../lib/posts';
import { getPostFromJsonApi } from '../lib/api/posts'

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }

export async function getServerSideProps(context) {
  const postsFromApi = await getPostFromJsonApi()
  return {
    props: {
      postsFromApi,
    },
  };
} 

export default function Home({ postsFromApi }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      {/* page for static rendering with data */}
      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section> */}

      {/** page for server side rendering */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {postsFromApi.map(({ id, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
            </li>
          ))}
        </ul>
      </section>
      

    </Layout>
  );
}