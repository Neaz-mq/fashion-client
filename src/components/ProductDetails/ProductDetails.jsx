import { useLoaderData, useParams } from "react-router-dom";


const ProductDetails = () => {
    const fashions = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const fashion = fashions.find(fashion => fashion.id === idInt);
    console.log(fashion); 
    return (
        <div className="card w-1/2 glass mx-auto my-10" >
        <figure><img src={fashion.image} alt=""/></figure>
        <div className="card-body">
          <h2 className="card-title">{fashion.name}</h2>      
        </div>
      </div>
    );
};

export default ProductDetails;