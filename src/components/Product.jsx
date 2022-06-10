import './all.css';

// import image
import img from '../images/img.jpg';

// import fake data
import database from '../data/database.json'

const Product = () => {

    const products = database.products;

    console.log(database);

  return (
    <div className='container products'>
        {
            products.map(item=>(
                <div key={item.id} className="product">
                    <div className="product-img">
                        <img src={img} alt={item.title} />
                    </div>
                    <div className="product-title">
                        {item.title}
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Product