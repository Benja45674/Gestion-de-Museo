import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router';
import LISTA_DE_OBRAS from './Datos/obras.json';
import LISTA_DE_TarjetaExpo from './Datos/exposiciones.json';
import Header from './Componentes/Header';
import Detalle from './Componentes/Detalle';
import Home from './paginas/Home';
import Favoritos from './paginas/Favoritos';
import logoGithub from './Icon/GitHub_Lockup_Black.svg';

// Promesas simuladas para ambas fuentes de datos
const obtenerObras = () =>
  new Promise((resolve) => setTimeout(() => resolve(LISTA_DE_OBRAS), 800));

const obtenerExposiciones = () =>
  new Promise((resolve) => setTimeout(() => resolve(LISTA_DE_TarjetaExpo), 800));

export default function App() {
  const [listaObras, setListaObras] = useState([]);
  const [listaExposiciones, setListaExposiciones] = useState([]); 
  const [cargando, setCargando] = useState(true);
  const [textoBusqueda, setTextoBusqueda] = useState('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas');
  const [listaIdentificadoresFavoritos, setListaIdentificadoresFavoritos] = useState([]);
  const [obraSeleccionadaParaDetalle, setObraSeleccionadaParaDetalle] = useState(null);

  useEffect(() => {
    Promise.all([obtenerObras(), obtenerExposiciones()]).then(([obras, expos]) => {
      setListaObras(obras);
      setListaExposiciones(expos);
      setCargando(false);
    });
  }, []);

  const alternarFavorito = (id) => {
    setListaIdentificadoresFavoritos((anterior) =>
      anterior.includes(id) ? anterior.filter((f) => f !== id) : [...anterior, id]
    );
  };

  const opcionesCategorias = ['Todas', 'Pintura', 'Escultura', 'Paisaje'];

  const BorrarFiltros = (texto) => {
    setTextoBusqueda(texto);
    setCategoriaSeleccionada('Todas');
  };
     
  const obrasPorBusqueda = listaObras.filter((obra) => {
    const texto = textoBusqueda.trim().toLowerCase();
    return (
      obra.titulo.toLowerCase().includes(texto)
    );
  });
      
  const obrasFiltradas = obrasPorBusqueda.filter((obra) => {
    return (
      categoriaSeleccionada === 'Todas' ||
      obra.categoria === categoriaSeleccionada
    );
  });

  const obrasFavoritas = obrasPorBusqueda.filter((obra) =>
    listaIdentificadoresFavoritos.includes(obra.identificador)
  );

  return (
    <div className="flex flex-col min-h-screen ">
      <Header
        textoBusqueda={textoBusqueda} funcionCambiarBusqueda={BorrarFiltros}
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
                funcionCambiarCategoria={setCategoriaSeleccionada}
                listaIdentificadoresFavoritos={listaIdentificadoresFavoritos}
                funcionAlternarFavorito={alternarFavorito}
                funcionVerDetalle={setObraSeleccionadaParaDetalle}
                listaTarjetaExpo={listaExposiciones}
              />
            }
          />
          <Route
            path="/favoritos"
            element={
              <Favoritos
                obrasFavoritas={obrasFavoritas}
                funcionAlternarFavorito={alternarFavorito}
                funcionVerDetalle={setObraSeleccionadaParaDetalle}
              />
            }
          />
        </Routes>
      </main>

      {obraSeleccionadaParaDetalle && (
        <Detalle
          obra={obraSeleccionadaParaDetalle}
          onClose={() => setObraSeleccionadaParaDetalle(null)}
        />
      )}

      <footer className="mt-16 border-t-2 border-stone-300 bg-stone-100  py-6 flex justify-center">
        <a
          href="https://github.com/Benja45674?tab=repositories"
          target="GitHub"
          rel="noopener noreferrer"
        >
          <img src={logoGithub} alt="GitHub" className="h-6 w-auto" />
        </a>
      </footer>
    </div>
  );
}