import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import "../CSS/news.css"

const MoreNewsPage = ({ data }) => (
    <Layout>
        <div className="wrapper">
            <div className="latest-news-banner">
                <div className="">
                    <p>Total News Content: {data.allMarkdownRemark.totalCount}</p>
                </div>
                <div className="latest-news-title">
                    <h1>All News</h1>
                </div>
            </div>
            <div className="latest-news">
                <div className="item-container">
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
            </div>
        </div>
    </Layout>
)

export const MoreNewsQuery = graphql`
query MoreNewsIndexQuery {
    allMarkdownRemark {
        totalCount
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
`

export default MoreNewsPage
