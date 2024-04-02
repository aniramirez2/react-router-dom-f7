import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductList from "../components/Product";

const Pagina1 = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [actualizarData, setActualizarData] = useState(false);

  const fetchData = useCallback(async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setData(data);
  }, []); // Dependencias vacías para que se ejecute una vez

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    console.log("data actualizada", data);
  }, [data]);

  const handleClick = () => {
    navigate("/Pagina2");
  };
  return (
    <>
      <div>Pagina1</div>
      <ul>
        <li>cualuqier cosa</li>
      </ul>
      <button type="button" onClick={() => setActualizarData(!actualizarData)}>
        toggle actualizar data
      </button>
      <h1>Lista de productos</h1>
      <ProductList products={data} />
    </>
  );
};

export default Pagina1;
