import React from 'react';
import Form from './SubComponents/Form';
import Item from './SubComponents/Item';

const AddProducts = () => {

    return(
        <div className="manageContainer">
            <Form />

            <div className="formOutput">
                <div className="products">
                    <div className="item">
                        <div className="item__image"></div>
                        <p className="item__name">Name</p>
                        <p className="item__description">Description</p>
                        <p className="item__price">Price</p>
                        <a href="/#" className="removeItem"> </a>
                    </div>
                    <React.Fragment>
                        <Item />
                    </React.Fragment>
                </div>
            </div>
        </div>
    )
};

export default AddProducts;