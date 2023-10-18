

const Brands = () => {
    return (
        <div>
            <h1 className="text-5xl font-bold text-center mt-10">Our Brands</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-8 my-12">
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/b66j9kk/pexels-aman-jakhar-1124465.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-semibold">Nike</h2>

                    </div>
                </div>

                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/R0YWM1g/pexels-kaique-rocha-48013.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-semibold">Adidas</h2>

                    </div>
                </div>

                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/VWCrX6g/pexels-antony-trivet-9982571.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-semibold">Gucci</h2>

                    </div>
                </div>

                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/C08B86J/pexels-hanuman-photo-studio-17820264.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-semibold">Zara</h2>

                    </div>
                </div>

                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/p3tvP0Q/pexels-rdne-stock-project-5898586.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-semibold">H&M</h2>

                    </div>
                </div>

                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/6yBNm9c/pexels-victor-coutant-14528152.jpg" alt="Shoes" /></figure>
                    <div className="card-body ">
                        <h2 className="card-title text-2xl font-semibold">Levi's</h2>

                    </div>
                </div>

            </div>
            
            <div className="text-center my-8">
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-active btn-secondary text-white">Shop Now</button>
                </div>
        </div>
    );
};

export default Brands;