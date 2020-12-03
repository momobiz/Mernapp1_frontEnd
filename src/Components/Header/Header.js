
import Navbarb from '../Navbarb/Navbarb';
import {Button, InputGroup, FormControl, Navbar, Nav, Dropdown} from "react-bootstrap";
import logo_bricodeco from "../../Assets/logo_bricodeco2.png";
import "./header.css";


function Header() {
  return (
    <header className="header">
      <div className="row">
         <div className="header_button">
             <Button className="inscription" variant="success">S'inscrire </Button>
             <Button variant="success">Connexion 
                <i className="fa fa-user" aria-hidden="true" style={{marginLeft:"4px"}}></i>
            </Button>
        </div>
       </div>
       <div className="row">
            <div className="col-sm-12 recherche">
            <img src={logo_bricodeco} alt="bricodecoLogo" width="200px"/>
                
            <InputGroup className="col-sm-5">
                    <FormControl
                    placeholder="Rechercher..."
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    className="champsRechercher"
                    />
                    <InputGroup.Append>
                    <Button variant="outline-success"><i className="fa fa-search" aria-hidden="true" style={{color:"rgb(237,28,36)"}}>
                    </i></Button>
                    </InputGroup.Append>
                </InputGroup>
           </div>

           </div>
           <Navbarb/>
          

      
   
    </header>
  );
}

export default Header;