import { useLocation, useParams } from "react-router-dom";

const PaginaId = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const valorParametro = searchParams.get("paginaId");
  const { paginaId } = useParams();
  return <div className="xs:w-full">PaginaId el id de la pagina es {paginaId}</div>;
};

export default PaginaId;
