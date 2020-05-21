import React, { Component } from 'react'

export default class Data extends Component {

    state = {
        isLoading: true,
        employees: []
      };
    
      async componentDidMount() {
        const response = await fetch('/niecey_api/v1/employees');
        const body = await response.json();
        console.log(body);
        this.setState({ employees: body, isLoading: false });
      }

    render() {
        const {employees, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }
        return (
                <div className="App">
                <header className="App-header">
                  <div className="App-intro">
                    <h2>Employee List</h2>
                    {employees.map(employee =>
                      <div key={employee.id}>
                        {employee.firstName}
                        <br></br>
                        {employee.lastName}
                        <br></br>
                        {employee.email}
                      </div>
                    )}
                  </div>
                </header>
              </div>
        )
    }
}

