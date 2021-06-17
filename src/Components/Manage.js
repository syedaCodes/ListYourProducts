import React from 'react';

class Manage extends React.Component{

    render(){
        return(
            <div className="manageContainer">
                <form action="/">
                    <div className="form-group">
                        <label htmlFor="productName">Product name</label>
                        <input id="productName" placeholder="Enter Product Name" type="text" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="productPrice">Product price</label>
                        <input id="productPrice" placeholder="Enter Price" type="text" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="productDescription">Product description</label>
                        <textarea id="productDescription" placeholder="Enter Description"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="productImage">Product image</label>
                        <input id="productImage" placeholder="Browse" type="file" />
                    </div>
                    <br />
                    <button type="submit" className="formSubmit">Add product</button>
                </form>

                <div className="formOutput">
                    <div className="products">
                    <div className="item">
                            <div className="itemImage"></div>
                            <p className="itemName">Name</p>
                            <p className="itemDescription">Description</p>
                            <p className="itemPrice">Price</p>
                            <a href="/#" className="removeItem"> </a>
                        </div>
                        <div className="item" id="">
                            <div className="itemImage"><img src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="item" className="itemPicture"/></div>
                            <p className="itemName">Name</p>
                            <p className="itemDescription">Description</p>
                            <p className="itemPrice"><span>39999</span> SEK</p>
                            <a href="/#" className="removeItem">Remove</a>
                        </div>
                        <div className="item" id="">
                            <div className="itemImage"><img src="" alt="item" className="itemPicture"/></div>
                            <p className="itemName"></p>
                            <p className="itemDescription"></p>
                            <p className="itemPrice"></p>
                            <a href="/#" className="removeItem">Remove</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Manage;