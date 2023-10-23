import React from 'react'
import { saveInformationToDB, fetchProductFromDB } from '../../ApiServices/ApiServices'
import { useForm } from 'react-hook-form'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'





function ProductInformation(){
        const {register, handleSubmit, reset, watch, setValue} = useForm()
        const { productId } = useParams(productId)
        const nav = useNavigate()
        const selectedImages = watch('product_images');
        function saveInformation(informationData){
           saveInformationToDB(informationData)
            nav('/thanks');}

        const onSubmit = informationData => {
            console.log('Selected Images:', selectedImages);
            const formData = new FormData();
                for (const file of selectedImages) {
                    formData.append('product_images', file);
                }
                fetch('/information/productinformation', {
                    method: 'POST',
                    body: formData,
                  })
                  .then((response) => {
                    setValue('product_verify', response.data.product_verify)
                    if (response.ok) {
                      console.log('Images uploaded successfully');
                    } else {
                      console.error('Error uploading images');
                    }
                  })
                  .catch((error) => {
                    console.error('Error:', error);
                  });
                }

                  /*async function fetchImage(){
                    await fetchProductFromDB(productId).then(
                        (response) => {
                            console.log(response.data)
                            setValue('product_images', response.data.product_images)
                        }
                    ).catch(error => {
                        console.log(error)
                    })
                }
            
                useEffect(()=>{
                    fetchImage()
                })*/
       
    return (
        <div className="style={{ height: '200px' }}">
            <h1 className='text-danger text-center'>Product Information </h1>
            <form onSubmit={handleSubmit(saveInformation)}encType='multipart/form-data'>
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
                    <label htmlFor="inputowner" className="form-label">Owner</label>
                    <input type='' className='form-control' id='inputowner' {...register('owner')}/>
                </div>
                <div className="col-nb-3">
                    <label htmlFor="inputproductverify" className="form-label">Product Varify</label>
                    <input type="checkbox" className="form-check-input" id='inputProductverify' {...register('product_verify')}/>
                </div>
                <div className="col-nb-3">
                    <label htmlFor="inputproductimges" className="form-label">Product Images</label>
                    <input type="file" className="form-control" id='inputfile' onClick={()=>{onSubmit()}} {...register('product_images', { required: true })}multiple/>
                    <button type="button" className="btn btn-outline-warning col-sm-4 "> upload all images </button>
                </div>
                <button type="submit" className="btn btn-outline-warning col-sm-4 "> Submit </button>
                <button type="button" className="btn btn-outline-warning col-sm-4 float-end" onClick={()=>{reset()}}> Reset </button>
            </form>
        </div>
    )
}

export default ProductInformation