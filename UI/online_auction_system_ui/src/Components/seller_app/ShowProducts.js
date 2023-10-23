import React, { useEffect, useState } from 'react'
import { fetchAllProductsFromDB } from '../../ApiServices/ApiServices'
import { NavLink } from 'react-router-dom'

function ShowProducts() {
    const [information, setInformation] = useState([])
    async function fetchAllProducts(){
        await fetchAllProductsFromDB().then(
            (response) =>{
                console.log(response)
                setInformation(response.data)
            }
        ).catch(
            (error) =>{
                console.error(error)
            }
        )
    }
    useEffect(()=>{
        fetchAllProducts()
    },[])

  return (
    <div className='container'>
        <h1>Show Product</h1>
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>Product Id</th>
                    <th>Product Name</th>
                    <th>Product Description</th>
                    <th>Product Manufacture Year</th>
                    <th>Product Base Price</th>
                    <th>Product Images</th>
                    <th>Update Product</th>
                    <th>Delete Product</th>
                </tr>
            </thead>
            <tbody>
                {
                    information.map((information)=>{
                        return(
                            <tr key={information.id}>
                                <td>{information.product_id}</td>
                                <td>{information.product_name}</td>
                                <td>{information.product_description}</td>
                                <td>{information.product_manufacture_year}</td>
                                <td>{information.product_base_price}</td>
                                <td>{information.product_images}</td>
                                <td><NavLink to={`/update/${information.product_id}`}><i class="bi bi-pencil-square"></i></NavLink></td>
                                <td><NavLink to={`/delete/${information.product_id}`}><i class="bi bi-trash3"></i></NavLink></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default ShowProducts