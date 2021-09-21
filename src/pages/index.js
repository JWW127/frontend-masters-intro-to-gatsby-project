import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Seo } from '../components/seo.js'

// pages in gatsby must be a default export to get picked up
export default function IndexPage() {
    //use to import the data that currently resides in the gatsby config file 
  const data = useStaticQuery(graphql`
    query GetSiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const meta = data?.site?.siteMetadata ?? {};

  
  return (
    <>
    <Seo />
      <header>
        <Link to="/">{meta.title}</Link>
      </header>
      <main>
        <h1>Hello Friend</h1>
        <Link to="/about">About</Link>
      </main>
    </>
  );
}
