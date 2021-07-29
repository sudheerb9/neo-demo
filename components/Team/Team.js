import REACT from 'react'
import TeamElement from './TeamElement'
import Team1 from '../../public/images/team/2.jpg'
import Team2 from '../../public/images/team/4.jpg'
import Team3 from '../../public/images/team/3.jpg'
import Team4 from '../../public/images/team/1.jpg'

function Team(){
    return(
        <section className={"bg-03"}>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"heading"}>
                        <h2>Our Leaders</h2>
                        <span></span>
                    </div>
                    <TeamElement image={Team1} name={'James'} designation={'Vice-Principal'}></TeamElement>
                    <TeamElement image={Team2} name={'Smith'} designation={'Acadamic-Coordinator'}></TeamElement>
                    <TeamElement image={Team3} name={'Johnsy'} designation={'Head-Primary Classes'}></TeamElement>
                    <TeamElement image={Team4} name={'Albert'} designation={'Head-Secondary Classes'}></TeamElement>
                </div>
            </div>
        </section>
    )
}

export default Team