import { useEffect, useState } from "react";
import Fashion from "../fashion/fashion";


const Brands = () => {
    const [fashions, setFashions] = useState([]);
    // this is not the best way to load show all data
    const [dataLength, setDataLength] = useState(6);
  
    
    useEffect(() => {
      fetch("fashions.json")
        .then((res) => res.json())
        .then((data) => setFashions(data));
    }, []);
    return (
        <div>
        <div className="text-center">
          <h2 className="text-5xl font-bold p-14 mb-5" data-aos="zoom-in">Our Brands</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 md:ml-52 lg:grid-cols-3 gap-10  lg:mx-8 mx-5 my-12">
          {fashions.slice(0, dataLength).map((fashion) => (
            <Fashion  key={fashion.id} fashion={fashion}></Fashion>
        
          ))}
        </div>
       
      </div>
    );
};

export default Brands;