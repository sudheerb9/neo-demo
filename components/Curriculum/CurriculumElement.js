import REACT from 'react'
import Image from 'next/image'
import slider1 from '../../public/images/slider/2.png'
import {Row,Col,Container} from 'reactstrap'

function Curriculum() {
    return(
    <section className={"bg-02"}>
        <Container>
           <Row className={'justify-content-center'} style={{marginTop: '20px'}}> 
             <Col sm={12} md={12} lg={12} xs={12}>
                <div className={"heading"}>
                    <h2>Sailent Features</h2>
                    <span></span>
                </div>            
                <ul className={"cal-box ull"} style={{marginLeft: '30px', 'list-style-type': 'circle'}}>
                    <li>Provide ample scope for physical, intellectual and social development of students.</li>
                    <li>Enlist general and specific teaching and assessment objectives.</li>
                    <li>Uphold Constitutional values such as socialism, secularism, democracy, republican character, justice, liberty, equality, fraternity, human dignity and the unity and integrity of the Nation by encouraging values-based learning activities.</li>
                    <li> Nurture Life-Skills by prescribing curricular and co-curricular activities to help improve self-esteem, empathy towards others and different cultures etc.</li>
                    <li>Integrate innovations in pedagogy, knowledge and application, such as human sciences with technological innovations to keep pace with the global trends in various discipline.</li>  
                    <li>Promote inclusive education by providing equal opportunities to all students.</li>
                    <li>Equally emphasize Co-scholastic areas of Art Education and Health and Physical Education.</li>
                </ul>     
                </Col>
            </Row>

            <Row className={'justify-content-center'} >
                <Col sm={12} md={6} lg={6} xs={12} style={{marginTop: '30px'}}>
                    <h4>Secondary Classes (VI - X) Subjects</h4>
                    <ol className={"cal-box"} style={{listStyle: 'none'}}>
                        <li>English</li>
                        <li>Mathematics</li>
                        <li>Science</li>
                        <li>Social</li>
                        <li>Hindi</li>
                        <li>Telugu</li>
                        <li>Computer Applications</li>
                        <li>Physical Education</li>
                    </ol>
                </Col>
                <Col sm={12} md={6} lg={6} xs={12} style={{marginTop: '30px'}}>
                    <h4>Primary Classes (I - V) Subjects</h4>
                    <ol className={"cal-box"} style={{listStyle: 'none'}}>
                        <li>English</li>
                        <li>Mathematics</li>
                        <li>Science</li>
                        <li>Social</li>
                        <li>Hindi</li>
                        <li>Telugu</li>
                        <li>Computer Applications</li>
                        <li>Physical Education</li>
                    </ol>  
                </Col>
            </Row>
                
            <div className={"heading"} style={{marginTop: '30px'}}>
                <h2>Subject Learnings</h2>
                <span></span>
            </div>
            <div>
                <h3>Languages:-</h3>
                <p> Languages include Hindi, Telugu and English .The curricula in languages focus on listening, speaking, reading and writing skills and, hence, develop effective 
                    communicative proficiencies. Learners use language to comprehend, acquire and communicate ideas in an effective manner.
                </p>
                <h3>Social:-</h3>
                <p> 
                    It intends students to make learners understand their cultural, geographical and historical milieus and gain in-depth knowledge, attitude, skills and values necessary to bring 
                    about transformation for a better world. Social Science include the learning of history and culture, geographical environment, global institutions, constitutional values and 
                    norms, politics, economy, interpersonal and societal interactions, civic responsibilities and the incorporation of the above-mentioned learning. Learners appreciate and value 
                    everyone’s right to feel respected and safe, and, also understand their Fundamental Rights and Duties and behave responsibly in the society
                </p>
                <h3>Science:-</h3>
                <p> 
                    It includes gaining knowledge about Food, Materials, The World of The Living, How Things Work, Moving Things, People and Ideas, Natural Phenomenon and Natural Resources. 
                    The focus ison knowledge and skills to develop a scientific attitude and to use and apply such knowledge for improvingthe quality of life. This learning can be used to analyze, evaluate, synthesize and create. 
                    Learners understand and appreciate the physical, biological and technological world and acquire the knowledge and develop attitude, skills and values to make rational decisions in relation to it.
                </p>
                <h3>Mathamatics:-</h3>
                <p> 
                    It includes acquiring the concepts related to number sense, operation sense, computation, measurement, geometry, probability and statistics, the skill to calculate and organize
                    and the ability to apply this knowledge and acquired skills in their daily life. It also includes understanding of the principles of reasoning and problem solving. Learners identify, 
                    integrate and apply numerical and spatial concepts and techniques. They have clarity of concepts and are able to connect them to the real world. Learners rationalize and reason about 
                    pre-defined arrangements, norms and relationships in order to comprehend, decode, validate and develop relevant patterns.
                </p>
            </div>    
      </Container>
    </section>
    )
}

export default Curriculum