import React from 'react';
import { Card } from 'react-bootstrap';
type StoreItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
    return (
        <div>
            <Card>
                <Card.Img src={imgUrl} height="200px" style={{ objectFit: 'cover' }}>

                </Card.Img>
            </Card>
        </div>
    );
};

export default StoreItem;