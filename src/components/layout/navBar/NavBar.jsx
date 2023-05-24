import './NavBar.css';
import Button from '@mui/material/Button';
import { CartWidget } from '../../common/CartWidget/CartWidget';


export const NavBar = () => {
    return (
    <div className="navBar">
        <h3>EXPLORE</h3>
        <div>
            <Button variant="contained" size="small">América del Norte</Button>
            <Button variant="contained" size="small">América del Sur</Button>
            <Button variant="contained" size="small">Centro América</Button>
            <Button variant="contained" size="small">Europa</Button>
            <Button variant="contained" size="small">Asia</Button>
            <Button variant="contained" size="small">Oceanía</Button>
        </div>
        <CartWidget />
    </div>
    );
};
