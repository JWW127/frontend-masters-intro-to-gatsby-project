module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'Frontend Masters Intro to Gatsby',
    description: 'FEM Intro to Gatsby Project',
    image:
      'https://i.rehttps://res.cloudinary.com/dpc3zrcvs/image/upload/c_scale,w_800/v1632173793/ray-brad-sci-fi_qkeujk.jpgd.it/cmtksuaq83671.png',
  },
  plugins: [
    'gatsby-plugin-react-helmet',

    // this set of plugins is to enable creating mdx blog post from the src/post folder
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          posts: require.resolve('./src/components/post-layout.js'),
        },
      },
    },
    //end mdx config
  ],
};
