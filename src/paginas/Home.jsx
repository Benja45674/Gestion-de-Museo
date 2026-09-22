import FiltroCategorias from '../Componentes/FiltroCategorias';
import TarjetaObra from '../Componentes/TarjetaObra';
import TarjetaExpo from '../Componentes/TarjetaExpo';

export default function Home({
  obrasVisibles,
  cargando,
  opcionesCategorias,
  categoriaSeleccionada,
  funcionCambiarCategoria,
  listaIdentificadoresFavoritos,
  funcionAlternarFavorito,
  funcionVerDetalle,
  listaTarjetaExpo,
}) {
  return (
    <div>
      <h2 className='text-center text-xl font-semibold text-gray-900"'>Obras</h2>

      <FiltroCategorias
        listaCategorias={opcionesCategorias}
        categoriaSeleccionada={categoriaSeleccionada}
        funcionCambiarCategoria={funcionCambiarCategoria}
      />

      {cargando ? (
        <p className="text-center py-8">Cargando obras...</p>
      ) : obrasVisibles.length === 0 ? (
        <p className="text-center py-8">No se encontraron obras.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {obrasVisibles.map((obra) => (
            <TarjetaObra
              key={obra.identificador}
              datosObra={obra}
              estaEnFavoritos={listaIdentificadoresFavoritos.includes(obra.identificador)}
              funcionAlternarFavorito={funcionAlternarFavorito}
              funcionVerDetalle={funcionVerDetalle}
            />
          ))}
        </div>
      )}

      <section className="mt-12 pt-6">
        <h2 className="mb-4 text-center text-xl font-semibold text-gray-900">Exposiciones Vigentes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {listaTarjetaExpo.map((expo) => (
            <TarjetaExpo
              key={expo.identificador}
              datosExpo={expo}
            />
          ))}
        </div>
      </section>
    </div>
  );
}