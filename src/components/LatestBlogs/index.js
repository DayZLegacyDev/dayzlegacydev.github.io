import React from 'react';

const BlogList = [
  {
    title: 'Progress Report - May 2023',
    //image: require('@site/blog/progress-report-apr-2023/img/poster.png').default,
    description: (
      <>
        Work continues on fixing the 0.62 map and improving the install and update experience.
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
