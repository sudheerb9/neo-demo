import REACT from 'react'
import TableElement from './TableElement'
// import Table from '../../.next/'

function FacultyTable(){
    return(
        <div className={'container'}>
        <table className={'table faculty table-bordered border-primary'} >
            <thead>
                <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Subject</th>
                <th>Degree</th>
                </tr>
            </thead>
            <tbody>
                <TableElement num={'1'} name={'Rohith Beema'} subject={'Maths'} degree={'BSc-Maths'}></TableElement>
                <TableElement num={'2'} name={'Sudheer B'} subject={'Science'} degree={'BSc-Physics'}></TableElement>
                <TableElement num={'1'} name={'Rohith Beema'} subject={'Maths'} degree={'BSc-Maths'}></TableElement>
                <TableElement num={'2'} name={'Sudheer B'} subject={'Science'} degree={'BSc-Physics'}></TableElement>
                <TableElement num={'1'} name={'Rohith Beema'} subject={'Maths'} degree={'BSc-Maths'}></TableElement>
                <TableElement num={'2'} name={'Sudheer B'} subject={'Science'} degree={'BSc-Physics'}></TableElement>
                <TableElement num={'1'} name={'Rohith Beema'} subject={'Maths'} degree={'BSc-Maths'}></TableElement>
                <TableElement num={'2'} name={'Sudheer B'} subject={'Science'} degree={'BSc-Physics'}></TableElement>
                <TableElement num={'1'} name={'Rohith Beema'} subject={'Maths'} degree={'BSc-Maths'}></TableElement>
                <TableElement num={'2'} name={'Sudheer B'} subject={'Science'} degree={'BSc-Physics'}></TableElement>
            </tbody>
        </table>
        </div>
    )
}

export default FacultyTable