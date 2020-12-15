import React, {useState} from 'react';
import {Form, Modal, Button} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import  {updatePost} from '../../Redux/PostAction';

const FormPostUpdate = ({post}) => {
    const [postData, setPostData]=useState({
        description:"",
        price:'',
        phone:''

   
    })
    const reset=()=>{
        setPostData({
            description:"",
            price:'',
            phone:''
        })
    }
    const dispatch=useDispatch();
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(updatePost(post._id, postData))
        reset();

    }

    return (
        <div>
             <Modal.Dialog >
                  

                    <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                            

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" placeholder="Description" name="description"
                                 value={postData.description} onChange={(e)=>setPostData({...postData, description:e.target.value})}/>  
                            </Form.Group>

                            <Form.Group>
                                    <Form.Row>
                                       <Form.Control size="lg" type="text" placeholder="prix" name="price"
                                       value={postData.price} onChange={(e)=>setPostData({...postData, price:Number(e.target.value)})} />
                                    </Form.Row>
                           </Form.Group>

                           <Form.Group>
                                    <Form.Row>
                                       <Form.Control size="lg" type="text" placeholder="Téléphone" name="phone"
                                       value={postData.phone} onChange={(e)=>setPostData({...postData, phone:Number(e.target.value)})} />
                                    </Form.Row>
                           </Form.Group>

                    
                          
                            <Button variant="success" type="submit" style={{marginRight:"10px"}}>
                                Submit
                            </Button>
                            <Button variant="danger" type="reset" onClick={()=>reset({})}>
                                Reset
                            </Button>
                    </Form>
                        
                        
                    </Modal.Body>

                   
            </Modal.Dialog>
            
        </div>
    );
}

export default FormPostUpdate;
