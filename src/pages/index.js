import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout.js';
// pages in gatsby must be a default export to get picked up
export default function IndexPage() {
  return (
    <Layout>
      <h1>Hello Friend</h1>
      <Link to="/about">About</Link>
    </Layout>
  );
}
