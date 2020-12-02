import React, {useState} from 'react';
import {Button, Modal, Form} from "react-bootstrap"; 
import "./formPost.css"; 

const FormPost = () => {

    const [postData, setPostData]=useState({
        category:'',
        title:'',
        photo:'',
        description:'',
        phone:0,
        city:''


    })

    


    const plantes=["Arbres", "Arbustes", "Plantes d'intérieures"];
    const outillages=["Outils de Jardinage", "Outils de Bricolage"];
    const entretiensJardin=["Engrais et Persticide", "Services"];
    const mobiliersJardin=["Salons de Jardin", "Meubles Divers"];
    const articlesDecorations=["Pots et Bacs","balustrades et Fontaine", "Eclairage", "Accessoires Divers"];

    const categories=[[], plantes, outillages, entretiensJardin, mobiliersJardin, articlesDecorations];

    const charger=()=>{
        const i=document.getElementById("category").selectedIndex;
        const liste2=document.getElementById("liste2");

       

       if(liste2.length>0){
            for(let k=liste2.length-1; k>=0;k--){
                liste2.remove(k);
            }
        }
        console.log(i);

        for(let j=0; j<categories[i].length; j++){
            let e=document.createElement('option');
            e.text=categories[i][j];
            e.value=categories[i][j];
            liste2.add(e,null); 
        }
    }

    const handleSubmit=()=>{
        
    }
    


    return (
        <div>
           postData={postData.title}
          
            <Modal.Dialog >
                    <Modal.Header closeButton>
                        <Modal.Title style={{color:"#28a745"}}>Créer votre annonce </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                 <Form.Control size="lg" type="text" placeholder="Titre" value={postData.title} onChange={(e)=>setPostData({...postData, title:e.target.value})} />
                             </Form.Group>

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" placeholder="Description"  value={postData.description} onChange={(e)=>setPostData({...postData, description:e.target.value})}/>  
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Control as="select" id="category"  onChange={()=>charger()}>
                                <option> Categories </option>
                                <option>Plantes</option>
                                <option>Outillages </option>
                                <option>Entretien jardin </option>
                                <option>Mobilier Jardin</option>
                                <option>Articles de décorations</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Control as="select" id="liste2" value={postData.category} onChange={(e)=>setPostData({...postData, category:e.target.value})}>
                                </Form.Control>
                           </Form.Group>

                           <Form.Group>
                                    <Form.Row>
                                       <Form.Control size="lg" type="text" placeholder="Téléphone" value={postData.phone} onChange={(e)=>setPostData({...postData, phone:e.target.value})} />
                                    </Form.Row>
                           </Form.Group>

                           <Form.Group>
                                <Form.Control as="select" size="lg" value={postData.city} onChange={(e)=>setPostData({...postData, city:e.target.value})}>
                                    <option>ville</option>
                                    <option value="bizerte"> Bizerte</option>
                                    <option value="tunis">Tunis</option>
                                    <option value="sousse"> Sousse</option>
                                </Form.Control>
                            </Form.Group>


                           <Form.Group>
                                <Form.File id="postPhoto" label="Ajouter une photo" value={postData.photo} onChange={(e)=>setPostData({...postData, photo:e.target.value})} />
                           </Form.Group>




                          
                            <Button variant="success" type="submit" style={{marginRight:"10px"}}>
                                Submit
                            </Button>
                            <Button variant="danger" type="reset">
                                Reset
                            </Button>
                    </Form>
                        
                        
                    </Modal.Body>

                   
            </Modal.Dialog>
            
        </div>
    );
}

export default FormPost;
