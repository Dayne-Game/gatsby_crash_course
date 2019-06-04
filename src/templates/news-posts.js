import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/layout';

import '../CSS/news-post.css'

export default function Template({ data }) {
    const post = data.markdownRemark

    return (
        <Layout>
            <div className="news-post-wrapper">
                <div className="news-post-header">
                    <h1>{post.frontmatter.title}</h1>
                    <p>Posted by {post.frontmatter.author} on {post.frontmatter.date}</p>
                </div>
                <div className="news-post-text-box">
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </div>
            </div>
        </Layout>
    )
}

export const postQuery = graphql`
query NewsPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: {eq: $path } }){
        html
        frontmatter {
            path
            title
            author
            date
        }
    }
}
`