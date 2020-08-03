import React from 'react'

class CategoryBar extends React.Component {

    render() {

        return (
            <div className='categories-bar-container'>
                <ul className="categories-list">
                    <li value="1">Arts</li>
                    <li value="2">Comics</li>
                    <li value="5">Design</li>
                    <li value="7">Film &amp; Video </li>
                    <li value="8">Food</li>
                    <li value="9">Games</li>
                    <li value="11">Music</li>
                    <li value="13">Publishing</li>
                </ul>
            </div>
        )
    }

}

export default CategoryBar;