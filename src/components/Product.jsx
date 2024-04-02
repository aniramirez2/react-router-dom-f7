import { useState, useMemo, useEffect } from "react";

const ProductList = ({ products, numero1, numero2 }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = useMemo(() => {
    return products?.filter((product) =>
      product?.title?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, searchTerm]); 
  // Caso 1: Almacenar un arreglo de productos, en este caso del filtro

  /* const objeto = useMemo(()=> {
    return {id:1 , name: "ana"}
  }, [])
  // Caso 2: Almacenar un objeto

  const memoizedChildren = useMemo(() => {
    return items.map(item => <Child key={item.id} item={item} />);
  }, [items]); 
  // Caso 3: Almacenar un objeto jsx, en este caso un hijo que no se ve afectado por un re render del padre

  const result = useMemo(() => {
  return calculateResult(numero1, numero2);
}, [numero1, numero2]);
// Caso 4: Alamacenar el resultado de una operacion hecha con las props

  
  */
  
  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search products..."
      />
      <ul>
        {filteredProducts?.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
