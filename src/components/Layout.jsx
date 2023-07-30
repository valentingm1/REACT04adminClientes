import { Outlet, Link, useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();

  return (
    <div className="md:flex md:min-h-screen">
      <aside className="md:w-1/4 bg-blue-600 px-5 py-10">
        <h2 className="text-4xl font-black text-center text-white">
          Customer Relationship Manager
        </h2>

        <nav>
          <Link
            className={`${
              location.pathname === "/" ? "text-blue-300 font-bold" : "text-white"
            } text-2xl block mt-2 hover:text-blue-300`}
            to="/"
          >
            Clientes
          </Link>
          <Link
            className={`${
              location.pathname === "/clientes/nuevo"
                ? "text-blue-300 font-bold"
                : "text-white"
            } text-2xl block mt-2 hover:text-blue-300`}
            to="/clientes/nuevo"
          >
            Nuevo Cliente
          </Link>
        </nav>
      </aside>
      <main className="md: w-3/4 p-10 md:h-screen overflow-scroll">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
