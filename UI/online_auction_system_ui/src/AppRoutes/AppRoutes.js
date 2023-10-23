import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { AppError, DeleteProduct, ProductInformation, ShowProducts, UpdateProduct } from '../Components/seller_app'

function AppRoutes() {
  return (
    <Routes>
        <Route path='/information' element={<ProductInformation/>}/>
        <Route path='/show' element={<ShowProducts/>}/>
        <Route path='/update/:productId' element={<UpdateProduct/>}/>
        <Route path='/delete/:productId' element={<DeleteProduct/>}/>
        <Route path='/*' element={<AppError/>}/>
        
        
        

    </Routes>
  )
}

export default AppRoutes