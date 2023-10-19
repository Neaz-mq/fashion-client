
import { useLoaderData} from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";


const ProductDetails = () => {
    const products = useLoaderData();
   

    return (
       
<div className='m-20'>
      
      <h1 className='text-6xl my-20 text-center text-purple-600'>Products: {products.length}</h1>
      
      <div className='grid md:grid-cols-2 ml-20 '>
      {
        products.map(product => <ProductCard
        
          key={product._id}
          product={product}
          
         
        ></ProductCard>)
      }
      
      </div>
      </div> 
    );
};

export default ProductDetails;

