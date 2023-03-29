import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { useContext } from 'react'
import { PizzasContext } from '../pizzaContext'
import { Button } from 'react-bootstrap';

const Navbar = () => {
    const { carro } = useContext(PizzasContext)

    return (
        <div className="Navbar">
            <div className="container1">
                <img className='imgicons' src="icons8-pizza-65.png" alt="Plato de pizza" />
                <h1 className="pnavbar">Pizzería Mamma Mía!</h1>
            </div>
            <div className='container2'>
                <p className="pnavbar"> Total: $ {carro
                    .map((pizza) => pizza.price * pizza.selected)
                    .reduce((previousValue, currentValue) => previousValue + currentValue, 0)} </p>
                <NavLink to="/carrito">
                    <Button variant="primary">Ir al <img className='imgicons' src="carrito-de-compras.png" alt="Carro de compras" /></Button>
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar