const Form = () => {

    return (
    <form action="/">
        <div className="grid">
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
        </div>
        <div className="flex-end">
            <button type="submit" className="formSubmit">Add product</button>
        </div>
    </form>
  )
}

export default Form;