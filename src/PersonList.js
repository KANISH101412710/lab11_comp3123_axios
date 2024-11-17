import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class PersonList extends Component {
    state = {
        persons: []
    };

    componentDidMount() {
        axios.get('https://randomuser.me/api/?results=10')
            .then(res => {
                const persons = res.data.results;
                this.setState({ persons });
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }

    render() {
        return (
            <div className="container">
                <h2 className="header">User List</h2>
                {this.state.persons.map((person, index) => (
                    <div className="person-card mb-3" key={index}>
                        <div className="person-header">
                            {person.name.title} ${person.name.first} ${person.name.last} - {person.login.uuid}
                        </div>
                        <div className="person-content row align-items-center">
                            <div className="col-auto text-center">
                                <img src={person.picture.large} className="card-img" alt="User Avatar" />
                                <button className="btn btn-details mt-2">Details</button>
                            </div>
                            <div className="col">
                                <div className="card-body">
                                    <p className="card-text">
                                        <strong>User Name:</strong> {person.login.username} <br />
                                        <strong>Gender:</strong> {person.gender.toUpperCase()} <br />
                                        <strong>Time Zone Description:</strong> {person.location.timezone.description} <br />
                                        <strong>Address:</strong> {person.location.street.number} {person.location.street.name}, {person.location.city}, {person.location.state}, {person.location.country} - {person.location.postcode} <br />
                                        <strong>Email:</strong> {person.email} <br />
                                        <strong>Birth Date and Age:</strong> {person.dob.date} ({person.dob.age} years old) <br />
                                        <strong>Register Date:</strong> {person.registered.date} <br />
                                        <strong>Phone:</strong> {person.phone} <br />
                                        <strong>Cell:</strong> {person.cell} <br />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default PersonList;