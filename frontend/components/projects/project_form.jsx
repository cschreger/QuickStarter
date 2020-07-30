import React from 'react';

class ProjectForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: '',
            goalFunding: 0,
            categoryId: 0,
            locationId: 0,
            campaignEndDate: "",
            open: false,
            categoryName: "Select your category",
            pageIdx: 0
        }

        this.handleDropdown = this.handleDropdown.bind(this);
    };



    handleInput(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }



    handleDropdown(e) {
        e.preventDefault();
        if (e.currentTarget.className === 'category-dropdown') {
            this.setState({open: !this.state.open})
        } else {
            let category = $("<div />").html(e.currentTarget.innerHTML).text();
            this.setState({
                open: !this.state.open, 
                categoryId: e.currentTarget.value,
                categoryName: category
            })
        }
    }




    render () {
        let {title, description, goalFunding, categoryId, locationId, 
            campaignEndDate, open, categoryName, pageIdx} = this.state;

        let buttonNotReady, messageStatus;

        if (pageIdx === 0 && categoryId) {
            buttonNotReady === false;
        } else if ((pageIdx === 1) && (title && description)) {
            buttonNotReady === false;
        } else if ((pageIdx === 2) && (locationId && goalFunding && campaignEndDate)){
            buttonNotReady === false;
        } else {
            buttonNotReady === true;9
        }
         

        
    return (

        <div className="project-form-page">

            <span className="page-number">{pageIdx + 1} of 3</span>
            <div className="project-create-form-container">

                <form className="project-create-form">
                    <h2>First, let's get you set up.</h2>
                    <h4>Pick a project category to connect with a specific
                    community. You can always update this later.
                    </h4>
                    <div className={`category-dropdown ${open ? "open" : ""}`}
                        onClick={this.handleDropdown}>
                        {categoryName}
                        <i className="fas fa-caret-down"></i>
                    </div>

                    <div 
                    className={`category-list-container ${open ? "open" : ""}`} >

                        <ul className="project-categories">
                            <li value="1" onClick={this.handleDropdown}>Arts</li>
                            <li value="2" onClick={this.handleDropdown}>Comics</li>
                            <li value="3" onClick={this.handleDropdown}>Crafts</li>
                            <li value="4" onClick={this.handleDropdown}>Dance</li>
                            <li value="5" onClick={this.handleDropdown}>Design</li>
                            <li value="6" onClick={this.handleDropdown}> Fashion</li>
                            <li value="7" onClick={this.handleDropdown}>Film &amp; Video</li>
                            <li value="8" onClick={this.handleDropdown}>Food</li>
                            <li value="9" onClick={this.handleDropdown}>Games</li>
                            <li value="10" onClick={this.handleDropdown}>Journalism</li>
                            <li value="11" onClick={this.handleDropdown}>Music</li>
                            <li value="12" onClick={this.handleDropdown}>Photography</li>
                            <li value="13" onClick={this.handleDropdown}>Publishing</li>
                            <li value="14" onClick={this.handleDropdown}>Technology</li>
                            <li value="15" onClick={this.handleDropdown}>Theater</li>
                            
                        </ul>
                    </div>

            <div className="button-container">
            <p className="nice-message">Nice to see you.</p>
            <button className="next-button">Next: Project idea</button>
            </div>

            <div className="project-footer-info">
                    To create a project, you're required to provide your 
                    location, age, national ID, banking and tax information, 
                    email, and mailing address. This information is necessary 
                    to prevent fraud, comply with the law, and — if your project 
                    is successful — to deliver funds. Please note: after launch, 
                    your ability to edit, hide, or delete a project is limited.
            </div>
            </form>
            </div>

        </div>

        )
    }
    

};

export default ProjectForm;