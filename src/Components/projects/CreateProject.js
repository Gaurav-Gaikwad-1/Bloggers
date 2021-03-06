import React, { Component } from 'react'
import {connect} from 'react-redux';
import {createProject} from '../../store/action/projectActions'
import { Redirect } from 'react-router-dom';

class CreateProject extends Component {
    state = {
        title:'',
        content:''
    };

    handleChange = (event) => {
        
        this.setState({
            [event.target.id] : event.target.value                               //event.target.id is to know which input field is user changing ie by id email or password
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        //console.log(this.state);
        this.props.createProject(this.state);
        this.props.history.push('/');
    }


    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />

        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit}>
                    <h4 className='grey-text'>Creat New Project</h4>
                    <div className='input-field '>
                        <label htmlFor='title'>Project Title</label>
                        <input type='text' id='title' onChange={this.handleChange} className='white-text' />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='content'>Project Content</label>
                        <textarea id='content' onChange={this.handleChange} className='materialize-textarea white-text'/>
                    </div>
                    
                    <button className='waves-effect waves-light btn pink lighten-1'>Create Project</button>
                   
                </form>
                
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateProject);

//here we r importing create project action creator from projectAction.js & we also import { connect } from ract redux so that we can connect this comonent to  redux store
//


//1.
//So inside createproject component were filing in form then we click submit in this handleSubmit method were saying 
//this.props.createproject to create project and this is calling createProject method which is inside mapDispatchtoProps to create this on the props objects
//we're passing  in project which is stored on states and were using this dispatch and calling this action creator ie projectAction.js which is imported
//now go to projectAction.js