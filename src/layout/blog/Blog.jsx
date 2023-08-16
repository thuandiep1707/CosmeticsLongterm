import {useState, useContext} from 'react';

import { GlobalContext } from '../../GlobalContext';

import './blog.scss'

const Blog = () => {
    const {} = useContext(GlobalContext)

    return (
        <div className="blog">
            blog nè
        </div>
    )
}

export default Blog;