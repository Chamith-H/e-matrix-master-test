import "../../Styles/ReUsed/CardFive.css"

const CardFive =( props )=> {
    return (
        <div className="Card-Five">
            <img src={props.Image} alt="" />

            <div className="Card-Five-Status">
                <div className="Card-Five-Description py-2 px-3">
                    <p className="text-center mb-0">{props.Description}</p>
                </div>
            </div>
        </div>
    )
}

export default CardFive