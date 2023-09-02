import React, { useEffect, useState } from 'react'
import UserCards from '../Components/UserCard'
import axios from 'axios'
import Spinner from 'react-bootstrap/Spinner';
import { Link } from 'react-router-dom';

export default function Categories() {

    const [Category, setCategory] = useState([])
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        axios.get('/api/get-all-category')
        .then(json => 
            {  setCategory(json.data.Category)
                setLoader(false)}
            )
        .catch(err => alert(err.message))
    }, [])


    return (

        loader ? (<div className='d-flex justify-content-center align-items-center' style={{ width: '100%', height: '100vh' }}><Spinner animation="grow" /></div>
        ) :
      
        <div className="container my-5">
            <div className="text-center">
                <h2>Categories</h2>
                <small className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum delectus magnam doloribus voluptatibus possimus corrupti aliquid itaque harum debitis ipsa!</small>
            </div>

            <div className="row my-5">
                {
                    Category?.map((val, key) => 
                    <UserCards key={key} image={val.CategoryImage} name={val.CategoryName}
                     url={`/categories/${val.CategoryName}`}/>
                     )
                     
                }

            </div>
        </div>
    
    )
}