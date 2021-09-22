import * as React from 'react';
import { Link } from 'gatsby';
import Layout from './layout';

//pagecontext gives access to frontmatter located in the mdx blog posts
export default function PostLayout({ children, pageContext }) {
  const { title, description } = pageContext.frontmatter;
  return (
    <Layout>
      {children}
      <Link to="/">&larr; back</Link>
    </Layout>
  );
}
