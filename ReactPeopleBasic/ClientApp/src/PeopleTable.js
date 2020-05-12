import React from 'react';
import PersonForm from './PersonForm';
import PersonRow from './PersonRow';

class PeopleTable extends React.Component {
    state = {
        people: [
            {
                firstName: 'Avrumi',
                lastName: 'Friedman',
                age: 38
            },
            {
                firstName: 'John',
                lastName: 'Doe',
                age: 45
            }],
        selectedPeople: [],
        person: {
            firstName: '',
            lastName: '',
            age: ''
        }
    }

    onFirstNameChange = e => {
        const personCopy = { ...this.state.person, firstName: e.target.value };
        this.setState({ person: personCopy });
    }

    onTextChange = e => {
        const copy = { ...this.state.person };
        copy[e.target.name] = e.target.value;
        this.setState({ person: copy });
    }

    onAddClick = () => {
        const people = [...this.state.people, this.state.person];
        this.setState({
            people,
            person: {
                firstName: '',
                lastName: '',
                age: ''
            }
        });
    }

    onClearClick = () => {
        this.setState({ people: [] });
    }

    generateBody = () => {
        if (this.state.people.length === 0) {
            return <h1>No people added yet! Add some people!</h1>;
        }

        return <table className="table table-hover table-striped table-bordered">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Select</th>
                </tr>
            </thead>
            <tbody>
                {this.state.people.map((p, i) => <PersonRow key={i} person={p} />)}
            </tbody>
        </table>;
    }

    onSelectClick = person => {
        const { selectedPeople } = this.state;
        this.setState({ selectedPeople: [...selectedPeople, person] });
    }

    render() {
        return (
            <div className="container" style={{ marginTop: 60 }}>
                <PersonForm
                    person={this.state.person}
                    onFirstNameChange={this.onTextChange}
                    onLastNameChange={this.onTextChange}
                    onAgeChange={this.onTextChange}
                    onAddClick={this.onAddClick}
                    onClearClick={this.onClearClick} />
                {/*this.generateBody()*/}
                <div className="row">
                    <div className="col-md-2">
                        <ul>
                            {this.state.selectedPeople.map((p, i) => <li key={i}>{`${p.firstName} - ${p.lastName}`}</li>)}
                        </ul>
                    </div>
                    <div className="col-md-10">
                        {!!this.state.people.length && <table className="table table-hover table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Age</th>
                                    <th>Select</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.people.map((p, i) =>
                                    <PersonRow key={i} person={p}
                                        onSelectClick={() => this.onSelectClick(p)} />
                                )}
                            </tbody>
                        </table>}
                        {!this.state.people.length && <h1>No people added yet! Add some people!</h1>}
                    </div>
                </div>

            </div>);
    }
}

export default PeopleTable;

//Random number between 1 - 10,000 - Math.floor(Math.random() * 10000) + 1;

//Create a React application that has an "Add Number" button on top with a <table> underneath.
//The table should have two columns: Number and "Add/Remove". Beneath the table there 
//should be a <ul> titled: "Added numbers"
//Here's how it should work:
//As the user presses the "Add Number" button on top, a new row should be added to the table
//with a random number in the first column, and an Add button in the second column.
//When the user clicks on the Add button of any given row, that number should
//show up in the ul underneath, and the add button should change to show "Remove". If
//they then click "Remove" then that number should get removed from the ul, and the button
//should flip back to saying "Add"