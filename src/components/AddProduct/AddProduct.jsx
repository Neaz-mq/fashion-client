
import Swal from 'sweetalert2';

const AddProduct = () => {
    const handleAddProduct = event => {
        event.preventDefault();


        const form = event.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const details = form.details.value;
        const rating = form.rating.value;
      


        const newProduct = { photo, name, brand, type, price, details, rating}

        console.log(newProduct);

        // send data to the server

        fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }
    return (
        <div className="bg-orange-100 p-24">
            <h2 className="text-3xl font-extrabold text-center">Add a Product</h2>
            <div className='lg:ml-96 -mr-16 mt-8'>
            <form onSubmit={handleAddProduct}>
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Image</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="photo" placeholder="Image url" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="name" placeholder="Product name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Brand Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="brand" placeholder="Brand" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Type</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="type" placeholder="Product type" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Price</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Details</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Rating</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="form-control md:w-1/2">
                    <input type="submit" value="Add Product" className="btn btn-block mt-10 btn-accent text-xl font-semibold" />
                </div>
            </form>
            </div>
        </div>
    );
};

export default AddProduct;