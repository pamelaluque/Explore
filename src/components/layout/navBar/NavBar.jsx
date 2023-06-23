import './NavBar.css';
import Button from '@mui/material/Button';
import { CartWidget } from '../../common/CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { menuNavigate } from '../../../routes/menuNavigate';


export const NavBar = () => {
    return (
    <div className="navBar">
        <div className='logoNavBar'>
            <Link to="/">
            <img src="https://res.cloudinary.com/db8btnoov/image/upload/v1685570439/EXPLORE/logoExplore_lu6vpv.png" alt="Logo Explore" style={{width:"20px", margin: "8px"}} />
            <h3>explore</h3>
            </Link>
        </div>
        
        <div>
            { menuNavigate.map(({id, path, title})=>(
                <Link key={id} to={path}> 
                    <Button variant="contained" size="small" style={{margin: "3px"}} >{title}</Button>
                </Link>
            )) }
        </div>

        <Link to="/carrito">
            <CartWidget />
        </Link>
        
    </div>
    );
};
