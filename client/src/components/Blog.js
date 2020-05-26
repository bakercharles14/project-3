import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Blog extends Component {
    state = {
        title: '',
        content: '',
        image: ''
    }



    render() {
        return (
            <div>
                <h1 className='blog-heading'>All Articles</h1>
                <div className='all-articles'>
                    <div className='new-article'>
                        <Link to='/newblog'>
                            <span className="material-icons">
                                add_circle
                        </span>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
