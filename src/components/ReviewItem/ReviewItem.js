import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({ product, handleRemove }) => {
    const { id, name, img, price, } = product;
    return (
        <div className='review'>
            <div className='items'>
                <img src={img} alt="" />
                <div className='item-des'>
                    <div>
                        <h5>{name}</h5>
                        <p>price: <b>{price}$</b></p>
                    </div>
                    <div>
                        <button onClick={() => handleRemove(id)} className='delete'><FontAwesomeIcon icon={faTrashCan} /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;