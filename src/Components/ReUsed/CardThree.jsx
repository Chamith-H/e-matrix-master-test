import "../../Styles/ReUsed/CardThree.css"


const CardThree =( props )=> {
    return (
        <div className="CardThree px-2 pt-5 pb-1">
            <h3 className="text-center"><strong>OUR <span>{props.Title}</span></strong></h3>

            <div className="CardThree-Image my-3">
                <img src={props.Image} alt="card image" />
            </div>

            <div className="Role-Text px-4 px-md-5">
                <p className="text-center">{props.Description}</p>
            </div>
        </div>
    )
}

export default CardThree