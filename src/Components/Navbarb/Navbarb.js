import React from 'react';
import {Dropdown, Nav, Navbar, Button} from "react-bootstrap";
import "./navbarb.css"; 
import {Link} from "react-router-dom";

const Navbarb = ({setMotsCle}) => {
    return (
        <Navbar  bg="link" variant="link" className="navbarb" >
                 
          <Nav className=" menu">
                   <Link to="/"> <Button variant="success" onClick={()=>setMotsCle('')}>Accueil</Button></Link>
            
                    <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Plantes
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                       <Dropdown.Item >  <Link to="/arbres"> Arbres </Link></Dropdown.Item>


                      <Dropdown.Item>   <Link to="/arbustes">Arbustes</Link></Dropdown.Item>
                        <Dropdown.Item><Link to="/plantes_d_intérieur"> Plantes d'intérieur</Link> </Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Outillages
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item><Link to="/outils_de_jardinage"> Outils de jardinage </Link></Dropdown.Item>
                            <Dropdown.Item><Link to="/outils_de_bricolages"> Outils de bricolages diverses </Link></Dropdown.Item>
                          
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Entretien Jardin
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item><Link to="/engrais_et_pesticides"> Engrais et Persticides </Link></Dropdown.Item>
                            <Dropdown.Item><Link to="/services">Services </Link> </Dropdown.Item>
                          
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Mobilier jardin
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item> <Link to="salons_de_jardin">Salons de jardin</Link> </Dropdown.Item>
                        <Dropdown.Item> <Link to="meubles_divers">Meubles divers </Link> </Dropdown.Item>
                      
                    </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Articles de décorations
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item><Link to="/pots_et_bacs"> Pots et bacs</Link></Dropdown.Item>
                        <Dropdown.Item><Link to="/balustrades_fontaines_et_autres"> Balustrades Fontaines et autres </Link></Dropdown.Item>
                        <Dropdown.Item><Link to="/eclairages">Eclairages</Link></Dropdown.Item>
                        <Dropdown.Item><Link to="/accessoires_divers">Accessoires divers</Link> </Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>



             
         
        
        </Nav>
       
</Navbar>

        

    
    );
}

export default Navbarb;
