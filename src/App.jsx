import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router';
import api from './api/client.js';
import Header from './Componentes/Header';
import Detalle from './Componentes/Detalle';
import Home from './paginas/Home';
import Favoritos from './paginas/Favoritos';
import logoGithub from './Icon/GitHub_Lockup_Black.svg';

export default function App() {
  const [obras, setObras] = useState([]);
  const [exposiciones, setExposiciones] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [textoBusqueda, setTextoBusqueda] = useState('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas');
  const [LIstaFavoritos, setLIstaFavoritos] = useState([]);
  const [obraSeleccionada, setObraSeleccionada] = useState(null);

  useEffect(() => {
    Promise.all([
      api.get('/getobras'),
      api.get('/getexposiciones')
    ]).then(([obrasRecibidas, exposRecibidas]) => {
      setObras(obrasRecibidas);
      setExposiciones(exposRecibidas);
      setCargando(false);
    });
  }, []);

  const alternarFavorito = (id) => {
    setLIstaFavoritos((anterior) =>
      anterior.includes(id) ? anterior.filter((f) => f !== id) : [...anterior, id]
    );
  };

  const opcionesCategorias = ['Todas', 'Pintura', 'Escultura', 'Paisaje'];

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
    <div className="flex flex-col min-h-screen ">
      <Header
        textoBusqueda={textoBusqueda}
        onCambiarBusqueda={manejarBusqueda}
      />
      <main className="p-4 max-w-5xl mx-auto w-full flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                obrasVisibles={obrasFiltradas}
                cargando={cargando}
                opcionesCategorias={opcionesCategorias}
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
        </Routes>
      </main>

      {obraSeleccionada && (
        <Detalle
          obra={obraSeleccionada}
          onClose={() => setObraSeleccionada(null)}
        />
      )}

      <footer className="mt-16 border-t-2 border-stone-300 bg-stone-100  py-6 flex justify-center">
        <a
          href="https://github.com/Benja45674?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logoGithub} alt="GitHub" className="h-6 w-auto" />
        </a>
      </footer>
    </div>
  );
}