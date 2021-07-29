import React, {useEffect} from 'react'
import Image from 'next/image'
import slider1 from '../../public/images/slider/slid_1.jpg'
import slider2 from '../../public/images/slider/slid_2.jpg'

const useScript = url => {
    useEffect(() => {
      const script = document.createElement('script');
  
      script.src = url;
      script.async = true;
  
      document.body.appendChild(script); 
  
        return () => {
            var slideIndex = 1;
            showSlides(slideIndex);

            function plusSlides(n) {
            showSlides(slideIndex += n);
            }

            function currentSlide(n) {
            showSlides(slideIndex = n);
            }

            function showSlides(n) {
            var i;
            var slides = document.getElementsByClassName("carousel-item");
            var dots = document.getElementsByClassName("dot");
            if (n > slides.length) {slideIndex = 1}    
            if (n < 1) {slideIndex = slides.length}
            
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex-1].className += "active";  
            dots[slideIndex-1].className += " active";
            }
        }
    }, [url]);
};

function homepageslider(){
    return(
        <div className={'slider-detail'}>

            <div id={'carouselExampleIndicators'} className={'carousel slide'} data-ride={'carousel'}>
                <ol className={'carousel-indicators'}>
                    <li className={'dot active'} onClick="currentSlide(1)"></li>
                    <li className={'dot'} onClick="currentSlide(2)"></li>
                </ol>
                <div className={'carousel-inner'}>
                    <div className={'carousel-item '}>
                        <Image className={'d-block w-100'} src={slider1} alt="First slide"/>
                            <div className={'carousel-caption fvgb d-none d-md-block'}>
                                <h5 className={'animated bounceInDown'}>Create an Awesome Website Today </h5>
                                <p className={'animated bounceInLeft'}> Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Nullam justo neque, <br/>
                                        aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus,
                                        mattis <br/>
                                        sed sagittis at, sagittis quis neque. Praesent.
                                    </p>

                                <div className={'row vbh'}>
                                    <div className={'btn btn-success animated bounceInUp'}> Apply Online</div>
                                </div>
                            </div>
                    </div>

                    <div className={'carousel-item '}>
                        <Image className={'d-block w-100'} src={slider2} alt="Second slide"/>
                            <div className={'carousel-caption vdg-cur d-none d-md-block'}>
                                <h5 className={'animated bounceInDown'}>Best Free Educational Template</h5>
                                <p className={'animated bounceInLeft'}>Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Nullam justo neque, <br/>
                                        aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus,
                                        mattis <br/>
                                        sed sagittis at, sagittis quis neque. Praesent.</p>

                                <div className={'row vbh'}>

                                    <div className={'btn btn-success animated bounceInUp'}> Apply Online</div>
                                </div>
                            </div>
                    </div>

                </div>
                <a className={'carousel-control-prev'} onClick="plusSlides(-1)" role={'button'}>
                    <span className={'carousel-control-prev-icon'} ></span>
                    <span className={'sr-only'}>Previous</span>
                </a>
                <a className={'carousel-control-next'} onClick="plusSlides(1)" role={'button'}>
                    <span className={'carousel-control-next-icon'} ></span>
                    <span className={'sr-only'}>Next</span>
                </a>
            </div>


        </div>
    )
}

export default homepageslider