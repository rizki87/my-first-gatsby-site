import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { SEO } from "../components/seo";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Architecture Bridge, Golden Gate Bridge Landmark"
        src="../images/pexels-pixabay-220765.jpg"
      />
    </Layout>
  );
};

// export const Head = () => <title>Home Page</title>;
export const Head = () => <SEO title="Home Page" />;

export default IndexPage;
