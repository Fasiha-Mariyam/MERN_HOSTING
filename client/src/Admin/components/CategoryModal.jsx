import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'; 
import Form from 'react-bootstrap/Form';
import {storage} from '../utils/FirebaseConfig'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from 'axios';

function CategoryModal({recallData}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [CategoryName, setCategoryName] = useState("")
  const [CategoryImage, setCategoryImage] = useState(null)

  const AddCategory = (e) => {
    e.preventDefault();

    const storageRef = ref(storage, `images/category/${CategoryImage.name}`);
    uploadBytes(storageRef, CategoryImage).then((snapshot) =>{
      getDownloadURL(snapshot.ref)
      .then((url) => {
        
        const payload = { CategoryName, CategoryImage: url }
        axios.post('/api/create-category', payload)
            .then((json) => {

                setShow(false);
                recallData(json.data.Category)
                console.log(recallData)
                setCategoryName('')

            })
            .catch(err => alert(err.message))

      })
      .catch((error) => alert(error.message));

    });
  }

 

  return (
    <>
      <Button variant="primary" onClick={handleShow} className='btn btn-info text-white fw-bold'  >
        Add Category
      </Button>

      <Modal show={show} onHide={handleClose} centered backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
        <Form onSubmit={AddCategory}>
      <Form.Group className="mb-3" controlId="CategoryName">
        <Form.Label>Category Name</Form.Label>
        <Form.Control type="text" className="form-control" placeholder="Enter name" value={CategoryName}
                     onChange={(e) => setCategoryName(e.target.value)}/>
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Category Image</Form.Label>
        <Form.Control type="file" onChange={(e) => setCategoryImage(e.target.files[0])}/>
      </Form.Group>
      <Button variant="info" type="submit" className='fw-bold'>
        Add
      </Button>
    </Form>
            
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CategoryModal;