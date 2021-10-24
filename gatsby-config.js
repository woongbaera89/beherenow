module.exports = {
  siteMetadata: {
    siteUrl: "http://BeHereNow.co.kr",
    title: "BeHereNow",
  },
  plugins: [
    "gatsby-plugin-emotion",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "BeHereNow",
        short_name: "BeHereNow",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#313235",
        icon: "src/images/icon.png",
      },
    }
  ],
};
