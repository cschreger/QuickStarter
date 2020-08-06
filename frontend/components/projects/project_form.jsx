import React from 'react';
import project_form_container from './project_form_container';

class ProjectForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            description: '',
            goalFunding: "",
            categoryId: 0,
            locationId: 0,
            campaignEndDate: "",
            open: false,
            categoryName: "Select your category",
            pageIdx: 0,
            buttonIdx: 0,
            locationName: "Select your region",
            checks: 0,
            checkbox1click: false,
            checkbox2click: false,
            checkbox3click: false,
            checkbox4click: false,
        }

        this.handleDropdown = this.handleDropdown.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLocationDropdown = this.handleLocationDropdown.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
        this.handleFile = this.handleFile.bind(this);
    };



    handleInput(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        let projectData = new FormData();

        projectData.append('project[title]', this.state.title)
        projectData.append('project[description]', this.state.description)
        projectData.append('project[category_id]', this.state.categoryId)
        projectData.append('project[location_id]', this.state.locationId)
        projectData.append('project[goal_funding]', this.state.goalFunding)
        projectData.append('project[campaign_end_date]', this.state.campaignEndDate)
        projectData.append('project[media]', this.state.mediaFile)
 
        if (e.target.id === "next" && this.state.buttonIdx === 2) {
            this.props.createProject(projectData)
                .then(action => {
                    return this.props.history.push(`/projects/${action.project.id}/rewards`)
                })
        }    
    }


    handleFile(e) {
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () =>
            this.setState({ mediaUrl: reader.result, mediaFile: file });
        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({ mediaUrl: "", mediaFile: null });
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
    }


    handleCheckbox(e) {
        e.preventDefault()
        if  ((e.target.id === "check1") && (e.target.className === "fas fa-check-circle ")) {
            this.setState({
                checkbox1click: true,
                checks: this.state.checks += 1
            })
        } else if ((e.target.id === "check1") && (e.target.className === "fas fa-check-circle clicked")) {
            this.setState({
                checkbox1click: false,
                checks: this.state.checks -=1
        })
        } else if ((e.target.id === "check2") && (e.target.className === "fas fa-check-circle ")) {
            this.setState({
                checkbox2click: true,
                checks: this.state.checks += 1
        })
        } else if ((e.target.id === "check2") && (e.target.className === "fas fa-check-circle clicked")) {
            this.setState({
                checkbox2click: false,
                checks: this.state.checks -= 1
            })
        } else if ((e.target.id === "check3") && (e.target.className === "fas fa-check-circle ")) {
            this.setState({
                checkbox3click: true,
                checks: this.state.checks += 1
            })
        } else if ((e.target.id === "check3") && (e.target.className === "fas fa-check-circle clicked")) {
            this.setState({
                checkbox3click: false,
                checks: this.state.checks -= 1
            })
        } else if ((e.target.id === "check4") && (e.target.className === "fas fa-check-circle ")) {
            this.setState({
                checkbox4click: true,
                checks: this.state.checks += 1
            })
        } else if ((e.target.id === "check4") && (e.target.className === "fas fa-check-circle clicked")) {
            this.setState({
                checkbox4click: false,
                checks: this.state.checks -= 1
            })
        }
    }


    render () {
        let {title, description, goalFunding, categoryId, locationId, 
            campaignEndDate, open, categoryName, pageIdx, locationName, 
            checks} = this.state;

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
                        <label><p>Project Title</p>
                            <input className="project-title"
                            type="text"
                            value={title}
                            placeholder="My Amazing Project"
                            onChange={this.handleInput('title')}
                            />
                        </label>
        
                        <label><p>Project Description</p>
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
                            <span id="previous">Category</span>
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

                <div className={`location-dropdown ${open && pageIdx === 2 ? "open" : ""}`}
                    onClick={this.handleLocationDropdown}>
                    {locationName}
                    <i className="fas fa-caret-down"></i>
                </div>

                <div className={`location-list-container ${open && pageIdx === 2 ? "open" : ""}`} >

                    <ul className="project-locations">
                        <li value="1" onClick={this.handleLocationDropdown}>United States/North America</li>
                        <li value="2" onClick={this.handleLocationDropdown}>Europe</li>
                        <li value="3" onClick={this.handleLocationDropdown}>Asia</li>
                        <li value="4" onClick={this.handleLocationDropdown}>Africa</li>
                        <li value="5" onClick={this.handleLocationDropdown}>Australia</li>
                        <li value="6" onClick={this.handleLocationDropdown}>South America</li>
                        <li value="7" onClick={this.handleLocationDropdown}>Antarctica</li>
                    </ul>
                </div>

                <div className='additional-info-container'>
                    <label id="end-date">Campaign End Date
                    <input className= 'campaign-end-date'
                        type="date"
                        value={campaignEndDate}
                        onChange={this.handleInput('campaignEndDate')}
                    /></label>

                    <label>Goal Funding(USD, no commas)
                    <input className='goal-funding'
                        type="text"
                        placeholder="USD"
                        value={goalFunding}
                        onChange={this.handleInput('goalFunding')}
                    /></label>
    
                </div>

                <div className="eligibility-container"><p>Eligibility</p>
                    <i id="check1" className={`fas fa-check-circle ${this.state.checkbox1click === true ? "clicked" : ""}`}
                        onClick={this.handleCheckbox}>
                        I am at least 18 years old.</i>

                    <i id="check2" className={`fas fa-check-circle ${this.state.checkbox2click === true ? "clicked" : ""}`}
                        onClick={this.handleCheckbox}>
                        I can verify an address and bank account.</i>

                    <i id="check3" className={`fas fa-check-circle ${this.state.checkbox3click === true ? "clicked" : ""}`}
                        onClick={this.handleCheckbox}>
                        I can verify a government issued ID.</i>

                    <i id="check4" className={`fas fa-check-circle ${this.state.checkbox4click === true ? "clicked" : ""}`}
                        onClick={this.handleCheckbox}>
                        I have a debit and/or credit card.</i>

                </div>

                <div className="project-photo">
                <label>Project Photo<input 
                id="upload" 
                type="file"
                onChange={this.handleFile}
                /></label>
                </div>


                <div className="button-container">
                    <div className="previous-container">
                        <i
                            id="previous"
                            className="fas fa-long-arrow-alt-left"
                            onClick={this.handlePageChange}
                        >
                            <span id="previous">Project Idea</span>
                        </i>
                    </div>    

                    <button id="next" 
                    className={`next-button ${(locationId && campaignEndDate && goalFunding && this.state.mediaUrl && (checks === 4)) ? "choice" : " "}`}
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