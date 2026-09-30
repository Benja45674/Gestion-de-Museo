import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { TextInput, PasswordInput, Modal, Menu, Button, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSearch, IconChevronDown, IconUser, IconBookmark, IconLogout } from '@tabler/icons-react';

export default function Header({ textoBusqueda, onCambiarBusqueda, onLimpiarBusqueda, usuario, onLogin, onLogout }) {
  const navigate = useNavigate();
  const [modalAbierto, { open: abrirModal, close: cerrarModal }] = useDisclosure(false);

  const [email, setEmail] = useState('Benjaschick@gmail.com');
  const [password, setPassword] = useState('123456');

  const manejarSubmitLogin = (e) => {
    e.preventDefault();
    onLogin({ email });
    cerrarModal();
  };

  const navegarA = (ruta) => {
    onLimpiarBusqueda();
    navigate(ruta);
  };

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

      <nav className="flex gap-2 text-stone-500 justify-self-end items-center">
        {!usuario ? (
          <button
            onClick={abrirModal}
            className="px-3 py-1 text-stone-500 hover:text-black transition-colors font-medium cursor-pointer"
          >
            Iniciar sesión
          </button>
        ) : (
          <Menu shadow="md" width={180} position="bottom-end">
            <Menu.Target>
              <button className="px-3 py-1 text-stone-500 hover:text-black transition-colors font-medium flex items-center gap-1 cursor-pointer">
                Mi cuenta
                <IconChevronDown size={15} stroke={1.5} />
              </button>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item leftSection={<IconUser size={15} />} onClick={() => navegarA('/cuenta')}>
                Mi perfil
              </Menu.Item>
              <Menu.Item leftSection={<IconBookmark size={15} />} onClick={() => navegarA('/favoritos')}>
                Favoritos
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item color="red" leftSection={<IconLogout size={15} />} onClick={() => { onLogout(); navegarA('/'); }}>
                Cerrar sesión
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        )}
      </nav>

      <Modal opened={modalAbierto} onClose={cerrarModal} title="Iniciar sesión" centered radius="md">
        <form onSubmit={manejarSubmitLogin}>
          <Stack gap="sm">
            <TextInput
              label="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              required
            />
            <PasswordInput
              label="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
              required
            />
            <Button type="submit" fullWidth color="dark" mt="md" radius="md">
              Ingresar
            </Button>
          </Stack>
        </form>
      </Modal>
    </header>
  );
}