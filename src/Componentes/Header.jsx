import { NavLink } from 'react-router';
import { TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

export default function Header({ textoBusqueda, onCambiarBusqueda, onLimpiarBusqueda }) {
  return (
    <header className="p-6 flex flex-col md:flex-row justify-between items-center bg-stone-100 border-b-2 border-stone-300/80 shadow-sm gap-4">

      <h1 className="font-serif text-3xl">
        <NavLink to="/" onClick={onLimpiarBusqueda} >Museo de Bellas Artes</NavLink>
      </h1>

      <div className="w-full md:w-64">
        <TextInput
          id="busqueda"
          name="busqueda"
          placeholder="Buscar obra o artista"
          value={textoBusqueda}
          onChange={(evento) => onCambiarBusqueda(evento.currentTarget.value)}
          rightSection={<IconSearch size={18} stroke={1.5} className="text-stone-500" />}
          radius="xl"
        />
      </div>

      <nav className="flex gap-2 text-stone-500">
        <NavLink
          to="/"
          onClick={onLimpiarBusqueda}
          end
          className={({ isActive }) => `px-3 py-1 transition-colors ${isActive ? 'text-black' : 'hover:text-black'}`}
        >
          Inicio
        </NavLink>
        <NavLink
          to="/favoritos"
          onClick={onLimpiarBusqueda}
          className={({ isActive }) => `px-3 py-1 transition-colors ${isActive ? 'text-black' : 'hover:text-black'}`}
        >
          Mis favoritos
        </NavLink>
      </nav>
    </header>
  );
}