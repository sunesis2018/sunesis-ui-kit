import React from 'react';
//import logo from '../images/logo.png';
import NavigationBar from "../navigations/NavigationBar";
import Footer from "../footer/Footer";

class Login extends React.Component{

    state = {
        redirect: false
    };

    constructor(props){
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }
    handleSubmit(){
        this.props.history.push('/dashboard');
    }


render() {

    return (
        <>
            <NavigationBar/>
            <section className="section">
        <div className="pt4">
            <div className="content-center">
                <div className="h1 t-center pb-3">Welcome</div>

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Username</label>
                    </div>
                    <div className="w-4">
                        <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    </div>
                    <div className="pt1">
                        <label>Password</label>
                    </div>
                    <div className="w-4">
                        <input type="password" value={this.state.value} onChange={this.handleChange}/>
                    </div>
                    <div className="pt3">
                        <button className="btn btn-black btn-round">Login</button>
                    </div>
                    <div className="t-center pt2">
                       <p className="underline-text">Forgot Password?</p>
                    </div>
                </form>
            </div>
        </div>
            </section>
<Footer/>
            </>
    );
}

}




export default Login;
