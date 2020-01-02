import React, { Component } from 'react';



class SignUpPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'oanandreeadin@gmail.com',
            password: 'blablabla',
            passwordbis: 'blablabla',
            name: 'Andreea',
            lastname: 'Dinca'
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        this.setState({
            JSON: e.target.value,
        })
        console.log(this.state.JSON);

    }
    render() {
        return (
            <div>
                <h1>{JSON.stringify(this.state, 1, 1)}</h1>
                <form>

                    <input type="email" name="email" />
                    <input type="password" name="password" />
                    <input type="passwordbis" name="passwordbis" />
                    <input type="name" name="name" />
                    <input type="lastname" name="lastname" />
                    <input type="submit" value="Submit" />

                </form>




            </div>




        )
    }
}


export default SignUpPage