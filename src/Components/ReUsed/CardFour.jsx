import "../../Styles/ReUsed/CardFour.css"

const CardFour =( props )=> {
    return (
        <div className={props.End?"CardFour-End my-2":"CardFour my-2"}>
            <div className="CardFour-Image pt-1">
                <img src={props.Image} alt="card image" />
            </div>

            <div className={"CardFour-Details"}>
                <h6 className={props.End? "text-end me-2":"text-start ms-2"}><strong>{props.Title}</strong></h6>
                <p className={props.End? "text-end me-2":"text-start ms-2"}>{props.Description}</p>
            </div>
        </div>
    )
}

export default CardFour