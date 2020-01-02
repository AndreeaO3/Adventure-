import React, {Component} from 'react';


class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state= {
            email: ''
        };
    this.updateEmailField= this.updateEmailField.bind(this);
    }
       
     updateEmailField(e) {
        this.setState({
        /* email was [e.target.name] */
          email : e.target.value,
        });
    }

    render () {
        return (
            <div> 
              <h1>{this.state.email}</h1>
              <input className="emailInput" type="email" name="email"
              onChange= {this.updateEmailField}/>
            </div>
        );
    }
}
// function () => {
//     let emailForm = document.querySelector("emailInput");
//     emailForm.onChange(insertHTML )
// }






export default SignUp