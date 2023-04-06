import "../../Styles/Layout/Footer.css"
import Phone from "../../Assets/Icons/Phone.png"
import Skype from "../../Assets/Icons/Skype.png"
import Brand from "../../Assets/Logo/Brand.png"

import Facebook from "../../Assets/Icons/Facebook.png"
import Twitter from "../../Assets/Icons/Twitter.png"
import Gmail from "../../Assets/Icons/Gmail.png"
import Linkedin from "../../Assets/Icons/Linkedin.png"

import { useEffect, useRef } from "react"

const socials = [
                    {
                        name:'facebook',
                        icon:Facebook,
                        url:''
                    },

                    {
                        name:'twitter',
                        icon:Twitter,
                        url:''
                    },

                    {
                        name:'gmail',
                        icon:Gmail,
                        url:''
                    },

                    {
                        name:'linkedin',
                        icon:Linkedin,
                        url:''
                    },
                ]

const Footer =( props )=> {

    const scroll_Contact = useRef(null)

    useEffect(() => {
        if(props.Catch === 'contact') {
            scroll_Contact.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
    }, [props.Catch]);
    
    return (
        <div ref={scroll_Contact} className="Footer pt-4">
            <div className="col-9 col-sm-8 col-md-11 col-lg-11 col-xl-10">
                <div className="row g-0">
                    <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-start pt-4 pb-5 py-md-0">
                        <div className="Brandings d-flex flex-column align-items-center">
                            <img className="Footer-Logo" src={Brand} alt="e-matrix" />

                            <div className="Contact-Buttons mt-3 d-none d-md-block">
                                {socials.map((social, index) => (
                                    <a href='#/' key={index}>
                                        <img className="Contact-Image mx-2" src={social.icon} alt="Social" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-md-2 d-flex justify-content-start justify-content-md-start">
                        <div className="Links">
                            <h6><strong>Links</strong></h6>

                            <div className="d-flex flex-column">
                                <a href="#/">Terms of Use</a>
                                <a href="#/">Privacy</a>
                                <a href="#/">Anti Spam</a>
                            </div>
                                
                        </div>
                    </div>

                    <div className="col-6 col-md-2 d-flex justify-content-end justify-content-md-start">
                        <div className="Links">
                            <h6><strong>About Us</strong></h6>

                            <div className="d-flex flex-column">
                                <a href="#/">About</a>
                                <a href="#/">Careers</a>
                                <a href="#/">Contact Us</a>
                                <a href="#/">Blog</a>
                            </div>
                        </div>
                      
                    </div>

                    <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-end py-5 py-md-0">
                        <div className="Links">
                            <h6 className="text-center text-md-start"><strong>Contact Us</strong></h6>
                            <p className="text-center text-md-start">Get in touch for an hour of free service with in 24 hours. No obligation</p>

                            <div className="Contact-With">
                                <div className="Contacting d-flex justify-content-center justify-content-md-start">
                                    <img src={Phone} alt="phone" />
                                    <a href="tel:+94707382838"><p>(+94) 070 738 2838</p></a>
                                </div>

                                <div className="Contacting d-flex justify-content-center justify-content-md-start">
                                    <img src={Skype} alt="skype" />
                                    <p>info@ematrixit.com</p>
                                </div>
                            </div>

                            <div className="Contact-Buttons mt-3 d-block d-md-none d-flex justify-content-center">
                                {socials.map((social, index) => (
                                    <a href="#/" key={index}>
                                        <img className="Contact-Image mx-2" src={social.icon} alt="Social" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Footer-Copyright mt-3 py-2 py-sm-1">
                <div className="col-sm-11 col-md-10">
                    <div className="row g-0">
                        <div className="col-12 col-sm-6 d-flex justify-content-center justify-content-sm-start">
                            <p>Copyright &copy; e-Matrix (PVT) Ltd.</p>
                        </div>

                        <div className="col-12 col-sm-6 d-flex justify-content-center justify-content-sm-end">
                            <p>Web Design by <span><a href="https://hellodynamicbiz.com/" target="_blank" rel="noreferrer">Dynamic Biz.</a></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer