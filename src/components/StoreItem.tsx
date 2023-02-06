import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { formatCurrency } from '../utilities/formatCurrency';
type StoreItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
    const quantity = 0;
    return (
        <div>
            <Card>
                <Card.Img src={imgUrl} height="200px" style={{ objectFit: 'cover' }}>

                </Card.Img>
                <Card.Body className='flex flex-column'>
                    <Card.Title>
                        <span>{name}</span>
                        <span> {formatCurrency(price)}</span>
                    </Card.Title>
                    <div className='mt-auto'>
                        {quantity === 0 ? (
                            <Button>Add To Cart</Button>
                        ) : <div>
                            <div>
                                <Button>-</Button>
                                <h1>{quantity}</h1>
                                <Button>+</Button>
                            </div>
                            buy
                        </div>}
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default StoreItem;