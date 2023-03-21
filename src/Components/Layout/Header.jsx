import "../../Styles/Layout/Header.css"
import { useState, useEffect } from "react"
import NavLinks from "../ReUsed/NavLinks"
import { motion } from 'framer-motion';
import Logo from "../../Assets/Logo/Logo.png"
import Toggler from "../../Assets/Icons/Toggler.png"
import { useRef } from "react";

const Header =( props )=> {

    const [scrolled, setScrolled] = useState(false);
    const [togglerExpand, setTogglerExpand] = useState(false)

    const [tab, setTab] = useState('_DEFAULT')
    const ref = useRef(null);

    const handle_ClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setTogglerExpand(false);
      };
    };

    const scroll_Wanted =async( selected )=> {
        if(tab != selected) {
          props.id_Selecter(selected)
          setTab(selected)
        }
        else {
            try{
              await props.id_Selecter('_DEFAULT')
              props.id_Selecter(selected)
              setTab(selected)
            }
            catch(err) {
              console.log(err)
            }
        }
        setTogglerExpand(false)
    }

    useEffect(() => {
      document.addEventListener("mousedown", handle_ClickOutside);

      return () => {
        document.removeEventListener("mousedown", handle_ClickOutside);
      };
    });

    useEffect(() => {
      const handleScroll = () => {
        if (window.pageYOffset > 50) {
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

    return (
      <nav ref={ref} className="pt-md-0">
        <div className={scrolled? 'Scrolled': 'Header'}>
            <div className="col-11 col-md-11 col-lg-10 d-flex justify-content-between">
                <div className="Header-Brand">
                    <a className="Responsive-View" href="#/" onClick={()=> scroll_Wanted('home')}>
                      <img className={scrolled?"Brand":"Initial"} src={Logo} alt="Brand logo" />
                    </a>
                    
                </div>
    
                <div className="d-flex Header-Links">
                    <div className="d-none d-md-flex">
                        <NavLinks Scroll={scrolled} press_Action={(id)=> scroll_Wanted(id)}></NavLinks>
                    </div>

                    <div>
                      <div className={scrolled? "d-md-none me-1 Toggler-Button":"d-md-none me-1 Toggler-Button"}>
                        <img type='button' onClick={()=> setTogglerExpand(!togglerExpand)} className="Toggler" src={Toggler} alt="Toggler icon" />
                      </div>

                      <button onClick={()=> scroll_Wanted('contact')} className="ms-4 px-4 ScrolledButton d-none d-md-block">Contact Us</button>
                    </div>
                    
                </div>
            </div>
        </div>

        <div className="d-md-none">
          {togglerExpand && (
            <motion.div className={scrolled?"Expand-Scrolled":"Toggler-Expand"}
                  initial={{ height: 0 }}
                  animate={{ height: '235px' , transition: { duration: 0.3 }}}>

                  <div className="d-flex justify-content-center">
                    <motion.div className="col-11"
                    initial={{ x: -140 }}
                    animate={{ x: 0 , transition: { duration: 0.4 }}}>
                      <NavLinks Scroll={scrolled} press_Action={(id)=> scroll_Wanted(id)}/>
                    </motion.div>
                  </div>
            </motion.div>
          )}
        </div>
      </nav>
    )
}

export default Header