import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import StandardNews from '../components/StandardNewsSection'


import "../CSS/news.css"

const BlogPage = ({ data }) => (
    <Layout>
        <div className="wrapper">
            <div className="latest-news-banner">
                <div className="news-publish-date">
                    <p>PUBLISHED DATE: TBA</p>
                </div>
                <div className="latest-news-title">
                    <h1>Latest News</h1>
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
            <div className="more-news-banner">
                <h1><Link to="/morenews" className="more-news-title">More News</Link></h1>
            </div>
            <div className="more-news">
                <StandardNews />
            </div>
        </div>
    </Layout>
)

export const LatestNewsQuery = graphql`
query LatestNewsIndexQuery {
    allMarkdownRemark(limit: 4) {
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

export default BlogPage
