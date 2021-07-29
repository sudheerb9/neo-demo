import REACT from 'react'

function Table(props) {
    return(
        <tr>
            <td >{props.num}</td>
            <td>{props.class}</td>
            <td>{props.sections}</td>
            <td>{props.total}</td>
        </tr>
    )
}

export default Table