import { Link } from "react-router-dom"

const NotFound = () => {
    return ( 
        <div>
            <h2>Not found</h2>
            <p>the link is wrong</p>

            <Link to = "/">
            Home Page
            </Link>

        </div>
     );
}
 
export default NotFound;