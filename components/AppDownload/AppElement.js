import React from 'react'
import Image from 'next/image'
import slider1 from '../../public/images/slider/2.png'
import logo from '../../public/images/background/log.png'

function AppElement() {
    return(
        <section className={"bg-02"}>
        <div className={"container"}>
          <div className={"row"}>
                <div className={"heading"}>
                    <h2>App</h2>
                    <span></span>
                </div>
                <div className={"col-lg-6 col-md-6 col-12"}>
                  <div className={"cal-box"}>
                        <p>Apart from the Classes we have an Application in which we share recorded lectures in case if the students
                            are having any dout in the Lectures. These applications also contains topic specific videos for the better understanding
                            of the topics. 
                        </p>
                        <p>
                            The assignments in the topics will also be given through the App. The marks for all the exams will also be provided in the app
                            so that the parents can directly download their progresscard. Parents can directly talk to the students through video confirence 
                            throught he app.
                        </p>
                        <Image src={logo} width={210} height={80}  />
                  </div>
              </div>

              <div className={"col-lg-6 col-md-6 col-12"}>
                <div className={"cal-box"}>
                    <Image src={slider1} layout="fill"/>
                </div>
              </div>
          </div>
      </div>
  </section>
    )
}

export default AppElement