import "../../Styles/Pages/Home.css"
import { useState, useEffect } from "react"

import CardOne from "../ReUsed/CardOne"

import WhyOne from "../../Assets/Icons/WhyOne.png"
import WhyTwo from "../../Assets/Icons/WhyTwo.png"
import WhyThree from "../../Assets/Icons/WhyThree.png"
import WhyFour from "../../Assets/Icons/WhyFour.png"
import WhyFive from "../../Assets/Icons/WhyFive.png"

import Artificial from "../../Assets/Offerings/ArtificiaI.png"
import Cloud from "../../Assets/Offerings/Cloud.png"
import DataReporting from "../../Assets/Offerings/DataReporting.png"
import DevCloud from "../../Assets/Offerings/DevCloud.png"
import Digital from "../../Assets/Offerings/Digital.png"
import LowCode from "../../Assets/Offerings/LowCode.png"
import CardTwo from "../ReUsed/CardTwo"

import Facebook from "../../Assets/Icons/Facebook.png"
import LinkedIn from "../../Assets/Icons/Linkedin.png"
import Twitter from "../../Assets/Icons/Twitter.png"

import Research from "../../Assets/Home/ResearchInovation.jpg"
import Skill from "../../Assets/Home/SkillUpdate.jpg"
import Staff from "../../Assets/Home/StaffLoyality.jpeg"
import TrainEngineers from "../../Assets/Home/TrainEngineers.jpg"
import TrainGraduates from "../../Assets/Home/TrainGraduates.jpg"

import { useRef } from "react"
import { useNavigate } from "react-router-dom"

import { animate, motion } from "framer-motion"
import CardFive from "../ReUsed/CardFive"

const Home =( props )=> {

    const navigate = useNavigate()
    const [scrolled, setScrolled] = useState(false);

    const scroll_Why = useRef(null)
    const scroll_Offerings = useRef(null)
    const scroll_Skillup = useRef(null)
    const scroll_Home = useRef(null)
    const scroll_About = useRef(null)

    const sliderBox = useRef(null)
    const slide = useRef(null)

    const contacts = [
                        {
                            link:'',
                            image:Facebook
                        },

                        {
                            link:'',
                            image:LinkedIn
                        },

                        {
                            link:'',
                            image:Twitter
                        },
                     ]

    const benefits = [
                        {
                            image:WhyOne,
                            description:'Consult with globally experienced engineering experts regarding your needs, at no cost'
                        },

                        {
                            image:WhyTwo,
                            description:'Provide support to orchestrate and navigate your end-to-end technology requirements, with a focus on both solutions and people'
                        },

                        {
                            image:WhyThree,
                            description:'Ensure that talent gets funneled through correct measures of engendering before comes to you'
                        },

                        {
                            image:WhyFour,
                            description:'Leverage our engineering leadership for all resources to guarantee that the associates you receive have access to technical leadership 24/7'
                        },

                        {
                            image:WhyFive,
                            description:'We are dedicated to innovating with our customers in order to achieve mutual success'
                        },

                     ]

    const offerings = [
                        {
                            title:'DATA & REPORTING',
                            image:DataReporting,
                            description:'Expert resource support for data and reporting capabilities for data-driven growth'
                        },

                        {
                            title:'ARTIFICIAL INTELLIGENCE',
                            image:Artificial,
                            description:'AI experts provide full solution calibration from ML to AI applications'
                        },

                        {
                            title:'DIGITAL ASSURANCE',
                            image:Digital,
                            description:'Test Automation services for Artificial Intelligence, Cloud applications, and APIs'
                        },

                        {
                            title:'LOW CODE & RPA',
                            image:LowCode,
                            description:'Expert resource support for low code and RPA automation to enhance efficiency and drive digital transformation'
                        },

                        {
                            title:'DEV SEC CLOUD OPS',
                            image:DevCloud,
                            description:'Expert resource support for Dev-Sec Ops and cloud optimization to enhance security and performance'
                        },

                        {
                            title:'CLOUD INTEGRATION',
                            image:Cloud,
                            description:'Expert multi-cloud integration platform experts enable end-to-end business solutions'
                        },
                      ]

        const slides = [
                            {
                                background:TrainEngineers,
                                description:'Train our engineers on customer-specific skill requirements to reduce the ramp-up burden on the customer',
                            },

                            {
                                background:Staff,
                                description:'Increased staff loyalty through investment in their professional development',
                            },

                            {
                                background:Skill,
                                description:'Provide skill upgrades based on current industry trends to ensure our resource pool stays equipped with up-to-date knowledge',
                            },

                            {
                                background:TrainGraduates,
                                description:'Offer training to bridge the gap for fresh graduates entering the industry, resulting in productive entry-level engineers with efficient performance',
                            },

                            {
                                background:Research,
                                description:'Establish a consistent research environment to empower our engineers to drive innovation for the benefit of our customers',
                            },
                       ]

    const set_Slider_PREVIOUS =()=> {
        if(sliderBox.current !=null) {
            const box = sliderBox.current.offsetWidth;
            slide.current.scrollLeft -= box
        }
    }

    const set_Slider_NEXT =()=> {
        if(sliderBox.current !=null) {
            const box = sliderBox.current.offsetWidth;
            slide.current.scrollLeft += box
        }
    }


    useEffect(() => {
        if(props.Scroll == 'offerings') {
            scroll_Offerings.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        
        if(props.Scroll == 'campus') {
            scroll_Skillup.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        if(props.Scroll == 'home') {
            scroll_Home.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        if(props.Scroll == 'about') {
            scroll_About.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [props.Scroll]);

    useEffect(() => {
        const handleScroll = () => {
          if (window.pageYOffset > 100) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
 
      useEffect(() => {
        const handleScroll = () => {
          const myDiv = scroll_Why.current;
          if (myDiv) {
            const windowHeight = window.innerHeight;

            const images = myDiv.querySelectorAll('img');

            images.forEach((p) => {
                if (p.getBoundingClientRect().top < windowHeight - 100) {
                  p.classList.add('animate');
                }
              });
            }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <div ref={scroll_Home} className="Home">
            <div className={scrolled?"Hero-Back sticky-top Hero-Back-Scrolled":"Hero-Back sticky-top Hero-Back-Default"}>
                <div className={scrolled?"Hero-Section-Full":"Hero-Section"}>
                    <div className={scrolled?"Align-Hero-Full":"Align-Hero"}>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center">
                <div className="col-12 col-md-11 col-lg-10">
                    <div className="Company-Status">
                        <div className="col-12">
                            <div className="row g-0 Style-Shadow">
                                <div className="col-1 col-md-2"/>
                                <div className="col-2 Border1"/>
                                <div className="col-9 col-md-8"/>

                                <div className="col-1 col-md-2"/>

                                <div className="col-11 col-md-10 pe-4 pe-md-0 Border2">
                                    <div className="Company-Introduction ms-5">
                                        <h1 className="text-start"><span>e-</span>Matrix</h1>
                                        <h2 className="text-start"><strong>ENGINEERING THE DIGITAL FUTURE</strong></h2>
                                    </div>
                                </div>


                                <div className="col-1 col-md-2"/>
                                <div className="col-3 Border3"/>

                                <div className="col-7 ps-3">
                                    <h5 className="text-start Hero-Explain"><strong>Transforming the digital world with trusted partnership and expert knowledge - where your success is our top priority.</strong></h5>

                                    <div className="d-flex justify-content-start Learn-More">
                                        <button onClick={()=>navigate("about-us")} className="ps-4 mt-1">Learn More &nbsp; <i class="bi bi-arrow-right-circle-fill"></i></button>
                                    </div>
                                </div>
                            </div>

                            <div className="Comany-Contacts d-flex justify-content-center justify-content-md-start">
                                {contacts.map((contact) => (
                                    <div className="Single-Contact">
                                        <a href="">
                                            <img src={contact.image} alt="Contact-Icon" />
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div ref={scroll_Offerings} className="Our-Offerings py-5">
                    <h2 className="text-center pt-3"><strong>OUR <span>OFFERINGS</span></strong></h2>

                    <div className="d-flex justify-content-center mt-4 pt-3">
                        <div className="col-11 col-sm-10">
                            <div className="row gx-0 gy-3">
                                {offerings.map((offer) => (
                                    <div className="col-md-6 col-lg-4 px-2">
                                        <CardTwo Title={offer.title} Image={offer.image} Description={offer.description}/>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            <div className="Why-Choose py-5">
                <h2 className="text-center"><strong>WHY <span>E-MATRIX</span> ?</strong></h2>

                <div className="d-flex justify-content-center">
                    <div className="col-12 col-md-11 col-lg-9 col-xl-12 px-2 px-sm-3 px-md-0">
                        <div ref={scroll_Why} className="row gx-0 gy-4 d-flex justify-content-center mt-2 Info-Why-Cards">
                            {benefits.map((benefit) => (
                                <div ref={scroll_Why} className="col-6 col-sm-4 col-xl-2  px-1">
                                    <CardOne Title={benefit.title} Image={benefit.image} Description={benefit.description}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

                <div ref={scroll_Skillup} className="E-Matrix-Campus pt-5">
                    <h2 className="text-center mt-3"><strong>E-MATRIX <span>CAMPUS</span></strong></h2>
                    <h6 className="text-center mx-4">The e-Matrix campus is an organized and equipped environment that fosters productivity <br></br> among our specialized technology resources :</h6>

                    <div className="d-flex justify-content-center pt-3 pb-5">
                        <div className="col-9 col-sm-10 position-relative">
                            <div ref={slide} className="slide-container Slide-View">
                                {slides.map((slide, index) => (
                                    <div ref={sliderBox} key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
                                        <CardFive Image={slide.background} Description={slide.description}/>
                                    </div>
                                ))}
                            </div>

                            <div className="Slider-Buttons">
                                <button onClick={set_Slider_PREVIOUS}><i class="bi bi-arrow-left-circle-fill"></i></button>
                                <button onClick={set_Slider_NEXT}><i class="bi bi-arrow-right-circle-fill"></i></button>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Home