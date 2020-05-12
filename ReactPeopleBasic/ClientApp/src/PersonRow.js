import React from 'react';

class PersonRow extends React.Component {

    render() {
        const { person, onSelectClick } = this.props;
        return (
            <tr className={person.age >= 65 ? 'danger' : ''}>
                <td>{person.firstName}</td>
                <td>{person.lastName}</td>
                <td>{person.age}</td>
                <td><button onClick={onSelectClick} className='btn btn-primary'>Select</button></td>
            </tr>
        );
    }
}

export default PersonRow;