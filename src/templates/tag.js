import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Simple from "./simple"

// import { MDXRenderer } from "gatsby-plugin-mdx"

const HeaderLink = styled(Link)`
  & :hover {
    text-decoration: underline;
  }
`

const TaggedContent = styled.div``

const TaggedHeader = styled.div`
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
`

const TaggedFooter = styled.div``

export const query = graphql`
  query {
    allMdx(limit: 1000) {
      totalCount
      nodes {
        slug
        excerpt
        timeToRead
        frontmatter {
          title
          date(formatString: "MMMM Do, YYYY")
          thumbnail
          tags
          author {
            id
            name
          }
        }
      }
    }
  }
`

const Tagged = ({ pageContext, data }) => {
  const { tag } = pageContext
  const posts = data.allMdx.nodes
  return (
    <Simple title={`Tagged: ${tag}`}>
      <BackLink />

      <TaggedContent>
        <TaggedHeader>
          <h2>
            {posts.length} Post{posts.length !== 1 && "s"} tagged:{" "}
            <strong>{tag}</strong>
          </h2>
        </TaggedHeader>
        <ArticleScreen>
          <ArticleList>
            {posts.map(({ node }) => (
              <ArticleCard key={node.id}>
                <Link to={node.slug}>
                  <ArticleImage
                    src={node.frontmatter.thumbnail}
                    alt={node.frontmatter.title}
                  />
                </Link>

                <div className="px-4">
                  <HeaderLink to={node.slug}>
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
            <SearchInput />
          </ArticleSearch>
        </ArticleScreen>
        <TaggedFooter>
          <div style={{ borderTop: "1px solid #DDD", padding: 16 }}>
            Tagged: {tag}
          </div>

          <BackLink />
        </TaggedFooter>
      </TaggedContent>
    </Simple>
  )
}

export default Tagged
