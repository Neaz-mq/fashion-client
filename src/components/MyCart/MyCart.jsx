
import {useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyCart = () => {

    const product = useLoaderData();
    const { _id, photo, name, brand, type, price, details, rating } = product;

    const handleDelete = _id => {

      console.log(_id);
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {

                        Swal.fire(
                            'Deleted!',
                            'Your order has been deleted.',
                            'success'
                        )                
                       
                    }
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
          
                       
          <button  onClick={() => handleDelete(_id)} className="btn btn-warning text-white">Delete item</button>
                      
          </div>
        
        </div>
      </div>
    );
};

export default MyCart;