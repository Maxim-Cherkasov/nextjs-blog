import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Date from "../components/date";



import { getSortedPostsData } from '../lib/posts';

import { getSortedPostsData } from "../lib/posts";
import { Button } from "../components/Button";


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

/*
в секции с map, добавляем фильтрацию по title и при совпадении добавляем
заголовок разделу 
*/

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>

        <p>Hello, I’m Maxim. I’m a frontend developer.
           You can contact me on <a href="https://twitter.com/CherkasovMaxim">Twitter.</a></p>
        <p>
          (This Blog i made using official{' '}
          <a href="https://nextjs.org/learn">Next.js tutorial</a>.)
        </p>

        <h1 className={`${utilStyles.headingLg} ${utilStyles.textAlignCenter}`}>
          Мой текстовый блог
        </h1>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, category }) => (
            <li className={utilStyles.listItem} key={id}>
              {title === "Шесть важнейших жизненных настроек: День 1" && (
                <h4 style={{ marginTop: "0" }}>Философия</h4>
              )}
              {title ==
                "When to Use Static Generation v.s. Server-side Rendering" && (
                <h4>Next.js</h4>
              )}
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
