import REACT from 'react'
import Image from 'next/image'
import slider1 from '../../public/images/slider/2.png'

function Curriculum() {
    return(
    <section className={"bg-02"}>
        <div className={"container"}>
           <div className={"row"}> 
                <div className={"heading"}>
                    <h2>Sailent Features of Our School</h2>
                    <span></span>
                </div>            
                <ol className={"cal-box"}>
                    <li>Provide ample scope for physical, intellectual and social development of students.</li>
                    <li>Enlist general and specific teaching and assessment objectives.</li>
                    <li>Uphold Constitutional values such as socialism, secularism, democracy, republican character, justice, liberty, equality, fraternity, human dignity and the unity and integrity of the Nation by encouraging values-based learning activities.</li>
                    <li> Nurture Life-Skills by prescribing curricular and co-curricular activities to help improve self-esteem, empathy towards others and different cultures etc.</li>
                    <li>Integrate innovations in pedagogy, knowledge and application, such as human sciences with technological innovations to keep pace with the global trends in various discipline.</li>  
                    <li>Promote inclusive education by providing equal opportunities to all students.</li>
                    <li>Equally emphasize Co-scholastic areas of Art Education and Health and Physical Education.</li>
                </ol>                
                <div className={"heading"}>
                    <h2>Secondary Classes (VI - X) Subjects</h2>
                    <span></span>
                </div>                
                <div className={"cal-box"}>
                    <h4>English</h4>
                    <h4>Mathematics</h4>
                    <h4>Science</h4>
                    <h4>Social</h4>
                    <h4>Hindi</h4>
                    <h4>Telugu</h4>
                    <h4>Computer Applications</h4>
                    <h4>Physical Education</h4>
                </div>
                <div className={"heading"}>
                    <h2>Primary Classes (I - V) Subjects</h2>
                </div>
                <div className={"cal-box"}>
                <h4>English</h4>
                    <h4>Mathematics</h4>
                    <h4>Science</h4>
                    <h4>Social</h4>
                    <h4>Hindi</h4>
                    <h4>Telugu</h4>
                    <h4>Computer Applications</h4>
                    <h4>Physical Education</h4>
                </div>  
                <div className={"heading"}>
                    <h2>Subject Wise Learnings</h2>
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
           </div> 
      </div>
  </section>
    )
}

export default Curriculum