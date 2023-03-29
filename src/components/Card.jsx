import Button from "react-bootstrap/Button"

const Card = (props) => {

    return (
        <div className="cardpizza" style={{ display: 'flex', flexDirection: 'row', margin: '20px' }}>
            <img src={props.img} alt={props.name} style={{ width: "200px" }} />
            <h2> {props.name} </h2>
            <h4>Ingredientes:</h4>
            <ul>
                <li>🍕 {props.ingredients[0]}</li>
                <li>🍕 {props.ingredients[1]}</li>
                <li>🍕 {props.ingredients[2]}</li>
                <li>🍕 {props.ingredients[3]}</li>
            </ul>
            <h3> $ {props.price}</h3>
            <div>
                <Button variant="success" onClick={props.onClickb1}>Ver más 👀</Button>
            </div>
            
            <div> <Button variant="danger" onClick={props.onClickb2}>Agregar 🛒</Button>
            </div>
        </div>
    )
}

export default Card