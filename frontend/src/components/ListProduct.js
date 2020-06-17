import React, { useState, useEffect } from "react";
import axios from "axios";
import RenderRow from "./RenderRow";

export default function ListProduct() {
  const URI = "http://localhost:8000/api/productos";

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    axios
      .get(URI)
      .then((res) => {
        setProductos(res.data);
        console.log(res.data)
      })
      .catch((err) => console.log(err));
  };

  const deleteProduct = async (id) => {
    if (window.confirm("esta seguro que desea eliminar el producto")) {
      const res = await axios.delete(`${URI}/${id}`);
      getProduct();
      console.log(res.data);
    }
  };

  const venderProduct =async (id)=>{
    await axios.get(`${URI}/${id}`);

    getProduct();
  }

  return (
    <div className="container">
      <div className="row">
        {productos.map((product) => {
          return (
            <RenderRow
              product={product}
              key={product.id}
              deleteProduct={deleteProduct}
              venderProduct={venderProduct}
            />
          );
        })}
      </div>
    </div>
  );
}
