import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'; 
import Form from 'react-bootstrap/Form';
import {storage} from '../utils/FirebaseConfig'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from 'axios';
import { FloatingLabel } from 'react-bootstrap';

function ProductModal({recallData}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    axios.get('/api/get-all-brands')
    .then((json) =>{ 
        console.log(json.data.brands)
        setBrandName(json.data.brands)
        axios.get('/api/get-all-category')
        .then((json) => {
            console.log(json.data.Category)
            setCategoryName(json.data.Category)
        setShow(true)
       })
    })
};

  const [ProductName, setProductName] = useState("")
  const [Image, setImage] = useState(null)
  const [CategoryName, setCategoryName] = useState([])
  const [BrandName, setBrandName] = useState([])
  const [Description, setDescription] = useState("")
  const [Price, setPrice] = useState(0)
  const [Rating, setRating] = useState(0)


  const AddProduct = (e) => {
    e.preventDefault();

    const storageRef = ref(storage, `images/Product/${Image.name}`);
    uploadBytes(storageRef, Image).then((snapshot) =>{
      getDownloadURL(snapshot.ref)
      .then((url) => {
        
        const payload = { ProductName, Image: url ,CategoryName,BrandName,Description,Rating,Price}
        console.log(payload)
        axios.post('/api/create-products', payload)
            .then((json) => {

                setShow(false);
                recallData(json.data.Product)
                setProductName('')
                setDescription('')
                setPrice('')
                setBrandName('')
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
        Add Product
      </Button>

      <Modal show={show} onHide={handleClose} centered backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
        <Form onSubmit={AddProduct}>
      <Form.Group className="mb-3" controlId="ProductName">
        <Form.Label>Product Name</Form.Label>
        <Form.Control type="text" className="form-control" placeholder="Enter name" value={ProductName}
                     onChange={(e) => setProductName(e.target.value)}/>
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Product Image</Form.Label>
        <Form.Control type="file" onChange={(e) => setImage(e.target.files[0])}/>
      </Form.Group>
      <Form.Select aria-label="Select Brand" className='mb-3'>
      <option disabled>Select Brand</option>
      {BrandName.map((val,key)=>
      <option key={key} value={val.BrandName}>{val.BrandName}</option>
      )}
    </Form.Select>
    <Form.Select aria-label="Select Category" className='mb-3'>
      <option disabled >Select Category</option>
      {
      CategoryName.map((val,key)=>
      <option key={key} value={val.CategoryName}>{val.CategoryName}</option>)
      }
    </Form.Select>
<FloatingLabel controlId="price" label="Product Price ($)" className="mb-3 text-secondary">
   <Form.Control type='number' placeholder='Product Price' value={Price} onChange={(e) => setPrice(e.target.value)}></Form.Control>
 </FloatingLabel>
<label htmlFor="descriptionFormControlTextarea1" className="form-label">
    Description
</label>
<textarea
className="form-control"
id="descriptionFormControlTextarea1" rows={3}
value={Description}
onChange={(e) => setDescription(e.target.value)}/>
                       
      <Button variant="info" type="submit" className='fw-bold mt-3'>
        Add
      </Button>
    </Form>
            
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProductModal;
