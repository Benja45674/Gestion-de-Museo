import { NavLink } from 'react-router';
import { TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

export default function Header({ textoBusqueda, onCambiarBusqueda }) {
  return (
    <header className="p-4 flex flex-col md:flex-row justify-between items-center bg-stone-100 border-b-2 border-stone-300 gap-4">

      <h1 className="text-2xl font-bold">
        <NavLink to="/">Museo de Bellas Artes</NavLink>
      </h1>

      <search role="search" className="w-full md:w-64">
        <TextInput
          id="busqueda"
          name="busqueda"
          placeholder="Buscar obra o artista"
          value={textoBusqueda}
          onChange={(evento) => onCambiarBusqueda(evento.currentTarget.value)}
          rightSection={<IconSearch size={18} stroke={1.5} className="text-stone-500" />}
          radius="xl"
        />
      </search>

      <nav className="flex gap-2 text-stone-500">
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
      </nav>
    </header>
  );
}