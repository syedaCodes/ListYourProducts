const Item = () => {
  return (
    <div className="item" id="">
        <div className="item__image">
            <img 
            src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" 
            alt="item" className="item__image--img"/>
        </div>
        <p className="item__name">Name</p>
        <p className="item__description">Description</p>
        <p className="item__price"><span>39999</span> SEK</p>
        <a href="/#" className="removeItem">Remove</a>
    </div>
  )
}

export default Item;