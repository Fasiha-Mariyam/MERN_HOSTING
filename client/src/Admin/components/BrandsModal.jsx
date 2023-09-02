import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'; 
import Form from 'react-bootstrap/Form';
import {storage} from '../utils/FirebaseConfig'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from 'axios';
import { AppRoute } from '../../App';

function BrandsModal({ recallData }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [BrandName, setBrandName] = useState("")
  const [BrandImage, setBrandImage] = useState(null)

  const AddBrand = (e) => {
    e.preventDefault();

    const storageRef = ref(storage, `images/brand/${BrandImage.name}`);
    uploadBytes(storageRef, BrandImage).then((snapshot) =>{
      getDownloadURL(snapshot.ref)
      .then((url) => {
        
        const payload = { BrandName, BrandImage: url }
        axios.post(`${AppRoute}api/add-brand`, payload)
            .then((json) => {

                setShow(false);
                recallData(json.data.Brands)
                setBrandName('')

            })
            .catch(err => alert(err.message))

      })
      .catch((error) => alert(error.message));

    });
  }

 

  return (
    <>
      <Button variant="primary" onClick={handleShow} className='btn btn-info text-white fw-bold'  >
        Add Brand
      </Button>

      <Modal show={show} onHide={handleClose} centered backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Add Brand</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
        <Form onSubmit={AddBrand}>
      <Form.Group className="mb-3" controlId="BrandName">
        <Form.Label>Brand Name</Form.Label>
        <Form.Control type="text" className="form-control" placeholder="Enter name" value={BrandName}
                     onChange={(e) => setBrandName(e.target.value)}/>
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Brand Image</Form.Label>
        <Form.Control type="file" onChange={(e) => setBrandImage(e.target.files[0])}/>
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

export default BrandsModal;