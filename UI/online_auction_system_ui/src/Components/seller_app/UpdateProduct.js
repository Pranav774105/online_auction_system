import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchProductFromDB, updateProductFromDB } from '../../ApiServices/ApiServices'
import { useForm } from 'react-hook-form'

function UpdateProduct() {
    const { productId }  = useParams('productId')
    const {register, handleSubmit, reset, setValue} = useForm()
    const nav = useNavigate

    async function fetchProduct(){
        await fetchProductFromDB(productId).then(
            (response) => {
                console.log(response.data)
                setValue('product_id', response.data.product_id)
                setValue('product_name', response.data.product_name)
                setValue('product_description', response.data.product_description)
                setValue('product_manufacture_year', response.data.product_manufacture_year)
                setValue('product_base_price', response.data.product_base_price)
                setValue('product_verify', response.data.product_verify)
            }
        ).catch(error => {
            console.log(error)
        })
    }

    async function updatProduct(informationData){
        await updateProductFromDB(productId, informationData).then(
            (response) =>{
                nav('/show')
            }
        ).catch(error=>{
            console.error(error)
        })
    }

    useEffect(()=>{
        fetchProduct()
    })

  return (
    <div className='container'>
        <h1 className='text-info text-center'> Update Product</h1>
        <form onSubmit={handleSubmit(updatProduct)}>
                <div className="col-nb-3">
                    <label htmlFor="inputproductid" className="form-label">Product Id</label>
                    <input type='number' className='form-control' id='inputProductid' {...register('product_id')}/>
                </div>
                <div className="col-nb-3">
                    <label htmlFor="inputproductname" className="form-label">Product name</label>
                    <input type='text' className='form-control' id='inputProductname' {...register('product_name')}/>
                </div>
                <div className="col-nb-3">
                    <label htmlFor="inputproductdescription" className="form-label">Product Description</label>
                    <input type='text' className='form-control' id='inputProductdescription' {...register('product_description')}/>
                </div>
                <div className="col-nb-3">
                    <label htmlFor="inputproductmanufactureyear" className="form-label">Product Manufacture Year</label>
                    <input type='number' className='form-control' id='inputProductmanufactureyear' {...register('product_manufacture_year')}/>
                </div>
                <div className="col-nb-3">
                    <label htmlFor="inputproductbaseprice" className="form-label">Product Base Price</label>
                    <input type='number' className='form-control' id='inputProductbaseprice' {...register('product_base_price')}/>
                </div>
                <div className="col-nb-3">
                    <label htmlFor="inputproductverify" className="form-label">Product Varify</label>
                    <input type="checkbox" className="form-check-input" id='inputProductverify' {...register('product_verify')}/>
                </div>
                <button type="submit" className="btn btn-outline-warning col-sm-4 "> Update </button>
                <button type="button" className="btn btn-outline-warning col-sm-4 float-end" onClick={()=>{reset()}}> Reset </button>
        </form>
    </div>
  )
}

export default UpdateProduct