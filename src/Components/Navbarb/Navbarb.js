import React from 'react';

import {Dropdown, Nav, Navbar, Button} from "react-bootstrap";
import "./navbarb.css"; 

const Navbarb = () => {
    return (
        <Navbar  bg="link" variant="link" className="navbarb" >
                 
          <Nav className=" menu">
                    <Button variant="success">Accueil</Button>
            
                    <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Plantes
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Arbres</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Arbustes</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Plantes d'intérieures </Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Outillages
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Outils de jardinage </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Outils de bricolages diverses</Dropdown.Item>
                          
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Entretien Jardin
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Engrais et Persticides </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Services</Dropdown.Item>
                          
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Mobilier jardin
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Salons de jardin </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">meubles divers </Dropdown.Item>
                      
                    </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Articles de décorations
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Pots et bacs</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Balustrades, Fontaines et autres </Dropdown.Item>
                        <Dropdown.Item href="#/action-3"> Eclairages </Dropdown.Item>
                        <Dropdown.Item href="#/action-4"> Accessoires divers </Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>



             
         
        
        </Nav>
       
</Navbar>

        

    
    );
}

export default Navbarb;
