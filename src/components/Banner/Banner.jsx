

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/S5DhkVZ/pexels-mart-production-7679446.jpg)'}}>
        <div className="hero-overlay bg-opacity-75"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg" data-aos="fade-down">
            <h1 className="mb-5 lg:text-5xl text-5xl font-bold text-white my-8">Let's Shop</h1>
            <p className="mb-5 lg:text-lg text-base font-medium text-slate-50">Fashion is a term used interchangeably to describe the creation of clothing, footwear, accessories, cosmetics, and jewellery.</p>
            <button className="btn btn-error text-white">Shop Now</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;