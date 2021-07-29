import REACT from 'react'

function TableElement(props) {
    return(
        <tr>
            <td >{props.num}</td>
            <td>{props.name}</td>
            <td>{props.subject}</td>
            <td>{props.degree}</td>
        </tr>
    )
}

export default TableElement