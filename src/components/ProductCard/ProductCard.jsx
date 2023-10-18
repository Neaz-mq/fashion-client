

const ProductCard = ({product}) => {

    const { photo, name, brand, type, price, details, rating } = product;


    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={photo}alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Name: {name}</h2>
          <p>Band Name: {brand}</p>
          <p>Type: {type}</p>
          <p>Price: {price}</p>     
          <p>Rating:{rating}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Details</button>
          </div>
          <div className="card-actions">
            <button className="btn btn-primary">Update</button>
          </div>
        </div>
      </div>
    );
};

export default ProductCard;