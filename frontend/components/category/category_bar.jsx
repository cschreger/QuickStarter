import React from 'react';

const CategoryBar = () => {

        return (
            <div className='categories-bar-container'>
                <ul className="categories-list">
                    <li><a href="/#/categories/1/projects">Arts</a></li>
                    <li><a href="/#/categories/2/projects">Comics</a></li>
                    <li><a href="/#/categories/5/projects">Design</a></li>
                    <li><a href="/#/categories/7/projects">Film &amp; Video</a></li>
                    <li><a href="/#/categories/8/projects">Food</a></li>
                    <li><a href="/#/categories/9/projects">Games</a></li>
                    <li><a href="/#/categories/11/projects">Music</a></li>
                    <li><a href="/#/categories/13/projects">Publishing</a></li>
                </ul>
            </div>
        )
}

export default CategoryBar;