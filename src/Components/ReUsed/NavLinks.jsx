import "../../Styles/ReUsed/NavLinks.css"

const NavLinks =( props )=> {
    return (
        <div className={props.Scroll?"ScrolledLinks d-flex flex-column flex-md-row":"NavLinks d-flex flex-column flex-md-row"}>
            <a className="ms-md-4 mt-4 mt-md-0" href="#/" onClick={()=> props.press_Action('home')}><strong>Home</strong></a>
            <a className="ms-md-4 mt-3 mt-md-0" href="#/about-us" onClick={()=> props.press_Action('')}><strong>About</strong></a>
            <a className="ms-md-4 mt-3 mt-md-0" href="#/" onClick={()=> props.press_Action('offerings')}><strong>Offerings</strong></a>
            <a className="ms-md-4 mt-3 mt-md-0" href="#/" onClick={()=> props.press_Action('campus')}><strong>Skill Upliftment</strong></a>
            <a className="ms-md-4 mt-3 mt-md-0 d-md-none" href="#/" onClick={()=> props.press_Action('contact')}><strong>Contact Us</strong></a>
        </div>
    )
}

export default NavLinks