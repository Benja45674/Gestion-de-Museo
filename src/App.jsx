import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router';
import { notifications } from '@mantine/notifications';
import { IconBookmark } from '@tabler/icons-react';
import api from './api/client.js';
import Header from './Componentes/Header';
import Detalle from './Componentes/Detalle';
import Home from './paginas/Home';
import Favoritos from './paginas/Favoritos';
import Cuenta from './paginas/Cuenta';
import Footer from './Componentes/Footer';

export default function App() {
  const [obras, setObras] = useState([]);
  const [exposiciones, setExposiciones] = useState([]);
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [textoBusqueda, setTextoBusqueda] = useState('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas');
  const [LIstaFavoritos, setLIstaFavoritos] = useState([]);
  const [obraSeleccionada, setObraSeleccionada] = useState(null);

  useEffect(() => {
    Promise.all([
      api.get('/getobras'),
      api.get('/getexposiciones'),
    ]).then(([obrasRecibidas, exposRecibidas]) => {
      setObras(obrasRecibidas);
      setExposiciones(exposRecibidas);
      setCargando(false);
    });
  }, []);

  const manejarLogin = () => {
    api.get('/getusuario').then((usuarioRecibido) => {
      setUsuario(usuarioRecibido);
      setLIstaFavoritos(usuarioRecibido?.favoritos || []);
    });
  };

  const manejarLogout = () => {
    setUsuario(null);
    setLIstaFavoritos([]);
  };

  const alternarFavorito = (id) => {
    if (!usuario) {
      notifications.show({
        title: 'Inicio de sesión requerido',
        message: 'Debes iniciar sesión para agregar obras a tus favoritos.',
        color: 'red',
        icon: <IconBookmark size={16} />,
        autoClose: 3500,
      });
      return;
    }

    setLIstaFavoritos((anterior) =>
      anterior.includes(id) ? anterior.filter((f) => f !== id) : [...anterior, id]
    );
  };

  const manejarBusqueda = (texto) => {
    setTextoBusqueda(texto);
    setCategoriaSeleccionada('Todas');
  };

  const obrasPorBusqueda = obras.filter((obra) => {
    const texto = textoBusqueda.trim().toLowerCase();
    return (
      obra.titulo.toLowerCase().includes(texto) ||
      obra.artista.toLowerCase().includes(texto)
    );
  });

  const obrasFiltradas = obrasPorBusqueda.filter((obra) => {
    return (
      categoriaSeleccionada === 'Todas' ||
      obra.categoria === categoriaSeleccionada
    );
  });

  const obrasFavoritas = obrasPorBusqueda.filter((obra) =>
    LIstaFavoritos.includes(obra.identificador)
  );

  return (
    <div className="flex flex-col min-h-screen bg-[#f6f4f0]">
      <Header
        textoBusqueda={textoBusqueda}
        onCambiarBusqueda={manejarBusqueda}
        onLimpiarBusqueda={() => setTextoBusqueda('')}
        usuario={usuario}
        onLogin={manejarLogin}
        onLogout={manejarLogout}
      />
      <main className="px-4 py-6 max-w-5xl mx-auto w-full flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                obrasVisibles={obrasFiltradas}
                cargando={cargando}
                categoriaSeleccionada={categoriaSeleccionada}
                onCambiarCategoria={setCategoriaSeleccionada}
                LIstaFavoritos={LIstaFavoritos}
                onAlternarFavorito={alternarFavorito}
                onVerDetalle={setObraSeleccionada}
                listaExposiciones={exposiciones}
              />
            }
          />
          <Route
            path="/favoritos"
            element={
              <Favoritos
                obrasFavoritas={obrasFavoritas}
                cargando={cargando}
                onAlternarFavorito={alternarFavorito}
                onVerDetalle={setObraSeleccionada}
              />
            }
          />
          <Route
            path="/cuenta"
            element={
              <Cuenta
                usuario={usuario}
                cargando={cargando}
              />
            }
          />
        </Routes>
      </main>

      {obraSeleccionada && (
        <Detalle
          obra={obraSeleccionada}
          onClose={() => setObraSeleccionada(null)}
        />
      )}

      <Footer />
    </div>
  );
}