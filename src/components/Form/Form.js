import React, {Component} from 'react';
import axios from 'axios';
import './Form.css';

class Form extends Component {
    constructor() {
        super();
        this.state = {
        //attributes
          firstName: '',
          lastName: '',
          title: '',
          story: '',
          favoriteColor:'',
          photoUrl:''
        };
    }

    onChange = (e) => {
        /* named inputs to match corresponding
         values in state, now update the state 
        */
       this.setState({ [e.target.name]: e.target.value }); 
    };

    onSubmit = (e) => {
      e.preventDefault();
      // get form data out of state
      const { firstName, lastName, title, story, favoriteColor, photoUrl } = this.state;

      //make sure to match route from what I;m building in the backend
      //find out how to save the record and display!! (backend to save)

      axios.post('/', {firstName, lastName, title, story, favoriteColor, photoUrl})
        .then((result) => {
        //access the results here
        });
    };

    render() {
      const { firstName, lastName, title, story, favoriteColor, photoUrl } = this.state; 
      return (
       <div>   
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={this.onChange}
          />
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={this.onChange}
          />
         <input
            type="text"
            name="title"
            value={title}
            onChange={this.onChange}
          />
          <input
            type="text"
            name="story"
            value={story}
            onChange={this.onChange}
          /> 
          <input
            type="text"
            name="favoriteColor"
            value={favoriteColor}
            onChange={this.onChange}
          /> 
          <input
            type="text"
            name="photoUrl"
            value={photoUrl}
            onChange={this.onChange}
          /> 
          <button type="submit">Submit</button>          
      </form>
     </div> 
    );
  }    
}



export default Form;