/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `CHANDRAMOHAN ASSOCIATES`,
    description: `A CONSTANT ENDEAVOR IN MAKING SENSIBLE SPACES FOR BETTER LIVING.THE QUEST GOES ON...`,
    siteUrl: `https://chandramohanassociates.com/`,
    image: `/cma.png`,
    pathPrefix: "/CMA-website",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `blurred`,
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/cma.png",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `./src/data/`,
      },
    },
    {
      resolve: `gatsby-transformer-excel`,
      options: {
        defval: "",
      },
    },
  ],
};
