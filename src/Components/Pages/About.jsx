import "../../Styles/Pages/About.css"
import CardThree from "../ReUsed/CardThree"

import Vision from "../../Assets/About/Vision.png"
import Mission from "../../Assets/About/Mission.png"
import Value from "../../Assets/About/Value.png"

import CEOpic from "../../Assets/About/Chrishan Fernando ematrix.png"

import { useEffect, useRef } from "react"

const About =()=> {

    const scroll_Top = useRef(null)

    const vision_mission = [
        {
            title:'VISION',
            image:Vision,
            description:'To be recognized Internationally and locally as the leading provider of specialized IT professional services and have become a trusted partner by helping organizations to achieve their business goals in the digital era.'
        },

        {
            title:'MISSION',
            image:Mission,
            description:'To use Sri Lankan IT experts in delivering specialized IT professional services in a friendly innovative manner leading to customer satisfaction.'
        },

        {
            title:'VALUES',
            image:Value,
            values:[
                        '100%  trustworthy',
                        'Customer-oriented ',
                        'Quality conscious',
                        'Positive, respectful, and friendly',
                        'Always learning',
                   ]
        }
    ]

    useEffect(() => {
        scroll_Top.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, []);

    return (
        <div ref={scroll_Top} className="About">
            <div className="About-Hero-Main">
                <div className="About-Hero">
                    <div className="Align-About-Hero">
                        <div className="col-11 col-lg-10 About-Paragraph pt-2">
                            <p>As the 4th industrial revolution continues, new tech trends such as Datafication, Artificial Intelligence, low code – no code and of course Cloud, is set to grow at unprecedented levels. The availability of cost of tech talent with required skills would make be a challenge to many organizations. We at ematrix’s believe that Sri Lanka as a country, has many talented persons that can help customers to be successful in the digital age. We are proud to be able to offer Sri Lankan resources that would focus areas on Data, AI, Cloud Integrations, Automated Testing, RPA, low code, and DevSecOps.</p>
                            <p>We believe that technology is a powerful tool that can transform the way businesses operate. That is why we work tirelessly to develop cutting-edge solutions that can help our clients achieve their goals.</p>
                            <p>What sets us apart from other suppliers is our highly specialized and experienced team of Principal Architects. Our architects have worked on world-wide developments and bring a wealth of experience and knowledge to each project. We take pride in our team's expertise and provide our clients with the highest level of services. </p>
                            <p>Whether you are looking to streamline your operations, improve your customer experience, or gain a competitive edge in your industry, we are here to help. Our team has the expertise and experience to tackle even the most complex technological challenges, and we are committed to delivering results that exceed your expectations.</p>
                            <p>Thank you for considering our company for your technological needs. We look forward to the opportunity to work with you and help you achieve your goals.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center About-Content">
                <div className="col-11 col-sm-10 pb-4">
                    <div className="Vision-Mission mb-5">
                        <div className="row g-2 d-flex justify-content-center">
                            {vision_mission.map((role, index) => (
                                <div className="col-12 col-sm-6" key={index}>
                                    <CardThree Title={role.title} Image={role.image} Description={role.description} List={role.values} key={index}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center CEO-Message pt-5 bg-white">
                <div className="col-11 col-md-10">
                    <h2 className="text-center"><strong>MESSAGE FROM OUR <span>CEO</span></strong></h2>

                    <div className="row g-0 CEO-Row mt-4 mb-5">
                        <div className="col-12 col-lg-5 col-xl-4 CEO-Column py-4 py-md-5 py-lg-0 mb-2 mb-lg-0">
                            <div className="CEO-Box">
                                <img src={CEOpic} alt="CEO Chrishan Fernando" />
                            </div>
                        </div>

                        <div className="col-12 col-lg-7 col-xl-8">
                            <div className="CEO-MEssage ps-3 ps-sm-4 ps-lg-0 pe-3 pe-sm-4 pt-3">
                                <p>" I am honored to welcome you to our Sri Lankan technology company. With over 25 years of experience as CEO/Country Manager of IBM, Dell, HP, and Director of Sales at Fiserv, I deeply understand the power of technology and its potential to transform how businesses operate.</p>
                                <p>At our company, we are dedicated to using our expertise to help our clients leverage the power of technology to drive innovation and growth. Our focus areas include Data, AI, Cloud Integrations, Automated Testing, RPA, low code, and DevSecOps.</p>
                                <p>I am proud to say that what sets us apart from other suppliers is our highly specialized and experienced team of Principal Architects. Our architects have worked on worldwide developments and bring a wealth of experience and knowledge to each project.</p>
                                <p>As someone who holds an MBA in Marketing, I understand the importance of understanding our client’s needs and developing solutions that exceed their expectations. Our team is made up of highly skilled engineers, developers, and consultants who are passionate about technology and dedicated to delivering results.</p>
                                <p>As the CEO of this company, I am committed to providing the highest level of service to our clients. We are always looking for ways to improve our services and exceed your expectations. We believe in taking a collaborative approach to every project, working closely with our clients to understand their needs and find the best possible solutions for them.</p>
                                <p>Thank you for considering our company for your technology needs. We look forward to the opportunity to work with you and help you achieve your goals. "</p>
                            </div>

                            <div className="CEO-References pt-3 pb-4 pe-0 pe-lg-4">
                                <h6 className="text-center text-lg-end"><strong>Sincerely</strong>,</h6>
                                <p className="text-center text-lg-end">Chrishan Fernando </p>
                                <p className="text-center text-lg-end">Director / CEO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About