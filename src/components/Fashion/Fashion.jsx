import { Link } from "react-router-dom";

const Fashion = ({fashion}) => {
    const { id, name, image} = fashion;
    return (
       
        
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
             <Link to={`/fashion/${id}`}>
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-semibold">{name}</h2>
            </div>
            
              
                    
                </Link>
                </div>
        
       
    );
};

export default Fashion;