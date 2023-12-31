import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Details = () => {
    const product = useLoaderData();
    const { _id, photo, name, brand, type, price, details, rating } = product;

    const handleCart = () => {
      Swal.fire({
        title: 'Success!',
        text: 'Product Added in My Cart',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
    }
    return (
        <div className="card  w-1/2 glass mx-auto my-10">
        <figure><img src={photo}alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Name: {name}</h2>
          <p>Band Name: {brand}</p>
          <p>Type: {type}</p>
          <p>Price: {price}</p>     
          <p>Rating:{rating}</p>
           
          <div className="card-actions">
          <Link to={`/cart/${_id}`}>
                       
          <button  onClick={handleCart} className="btn btn-primary">Add to Cart</button>
                       </Link>
          </div>
        </div>
      </div>
    );
};

export default Details;