

const Offer = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/8M6BKTS/pexels-andrea-piacquadio-845434.jpg)'}}>
        <div className="hero-overlay bg-opacity-75"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg -ml-64" data-aos="fade-down">
            <h1 className="mb-5 lg:text-3xl text-xl font-semibold text-white lg:my-8 mt-20 ml-12 text-left lg:ml-16">Happy Sunday</h1>
            <h1 className="mb-5 lg:text-8xl text-3xl font-bold text-rose-400 lg:my-8 ml-12 text-left lg:-ml-12">40% OFF</h1>
            <p className="mb-5 lg:text-3xl text-base ml-8 font-medium text-slate-50 lg:pt-5">All Premimum T-Shirts</p>
            <button className="btn btn-outline btn-error mt-5 ml-5 lg:ml-0">Shop Now</button>
          </div>
        </div>
      </div>
    );
};

export default Offer;