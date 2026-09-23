import { NavLink } from 'react-router';
import IconoLupa from '../Icon/IconoLupa';

export default function Header({ textoBusqueda, funcionCambiarBusqueda }) {
  return (
    <header className="p-4 flex flex-col md:flex-row justify-between items-center bg-stone-100 border-b-2 border-stone-300">
      <NavLink to="/" className="text-2xl">
        Museo de Bellas Artes
      </NavLink>

      <div className="relative w-full md:w-64">
        <input
          type="text"
          placeholder="Buscar obra o artista"
          value={textoBusqueda}
          onChange={(evento) => funcionCambiarBusqueda(evento.target.value)}
          className="w-full bg-white border border-stone-300 rounded-full px-3 py-1 outline-none"
        />
        <div className="absolute right-2.5 top-1/2 -translate-y-1/2 ">
          <IconoLupa />
        </div>
      </div>

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