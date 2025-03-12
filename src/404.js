import { Link } from "react-router-dom/cjs/react-router-dom";

const Error404 = () => {
    return ( 
        <div className="Error404">
            <h2>Error 404</h2>
            <p>This page cannot be found</p>
            <Link to="/">Back to the homepage ...</Link>
        </div>
     );
}
 
export default Error404;