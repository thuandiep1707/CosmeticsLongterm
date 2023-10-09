import {useState, useContext} from 'react';

import { GlobalContext } from '../../GlobalContext';

import './blog.scss'

const Blog = () => {
    const {} = useContext(GlobalContext)

    return (
        <div className="blog">
            Các bài viết đang trong giai đoạn hoàn thiện, mời quý khách quay lại sau
        </div>
    )
}

export default Blog;