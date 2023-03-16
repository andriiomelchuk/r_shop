function BasketItem(props){
    const {id, name, price, quantity, removeFromBasket = Function.prototype, incrementItem = Function.prototype, decrementItem = Function.prototype} = props;
    return(
        <li  className="collection-item ">{name} <i className='material-icons basket-quantity' onClick={() => decrementItem(id)}>remove</i> x {quantity} {' '} <i className='material-icons basket-quantity' onClick={() => incrementItem(id)}>add</i>= {price * quantity}

            <span  className="secondary-content" onClick={() => removeFromBasket(id)}><i className="material-icons basket-delete">close</i></span>

        </li>
    )

}

export {BasketItem}