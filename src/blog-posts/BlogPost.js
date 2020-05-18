import React, {useRef, useEffect} from 'react'

import hljs from 'highlight.js'
import {allPosts} from './posts'

import 'highlight.js/styles/github.css';
import './blog-posts.css'

hljs.registerLanguage('python', require('highlight.js/lib/languages/python'));
hljs.registerLanguage('js', require('highlight.js/lib/languages/javascript'));
hljs.registerLanguage('bash', require('highlight.js/lib/languages/bash'));


export const BlogPost = ({
    match: {params: {slug}}
}, ref) => {
    const blogRef = useRef(null)
    useEffect( () => {
        if(blogRef.current) {
            blogRef.current
                .querySelectorAll('pre code')
                .forEach((block) => {
                    hljs.highlightBlock(block);
                }
            );
        }
    }, [])

    const blogPosts = allPosts.filter(p => p.slug === slug)
    if(!blogPosts.length) {
        return <div>Not found</div>
    }
    const FoundPost = blogPosts[0]
    return (
        <div ref={blogRef}>
            <FoundPost.body />
        </div>
    )
}