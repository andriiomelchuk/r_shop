import {BasketItem} from '../components/BasketItem';

function BasketList(props){
    const {order = [], handleBasketShow = Function.prototype, removeFromBasket = Function.prototype, incrementItem = Function.prototype, decrementItem = Function.prototype} = props;
    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    }, 0);

    return (
        <ul className="collection basket-list">
            <li className="collection-item active" >Basket</li>
            {
                order.length ? order.map(item => (
                    <BasketItem key={item.id} {...item} removeFromBasket={removeFromBasket} incrementItem={incrementItem} decrementItem={decrementItem} />
                )) :
                    <li  className="collection-item ">Epson</li>

            }
            <li className="collection-item active" >Total price: {totalPrice}
                <button  className="secondary-content btn-buy">Оформить</button>
            </li>
            <i className='material-icons basket-close' onClick={() => handleBasketShow()}>close</i>

        </ul>
    );
}

export {BasketList};