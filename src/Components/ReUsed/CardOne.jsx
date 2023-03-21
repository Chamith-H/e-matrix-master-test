import "../../Styles/ReUsed/CardOne.css"


const CardOne =( props )=> {
    return (
        <div className="CardOne px-2 pt-3 pb-1">
            <h6 className="text-center">{props.Title}</h6>

            <div className="CardOne-Image my-3">
                <div className="Card-One-Back p-3">
                    <img src={props.Image} alt="card image" />
                </div>
            </div>

            <p className="text-center">{props.Description}</p>
        </div>
    )
}

export default CardOne