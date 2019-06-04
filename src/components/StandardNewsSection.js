import React from "react"
import { Link, StaticQuery } from "gatsby"

import "../CSS/news.css"

const StandardNewsSection = ({ data }) => (
    <StaticQuery
        query={graphql` 
        
        query StandardNewsQuery {
            allMarkdownRemark(limit: 4 skip: 4) {
                edges {
                    node {
                        id
                        frontmatter {
                            path
                            title
                            date
                            author
                        }
                    }
                }
            }
        }
        
        `}
        render={data => (
            <>
                <div class="item-container">
                    {data.allMarkdownRemark.edges.map(post => (
                        <Link to={post.node.frontmatter.path} className="card-hover" key={post.node.id}>
                            <div className="news-card">
                                <div className="news-image"></div>
                                <div className="news-text">
                                    <h1><span className="red">NEWS</span></h1>
                                    <p>{post.node.frontmatter.title}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </>
        )}
    />
)

export default StandardNewsSection;