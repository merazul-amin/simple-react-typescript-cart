import React from 'react';
import { Col, Row } from 'react-bootstrap';
import StoreItem from '../components/StoreItem';
import storeItmes from '../data/items.json'
const Store = () => {
    return (
        <div>
            <Row md={2} xs={1} lg={3} className='g-3'>
                {storeItmes.map(item =>
                    <Col><StoreItem {...item} /></Col>)}

            </Row>
        </div>
    );
};

export default Store;