import React from 'react';

class ProjectForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            description: '',
            goalFunding: 0,
            categoryId: 0,
            locationId: 0,
            campaignEndDate: "",
            open: false,
            categoryName: "Select your category",
            pageIdx: 0,
            buttonIdx: 0,
            locationName: "Select your region"
        }

        this.handleDropdown = this.handleDropdown.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLocationDropdown = this.handleLocationDropdown.bind(this);
    };



    handleInput(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const projectData = new FormData();

        if (e.target.id === "next" && this.state.buttonIdx === 2) {
            this.props.createForm(formData)
                // .then(dispatch => )
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

    handleLocationDropdown(e) {
        e.preventDefault();
        if (e.currentTarget.className === 'location-dropdown') {
            this.setState({ open: !this.state.open })
        } else {
            let location = $("<div />").html(e.currentTarget.innerHTML).text();
            this.setState({
                open: !this.state.open,
                locationId: e.currentTarget.value,
                locationName: location
            })
        }
    }


    handlePageChange(e) {
        e.preventDefault()
        if (e.target.id === "next") {
            this.setState({
                buttonIdx: this.state.buttonIdx += 1,
                pageIdx: this.state.pageIdx += 1
            })
        } else if (e.target.id === "previous") {
            this.setState({
                buttonIdx: this.state.buttonIdx -= 1,
                pageIdx: this.state.pageIdx -= 1
            })
        }
        console.log(`Page idx: ${this.state.pageIdx}`)
        console.log(`Button idx: ${this.state.buttonIdx}`)
    }


    render () {
        let {title, description, goalFunding, categoryId, locationId, 
            campaignEndDate, open, categoryName, pageIdx, locationName, 
            buttonIdx} = this.state;

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

            <span className="page-number">{this.state.pageIdx + 1} of 3</span>
            <div className="project-create-form-container">

                <form className={`project-create-form ${pageIdx > 0 ? "hidden" : ""}`}>
                    <h2>First, let's get you set up.</h2>
                    <h4>Pick a project category to connect with a specific
                    community. You can always update this later.
                    </h4>
                    <div className={`category-dropdown ${open ? "open" : ""}`}
                        onClick={this.handleDropdown}>
                        {categoryName}
                        <i className="fas fa-caret-down"></i>
                    </div>

                    <div className={`category-list-container ${open ? "open" : ""}`} >

                        <ul className="project-categories">
                            <li value="1" onClick={this.handleDropdown}>Arts</li>
                            <li value="2" onClick={this.handleDropdown}>Comics</li>
                            <li value="3" onClick={this.handleDropdown}>Crafts</li>
                            <li value="4" onClick={this.handleDropdown}>Dance</li>
                            <li value="5" onClick={this.handleDropdown}>Design</li>
                            <li value="6" onClick={this.handleDropdown}>Fashion</li>
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
                <button id="next" 
                    className={`next-button ${categoryId ? "choice" : " "}`}
                    onClick={this.handlePageChange}
                >
                    Next: Project idea
                </button>
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



            <form className={`project-create-form ${pageIdx === 1 ? "" : "hidden"}`}>
                <h2>Describe what you'll be creating.</h2>
                <h4>And don't worry, you can edit this later, too.</h4>

                <div className="project-title-description-container">
                    <label>Title
                        <input className="project-title"
                        type="text"
                        value={title}
                        placeholder="My Amazing Project"
                        onChange={this.handleInput('title')}
                        />
                    </label>

                    <label>Description
                        <input className="project-description"
                        type="text"
                        value={description}
                        placeholder="A movie that will change the idea of what it means to be a movie."
                        onChange={this.handleInput('description')}
                        />
                    </label>
                </div>

                <div className="button-container">
                    <div className="previous-container">
                    <i 
                    id="previous"
                    className="fas fa-long-arrow-alt-left"
                    onClick={this.handlePageChange}
                    >
                        <p id="previous">Category</p>
                    </i> 
                    </div>         
                              
                    <button id="next" 
                    className={`next-button ${title && description ? "choice" : " "}`}
                    onClick={this.handlePageChange}
                    >
                        Next: Location/Details
                    </button>
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



            <form className={`project-create-form ${pageIdx === 2 ? "" : "hidden"}`}>
                <h2>Finally, let's get a few details.</h2>
                <h4>Tell us where you're based and confirm a few other details before we confirm.</h4>

                <div className={`location-dropdown ${open ? "open" : ""}`}
                    onClick={this.handleLocationDropdown}>
                    {locationName}
                    <i className="fas fa-caret-down"></i>
                </div>

                <div className={`location-list-container ${open ? "open" : ""}`} >

                    <ul className="project-locations">
                        <li value="1" onClick={this.handleLocationDropdown}>United States/North America</li>
                        <li value="2" onClick={this.handleLocationDropdown}>Europe</li>
                        <li value="3" onClick={this.handleLocationDropdown}>Asia</li>
                        <li value="4" onClick={this.handleLocationDropdown}>Africa</li>
                        <li value="5" onClick={this.handleLocationDropdown}>Australia</li>
                        <li value="6" onClick={this.handleLocationDropdown}>South America</li>
                        <li value="7" onClick={this.handleLocationDropdown}>Antarctic</li>
                        <li value="8" onClick={this.handleLocationDropdown}>Food</li>
                    </ul>
                </div>


                <div className="button-container">
                    <div className="previous-container">
                        <i
                            id="previous"
                            className="fas fa-long-arrow-alt-left"
                            onClick={this.handlePageChange}
                        >
                            <p id="previous">Project Idea</p>
                        </i>
                    </div>    

                    <button id="next" 
                    className="next-button"
                    onClick={this.handleSubmit}
                    >Create Project</button>
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
            </div >

     

        )
    }
    

};

export default ProjectForm;