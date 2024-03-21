import { useParams } from "react-router-dom";

const PaginaId = () => {
  const { paginaId } = useParams();
  return <div>PaginaId el id de la pagina es {paginaId}</div>;
};

export default PaginaId;
