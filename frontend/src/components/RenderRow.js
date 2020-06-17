import React, { Fragment } from 'react'
import {format}  from 'timeago.js'
import { Link } from 'react-router-dom'
export default function RenderRow({product, deleteProduct, venderProduct}) {


    return (
       <Fragment>
         <div className="card mt-5 p-2">
              <div className="card-header d-flex justify-content-between">
              <h3 className="text-center">{product.nombre}</h3>
              <Link className="btn btn-dark btn-sm"  to={"/productos/edit/"+ product.id}>
              <i className="fa fa-pencil fa-2x" aria-hidden="true"></i>

              </Link>
              </div>
             <div className="card-body">
                 <p>referencia: {product.referencia}</p>
                 <p>precio: $ {product.precio}</p>
                 <p>peso: {product.peso} lbr</p>
                 <p>categoria: {product.categoria}</p>
                 <p>stock: {product.stock} Unt</p>
                 <p>fecha Creacion : { format(product.created_at)} </p>
                 <p>fecha ultima venta : {product.fecha_ultima_venta} </p>
                 <button className="btn btn-danger btn-sm mx-2" onClick={()=>deleteProduct(product.id)}>eliminar</button>
                 <button className="btn btn-success btn-sm" onClick={()=>venderProduct(product.id)}>vender</button>
             </div>
         </div>
       </Fragment>
    )
}
