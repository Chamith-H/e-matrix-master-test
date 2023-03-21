import "../../Styles/Pages/Offerings.css"

import Artificial from "../../Assets/Offerings/ArtificiaI.png"
import Cloud from "../../Assets/Offerings/Cloud.png"
import DataReporting from "../../Assets/Offerings/DataReporting.png"
import DevCloud from "../../Assets/Offerings/DevCloud.png"
import Digital from "../../Assets/Offerings/Digital.png"
import LowCode from "../../Assets/Offerings/LowCode.png"
import CardFour from "../ReUsed/CardFour"

const Offerings =()=> {

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


    return (
        <div className="Offerings">
            <div className="Hero-Offerings">
                <div className="Align-Hero-Offerings">
                    
                </div>
            </div>

            <div className="Offerings-Points">
                <div className="col-10 row g-0 Offering-Contents">
                    <div className="col-6 pe-5 Handle-View">
                        <CardFour Image={offerings[0].image} Title={offerings[0].title} Description={offerings[0].description} End={true}/>
                        <CardFour Image={offerings[3].image} Title={offerings[3].title} Description={offerings[3].description} End={true}/>
                        <CardFour Image={offerings[2].image} Title={offerings[2].title} Description={offerings[2].description} End={true}/>
                    </div>

                    <div className="col-6 Align-Points Handle-View ps-5">
                        <CardFour Image={offerings[1].image} Title={offerings[1].title} Description={offerings[1].description}/>
                        <CardFour Image={offerings[5].image} Title={offerings[5].title} Description={offerings[5].description}/>
                        <CardFour Image={offerings[4].image} Title={offerings[4].title} Description={offerings[4].description}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offerings