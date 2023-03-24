<ul>
  {const philosophy = allPostsData.filter( (post) => post.category ===
  "philosophy" ); const philosophyItems = philosophy.map((post) => (
  <li className={utilStyles.listItem} key={id}>
    {setPhilosophyTitle({ title })}
    {setNextJsTitle({ title })}
    <Link href={`/posts/${id}`}>
      <a>{title}</a>
    </Link>
    <br />
    <small className={utilStyles.lightText}>
      <Date dateString={date} />
    </small>
  </li>
  ))};
</ul>;




function List({allPostsData}) {
  const philosophy = allPostsData.filter( (post) => post.category ===
  "philosophy" );
   const philosophyItems = philosophy.map((post) => (
  <li className={utilStyles.listItem} key={id}>
    <Link href={`/posts/${id}`}>
      <a>{title}</a>
    </Link>
    <br />
    <small className={utilStyles.lightText}>
      <Date dateString={date} />
    </small>
  </li>
   );
   return (
    <ul>{philosophyItems}</ul>
  )
   )
}