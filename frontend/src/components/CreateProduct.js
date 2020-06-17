import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function CreateProduct(props) {
  const { register, handleSubmit, errors } = useForm();

  const URI = "http://localhost:8000/api/productos";

  const [product, setProduct] = useState({
    nombre: "",
    referencia: "",
    precio: "",
    peso: "",
    categoria: "",
    stock: "",
  });

  useEffect(() => {
    axios
      .get(`${URI}/ver/${props.match.params.id}`)
      .then((res) => {
        setProduct({
          nombre: res.data.nombre,
          referencia: res.data.referencia,
          precio: res.data.precio,
          peso: res.data.peso,
          categoria: res.data.categoria,
          stock:res.data.stock
        });
      })
      .catch((err) => console.log(err));
  },[]);

  const onSubmit = async (data, e) => {
    if (props.match.params.id) {
      const res = await axios.put(`${URI}/${props.match.params.id}`, data);
      console.log(res.data);
    } else {
      const res = await axios.post(URI, data);
      console.log(res.data);
    }
    e.target.reset();
    window.history.go(-1);
  };
  const inputChange = (e)=>{
    setProduct({
      ...product,
      [e.target.name]:e.target.value
    })
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-5 mx-auto">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="nombre producto"
                    name="nombre"
                    value={product.nombre}
                    onChange={inputChange}
                    ref={register({ required: true })}
                  />
                  {errors.nombre && (
                    <p className="text-danger">el nombre is requerido</p>
                  )}
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="referencia producto"
                    name="referencia"
                    onChange={inputChange}
                    value={product.referencia}
                    ref={register({ required: true })}
                  />
                  {errors.nombre && (
                    <p className="text-danger">la referencia es requerido</p>
                  )}
                </div>

                <div className="form-group">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="precio"
                    name="precio"
                    onChange={inputChange}
                    value={product.precio}
                    ref={register({ required: true })}
                  />
                  {errors.nombre && (
                    <p className="text-danger">el precio es requerido</p>
                  )}
                </div>

                <div className="form-group">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="peso por libra 1"
                    name="peso"
                    onChange={inputChange}
                    value={product.peso}
                    ref={register({ required: true })}
                  />
                  {errors.nombre && (
                    <p className="text-danger"> el peso es requerido</p>
                  )}
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="categoria"
                    name="categoria"
                    onChange={inputChange}
                    value={product.categoria}
                    ref={register({ required: true })}
                  />
                  {errors.nombre && (
                    <p className="text-danger">la categoria es requerida</p>
                  )}
                </div>

                <div className="form-group">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="cant producto bodega"
                    name="stock"
                    onChange={inputChange}
                    value={product.stock}
                    ref={register({ required: true })}
                  />
                  {errors.nombre && (
                    <p className="text-danger">cantidad requeridad</p>
                  )}
                </div>

                <button className="btn btn-primary btn-block">crear</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
