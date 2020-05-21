import React, { Component } from 'react';
import "../styles/UpdateForm.css";

export default class UpdateForm extends Component {
    render() {
        return (
            <div className="App-form">
                <form>
                    <label>First Name:
                        <input type="text" name="firstName"></input>
                    </label>
                    <label>
                        Last Name:
                        <input type="text" name="lastName"></input>
                    </label>
                    <label>
                        Email:
                        <input type="text" name="lastName"></input>
                    </label>
                </form>
            </div>
        )
    }
}
