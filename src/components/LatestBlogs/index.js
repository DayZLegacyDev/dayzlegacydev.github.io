import React from 'react';

const BlogList = [
  {
    title: 'Progress Report - September 2023',
    image: require('@site/blog/progress-report-september-2023/img/poster.png').default,
    description: (
      <>
        A fairly large update is landing soon and aims to fix many bugs and improve the overall quality of life.
      </>
    ),
    link: "/blog/progress-report-september-2023"
  },
  {
    title: 'Progress Report - June 2023',
    image: require('@site/blog/progress-report-june-2023/img/poster.png').default,
    description: (
      <>
        Work continues on increasing quality-of-life and resolving some of the most frustrating issues in DayZ Legacy.
      </>
    ),
    link: "/blog/progress-report-june-2023"
  },
  {
    title: 'State of the Project - May 2023',
    image: require('@site/blog/progress-report-may-2023/img/poster.png').default,
    description: (
      <>
        An important notice about the future of DayZ Legacy.
      </>
    ),
    link: "/blog/progress-report-may-2023"
  }
  
];

function BlogPost({ image, title, description, link }) {
  console.log(image);
  return (
    <a href={link} className="col col--4 text--center padding-horiz--md" style={{ textDecoration: "none", marginBottom: "2.5em" }}>
      <div style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)), url(${image})`
      }} className="blog-card">
        <h3 className="monospaced">{title}</h3>
        <p>{description}</p>
      </div></a>
  );
}

export default function LatestBlogs() {
  return (
    <section className="home-section">
      <div className="container">
        <div className="row" style={{marginBottom: "2em"}}>
          <h2 className="monospaced">Latest Blogs</h2>
        </div>
        <div className="row">
          {BlogList.map((props, idx) => (
            <BlogPost key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
