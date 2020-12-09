
import Navbarb from '../Navbarb/Navbarb';
import {Button, InputGroup, FormControl} from "react-bootstrap";
import logo_bricodeco from "../../Assets/logo_bricodeco2.png";
import "./header.css";
import {useState} from 'react';
import {Link} from 'react-router-dom';



function Header({setMotsCle}) {

  const [valeurMotcle, setValeurMotcle]=useState('');

  return (
    <header className="header">
      <div className="row">
         <div className="header_button">
            <Link to="/user/inscription"> <Button className="inscription" variant="success">S'inscrire </Button> </Link>
             <Button variant="success">Connexion 
                <i className="fa fa-user" aria-hidden="true" style={{marginLeft:"4px"}}></i>
            </Button>
        </div>
       </div>
       <div className="row">
            <div className="col-sm-12 recherche">
           <Link to="/"> <img src={logo_bricodeco} alt="bricodecoLogo" width="200px"
                          onClick={()=>setMotsCle('')}/></Link>
                
            <InputGroup className="col-sm-5">
                    <FormControl
                    placeholder="Rechercher..."
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    className="champsRechercher"
                    id="chercher"
                    value={valeurMotcle}
                    onChange={ (e)=>setValeurMotcle(e.target.value)}
                    />
                    <InputGroup.Append>
                    <Button variant="outline-success"><i className="fa fa-search" aria-hidden="true" 
                   style={{color:"rgb(237,28,36)"}}
                   onClick={()=>{setMotsCle(document.getElementById('chercher').value);
                                setValeurMotcle('')}}
                   >
                    </i></Button>
                    </InputGroup.Append>
                </InputGroup>
           </div>

           </div>
           <Navbarb setMotsCle={setMotsCle}/>
          

      
   
    </header>
  );
}

export default Header;