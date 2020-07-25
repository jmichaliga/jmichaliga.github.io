import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const SimplePage = ({ children, title, description }) => {
  return (
    <Layout>
      <SEO title={title} description={description} />
      {children}
    </Layout>
  );
};

export default SimplePage;
