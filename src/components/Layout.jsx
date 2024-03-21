import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-lime-600 p-10">
      <div>
        <NavLink to="/Pagina1"> Ir a la pagina 1 </NavLink>
        <NavLink to="/Pagina2"> Ir a la pagina 2 </NavLink>
        <NavLink to="/Pagina1/12">Ir a pagina ID</NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
