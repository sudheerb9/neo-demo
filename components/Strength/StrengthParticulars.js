import REACT from 'react'
import TableElement from './Table.js'
// import Table from '../../.next/'

function FacultyTable(){
    return(
        <div className={'container'}>
        <table className={'table table-primary faculty table-bordered border-primary'} >
            <thead>
                <tr>
                <th>S.No</th>
                <th>Class</th>
                <th>Sections</th>
                <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <TableElement num={'1'} class={'I'} sections={'5'} total={'250'}></TableElement>
                <TableElement num={'2'} class={'II'} sections={'5'} total={'260'}></TableElement>
                <TableElement num={'3'} class={'III'} sections={'5'} total={'260'}></TableElement>
                <TableElement num={'4'} class={'IV'} sections={'5'} total={'260'}></TableElement>
                <TableElement num={'5'} class={'V'} sections={'5'} total={'260'}></TableElement>
                <TableElement num={'6'} class={'VI'} sections={'5'} total={'260'}></TableElement>
                <TableElement num={'7'} class={'VII'} sections={'5'} total={'260'}></TableElement>
                <TableElement num={'8'} class={'VIII'} sections={'5'} total={'260'}></TableElement>
                <TableElement num={'9'} class={'IX'} sections={'5'} total={'260'}></TableElement>
                <TableElement num={'10'} class={'X'} sections={'5'} total={'260'}></TableElement>
            </tbody>
        </table>
        </div>
    )
}

export default FacultyTable