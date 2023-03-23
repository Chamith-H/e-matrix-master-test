import "../../Styles/Pages/Offerings.css"

import Artificial from "../../Assets/Offerings/ArtificiaI.png"
import Cloud from "../../Assets/Offerings/Cloud.png"
import DataReporting from "../../Assets/Offerings/DataReporting.png"
import DevCloud from "../../Assets/Offerings/DevCloud.png"
import Digital from "../../Assets/Offerings/Digital.png"
import LowCode from "../../Assets/Offerings/LowCode.png"
import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const Offerings =()=> {

    const location = useLocation();
    const scroll = useRef(null)
    const top = useRef(null)
    const [selection, setSelection] = useState(null)

    useEffect(() => {
        top.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        const queryParams = new URLSearchParams(location.search);
        const myParam = queryParams.get('choose');
        setSelection(myParam)
    }, []);

    useEffect(() => {
        if(selection != null && selection >= 0) {
            scroll.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        
    }, [selection]);

    const offerings = [
        {
            title:'DATA & REPORTING',
            image:DataReporting,
            description:'Expert resource support for data and reporting capabilities for data-driven growth',
            expertise: ['Power BI Developments', 'Cloud Data Extractions to Data lake', 'Data Warehouse Development'],
            technologies:['Power BI', 'Azure Databricks (ADB)', 'Azure Data Factory (ADF)', 'Synapse', 'Python', 'Pyspark']
        },

        {
            title:'ARTIFICIAL INTELLIGENCE',
            image:Artificial,
            description:'AI experts provide full solution calibration from ML to AI applications',
            expertise: ['Building and training machine learning models', 'Integrating appropriate libraries and frameworks such as TensorFlow, PyTorch,Scikit-learn, etc', 'ML Operations', 'Integrate AI services to applications'],
            technologies:['Azure ML service', 'Phyton', 'R Programing', 'Flask', 'ASK', 'Open AI']
        },

        {
            title:'DIGITAL ASSURANCE',
            image:Digital,
            description:'Test Automation services for Artificial Intelligence, Cloud applications, and APIs',
            expertise: ['UI test automation', 'API and Web service test automation', 'Database testing automation', 'Cloud testing automation', 'Artificial intelligence (AI) testing'],
            technologies:['Selenium', 'Cypress', 'Postman', 'Soap UI']
        },

        {
            title:'LOW CODE & RPA',
            image:LowCode,
            description:'Expert resource support for low code and RPA automation to enhance efficiency and drive digital transformation',
            expertise: ['Robotic Process Automation development', 'Process Mining', 'Low code application development'],
            technologies:['MS Power Automate Flow', 'MS Power Apps', 'Azure Logic App', 'Azure Function', 'Dataverse', 'Azure Cognitive Services', 'MS Process Advisor']
        },

        {
            title:'DEV SEC CLOUD OPS',
            image:DevCloud,
            description:'Expert resource support for Dev-Sec Ops and cloud optimization to enhance security and performance',
            expertise: ['Cloud Migration', 'Cloud Database/Networking', 'Cloud Availability/Security', 'Backups & Recovery', 'Cloud Cost management and Budgeting'],
            technologies:['Azure/Oracle OCI Compute-VM,AKS,OKE', 'Azure/ Oracle OCI Networking', 'Data Base-Oracle, SQL', 'Applications-Oracle Fusion, Weblogic, EBS', 'Azure Active Directory', 'Azure Backups/DR/Security', 'Cost Management']
        },

        {
            title:'CLOUD INTEGRATION',
            image:Cloud,
            description:'Expert multi-cloud integration platform experts enable end-to-end business solutions',
            expertise: ['Developing / Securely Exposing APIs', 'Developing system integrations using AzureEnterprise Service Bus', 'Realtime/ Near-Realtime integration'],
            technologies:['Azure Logic App', 'Azure Function', 'Azure API Manager', 'Azure ESB', 'Azure Data Factory', 'Azure SQL Server', 'Azure BLOB Storage']
        },
      ]


    return (
        <div className="Offerings">
            <div ref={top} className="Top-Offering-Border mt-4"></div>

            <div className="col-11 col-lg-10 pt-4 pt-md-5">
                {offerings.map((offer, index) => (
                    <div ref={scroll} key={index} className="Single-Offering mb-3 pt-4 pt-sm-5 pb-3 pb-md-4">
                        {index == selection && (
                            <div ref={scroll}></div>
                        )}

                        <div className="Offring-Intro pb-3">
                            <h3 className="text-center mx-4">{offer.title}</h3>
                            <h6 className="mx-4 mx-sm-5 text-center">{offer.description}</h6>
                        </div>

                        <div className="List-Things">
                            <div className="row g-0">
                                <div className="col-12 col-md-6 d-flex align-items-center">
                                    <div className="Experty-List ps-4 ps-sm-5">
                                        <h5><strong>Expertise</strong></h5>

                                        <ul className="me-4">
                                            {offer.expertise.map((experty) => (
                                                <li>{experty}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-12 col-md-6 d-flex align-items-center">
                                    <div className="Technology-List ps-4 ps-sm-5 ms-md-5 mt-3 mt-md-0">
                                        <h5><strong>Technologies</strong></h5>

                                        <ul className="me-4">
                                            {offer.technologies.map((technology) => (
                                                <li>{technology}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="Backgrund-Offring">
                            <img src={offer.image} alt="offring" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Offerings