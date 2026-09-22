import { NavLink } from 'react-router';

export default function Header({ textoBusqueda, funcionCambiarBusqueda }) {
  return (
    <header className="p-4 flex flex-col md:flex-row justify-between items-center bg-stone-100 border-b-2 border-stone-200">
      <NavLink to="/" className="text-xl underline decoration-1 underline-offset-4 ">
        Museo de Bellas Artes
      </NavLink>

      <input
        type="text"
        placeholder="Buscar obra o artista"
        value={textoBusqueda}
        onChange={(evento) => funcionCambiarBusqueda(evento.target.value)}
        className="p-2 w-full md:w-64 border-b-2 border-stone-400 text-center text-stone-500 hover:border-stone-700 hover:text-stone-700 transition-colors outline-none"
      />

      <div className="flex gap-2 text-stone-500">
        <NavLink
          to="/"
          end
          className={({ isActive }) => `px-3 py-1 transition-colors ${isActive ? 'text-black' : 'hover:text-black'}`}
        >
          Obras
        </NavLink>
        <NavLink
          to="/favoritos"
          className={({ isActive }) => `px-3 py-1 transition-colors ${isActive ? 'text-black' : 'hover:text-black'}`}
        >
          Mis favoritos
        </NavLink>
      </div>
    </header>
  );
}