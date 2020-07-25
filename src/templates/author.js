import React from "react";
import { Link, graphql } from "gatsby";
import styled from "styled-components";
import Simple from "./simple";

// import { MDXRenderer } from "gatsby-plugin-mdx"

const HeaderLink = styled(Link)`
  & :hover {
    text-decoration: underline;
  }
`;

const AuthoredContent = styled.div`

`;

const AuthoredHeader = styled.div`

  h2 {
    font-weight: 400;
    margin-bottom: 2px;
    & strong {
      background: #dbf1ff;
      color: #26699e;
      padding: 8px;
      border-radius: 4px;
      font-weight: 400;
    }
  }
`;

const AuthoredFooter = styled.div`

`;

export const query = graphql`
  query ($authorId: String!){
    allMarkdownRemark(
      limit: 1000
      filter: { frontmatter: { author: { id: { eq: $authorId } } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            thumbnail
            tags
            date
            author {
              id
              name
            }
          }
          fields {
            slug
          }
          excerpt
          timeToRead
        }
      }
    }
  }
`;

const Authored = ({ pageContext, data }) => {
  const { author } = pageContext;
  const posts = data.allMarkdownRemark.edges;
  return (
    <Simple title={`Authored: ${author.name}`}>
      <BackLink />

      <AuthoredContent>
        <AuthoredHeader>
          <h2>
            {posts.length} Post{posts.length !== 1 && "s"} Authored by:{" "}
            <strong>{author.name}</strong>
          </h2>
        </AuthoredHeader>
        <ArticleScreen>
          <ArticleList>
            {posts.map(({ node }) => (
              <ArticleCard key={node.id}>
                <Link to={node.fields.slug}>
                  <ArticleImage
                    src={node.frontmatter.thumbnail}
                    alt={node.frontmatter.title}
                  />
                </Link>

                <div className="px-4">
                  <HeaderLink to={node.fields.slug}>
                    <h4 className="font-bold text-xl py-0 mt-0 mb-2">
                      {node.frontmatter.title}
                    </h4>
                  </HeaderLink>
                  <ArticlePosted
                    id={node.frontmatter.author.id}
                    name={node.frontmatter.author.name}
                    date={node.frontmatter.date}
                  />
                  <p className="excerpt">{node.excerpt}</p>
                  <div>
                    {node.frontmatter.tags.map((tag) => (
                      <span style={{ marginRight: 8 }}>
                        <Tag label={tag} />
                      </span>
                    ))}
                  </div>
                </div>
              </ArticleCard>
            ))}
          </ArticleList>
          <ArticleSearch>
            {/*<SearchInput />
             {tags.map(tag => (
              <div
                style={{
                  width: "100%",
                  textAlign: "right",
                  margin: "16px 0px",
                }}
              >
                <Tag>{tag.label}</Tag>
              </div>
            ))} */}
          </ArticleSearch>
        </ArticleScreen>
        <AuthoredFooter>
          <div style={{ borderTop: "1px solid #DDD", padding: 16 }}>
            Authored: {author.name}
          </div>
          <BackLink />
        </AuthoredFooter>
        {/* <MDXRenderer>{post.rawMarkdownBody}</MDXRenderer> */}
      </AuthoredContent>
    </Simple>
  );
};

export default Authored;
