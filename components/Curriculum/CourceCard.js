import REACT from 'react'
import Image from 'next/image'
import CourceCardElement from './CourceCardElement'
import Primary from '../../public/images/Cources/1.jpg'
import Middle from '../../public/images/Cources/3.jpg'
import Secondary from '../../public/images/Cources/2.jpg'

function CourceCard() {
    return(
        <div className={"cources container-fluid"}>
           <div className={"container"}>
               <div className={"cours-ro row"}>
                 <CourceCardElement image={Primary} name={'Primary Stage'} heading={'Classes I-V'} para={'Apart from the Curculum we also train the students with moral values and ethics. Provide an optional Subjects of their choce in various fields'} curculum={'/'}></CourceCardElement>
                 <CourceCardElement image={Middle} name={'Middle Stage'} heading={'Classes VI-VIII'} para={'Apart from the Curculum we also train the students with Coading and medical skills. Provide an optional Subjects so that they find their intrests'}></CourceCardElement>
                 <CourceCardElement image={Secondary} name={'Seconadry Stage'} heading={'Classes IX-X'} para={'Apart from the Curculum we also train the students to be ready for the Board exams . Also they will be part of many projects of the industries'}></CourceCardElement>
                </div>
            </div>
        </div>
    )
}

export default CourceCard