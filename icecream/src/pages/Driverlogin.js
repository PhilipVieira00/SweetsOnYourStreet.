import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import API from "../utils/API";
import Login from "../components/Login";


class Driverlogin extends React.Component {
    
        state = {
            email: "",
            password: ""
        };
    
        // When the component mounts, load all books and save them to this.state.books
        componentDidMount() {
            this.loadForm();
        }
    
        // Loads all books  and sets them to this.state.books
        loadForm = function () { }
    
        // Handles updating component state when the user types into the input field
        handleInputChange = event => {
            const { name, value } = event.target;
            this.setState({
                [name]: value
            });
        };
    
        handleFormSubmit = event => {
            event.preventDefault();
            console.log(this.state);
            API.loginAccount(this.state)
                .then(res => console.log(res));
        };

    render() {
        return (
            <div>
                
                <Header />
                <Footer />
                <Login />
            </div>
        );
    }
}


export default Driverlogin;