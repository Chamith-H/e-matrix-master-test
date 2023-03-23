import "../../Styles/ReUsed/CardTwo.css"

const CardTwo =( props )=> {
    return (
        <div className="CardTwo px-4">
            <div className="Align-Card-Two pt-4">
                <h6 className="text-center"><strong>{props.Title}</strong></h6>

                <div className="CardTwo-Image d-flex justify-content-center py-2">
                    <img src={props.Image} alt="Card image" />
                </div>
            </div>

            <p className="text-center">{props.Description}</p>
        </div>
    )
}

export default CardTwo