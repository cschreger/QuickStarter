import React from 'react';

class CategoryProjects extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchProjects();
    }

    render() {

        const categories = {
            1: 'Arts',
            2: 'Comics',
            3: 'Crafts',
            4: 'Dance',
            5: 'Design',
            6: 'Fashion',
            7: 'Film & Video',
            8: 'Food',
            9: 'Games',
            10: 'Journalism',
            11: 'Music',
            12: 'Photography',
            13: 'Publishing',
            14: 'Technology',
            15: 'Theater'
        }
        
        return (
            <div>Hello there</div>
        )
    }
}

export default CategoryProjects;