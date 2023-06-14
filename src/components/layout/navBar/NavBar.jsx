import './NavBar.css';
import Button from '@mui/material/Button';
import { CartWidget } from '../../common/CartWidget/CartWidget';
import { Link } from 'react-router-dom';

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
            <Link to="/">
                <Button variant="contained" size="small" style={{margin: "3px"}} >Todas</Button>
            </Link>
            
            <Link to="/category/América">
                <Button variant="contained" size="small" style={{margin: "3px"}}>América</Button>
            </Link>
            
            <Link to="/category/Europa">
                <Button variant="contained" size="small" style={{margin: "3px"}}>Europa</Button>
            </Link>
            
            <Link to="/category/Asia" >
                <Button variant="contained" size="small" style={{margin: "3px"}}>Asia</Button>
            </Link>
                
            <Link to="/category/Oceanía">
                <Button variant="contained" size="small" style={{margin: "3px"}}>Oceanía</Button>
            </Link>
        </div>

        <Link to="/carrito">
            <CartWidget />
        </Link>
        
    </div>
    );
};
