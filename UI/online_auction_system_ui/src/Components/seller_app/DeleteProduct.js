import React, { useEffect } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { deleteProductFromDB, fetchProductFromDB } from '../../ApiServices/ApiServices'
import { useState } from 'react'

function DeleteProduct() {
    const { productId }  = useParams('productId')
    const [information, setInformation] = useState({})
    const nav = useNavigate()

    async function fetchProduct(){
        await fetchProductFromDB(productId).then(
            (response) => {
               setInformation(response.data) 
            }
        )
    }

    async function deleteProduct(){
        await deleteProductFromDB(productId).then(
            (response)=>{
                nav('/show')
            }
        ).catch(error =>{
            console.error(error)
        })

    }

    useEffect(()=>{
        fetchProduct()
    },[])

  return (
    <div className='container'>
        <h1 className='text-info'>Are You Sure You Want To Delete<span className='text-danger'>{information.product_name}</span>???</h1>
        <button type='button' onClick={deleteProduct} className='btn btn-outline-danger col-sm-5'>YES</button> 
        <NavLink to={'/show'} className={'btn btn-outline-warning col-sm-5 float-end'}>NO</NavLink>
    </div>
  )
}

export default DeleteProduct