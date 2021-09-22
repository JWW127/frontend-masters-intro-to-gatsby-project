import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout.js';

import { imageWrapper } from '../styles/index.module.css';
// pages in gatsby must be a default export to get picked up
export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query GetBlogPosts {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          id
          slug
          frontmatter {
            title
            description
            date(fromNow: true)
          }
        }
      }
    }
  `);

  const posts = data.allMdx.nodes;

  return (
    <Layout>
      <div className={imageWrapper}>
        <StaticImage
          src="../images/cocktail.jpg"
          alt="its flowers and a cocktail on a table"
          placeholder="dominantColor"
          width={300}
          height={300}
        />
      </div>
      <h1>🔮Hello Friend🔮</h1>

      <h2>Recent Blog Post</h2>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Link to={post.slug}>{post.frontmatter.title}</Link>{' '}
              <small>posted {post.frontmatter.date}</small>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}
