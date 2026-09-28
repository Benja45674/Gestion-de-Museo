import { NavLink } from 'react-router';
import { TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

export default function Header({ textoBusqueda, onCambiarBusqueda, onLimpiarBusqueda }) {
  return (
    <header className="p-6 flex flex-col sm:grid sm:grid-cols-3 items-center bg-[#ece8e1] border-b-2 border-[#ded9cf] shadow-sm">

      <h1 className="font-serif text-3xl justify-self-start">
        <NavLink to="/" onClick={onLimpiarBusqueda}>Museo de Bellas Artes</NavLink>
      </h1>

      <div className="w-full sm:w-64 justify-self-center">
        <TextInput
          id="busqueda"
          name="busqueda"
          placeholder="Buscar obra o artista"
          value={textoBusqueda}
          onChange={(evento) => onCambiarBusqueda(evento.currentTarget.value)}
          rightSection={<IconSearch size={18} stroke={1.5} className="text-stone-500" />}
          radius="xl"
          styles={{
            input: {
              backgroundColor: '#ffffff',
              borderColor: '#ded9cf',
            },
          }}
        />
      </div>

      <nav className="flex gap-2 text-stone-700 justify-self-end">
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