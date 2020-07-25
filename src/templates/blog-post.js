import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import tw from "tailwind.macro";
import Simple from "./simple";
import Tag from "../components/community/tag";
import BackLink from "../components/community/back-link";

import colors from "../colors";
import { MDXRenderer } from "gatsby-plugin-mdx"

import { ArticlePosted, AuthorCard } from "../components/community/articles";

const BlogContent = styled.div`

`;

const BlogHeader = styled.div`

  h1 {
    font-weight: 400;
    font-size: 40px;
    margin-bottom: 2px;
  }
`;

const BlogBody = styled.div`

  p {
    font-size: 16px;
    line-height: 24px;
    color: ${colors.textPrimary};
    & img {
      text-align: center;
      margin: 16px auto;
    }
  }
`;

const BlogFooter = styled.div`

`;

export const query = graphql`
  query($slug: String!) {
    mdx(slug: { eq: $slug } ) {
      html
      excerpt
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        author {
          id
          bio
          name
          twitter
        }
        headerImage
        tags
      }
      rawBody
    }
  }
`;

const BlogPost = ({ data }) => {
  const post = data.mdx;
  return (
    <Simple title={post.frontmatter.title} description={post.excerpt}>
      <BackLink />

      <BlogContent>
        <img src={post.frontmatter.headerImage} style={{ borderRadius: 10 }} />
        <BlogHeader>
          <h1>{post.frontmatter.title}</h1>
          <ArticlePosted
            id={post.frontmatter.author.id}
            name={post.frontmatter.author.name}
            date={post.frontmatter.date}
          />
          <div>
            {post.frontmatter.tags.map((tag, idx) => (
              <span key={`tag-${idx}`} style={{ marginRight: 8 }}>
                <Tag label={tag} />
              </span>
            ))}
          </div>
        </BlogHeader>
        <BlogBody>
          <MDXRenderer>{post.rawBody}</MDXRenderer>
        </BlogBody>
        <BlogFooter>
          <div
            style={{
              borderTop: `1px solid ${colors.lightGray}`,
              paddingTop: 16,
            }}
          >
            <AuthorCard
              avatar="https://placekitten.com/60/60"
              id={post.frontmatter.author.id}
              name={post.frontmatter.author.name}
            />
          </div>
          <BackLink />
        </BlogFooter>

      </BlogContent>
    </Simple>
  );
};

export default BlogPost;
