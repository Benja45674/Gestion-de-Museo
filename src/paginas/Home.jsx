import FiltroCategorias from '../Componentes/FiltroCategorias';
import TarjetaObra from '../Componentes/TarjetaObra';
import TarjetaExpo from '../Componentes/TarjetaExpo';
import EstadoLista from '../Componentes/EstadoLista';

export default function Home({
  obrasVisibles,
  cargando,
  opcionesCategorias,
  categoriaSeleccionada,
  onCambiarCategoria,
  LIstaFavoritos,
  onAlternarFavorito,
  onVerDetalle,
  listaExposiciones,
}) {
  return (
    <div>

      <section>
        <h2 className="text-center text-xl font-semibold text-gray-900">Obras</h2>

        <FiltroCategorias
          listaCategorias={opcionesCategorias}
          categoriaSeleccionada={categoriaSeleccionada}
          onCambiarCategoria={onCambiarCategoria}
        />

        <EstadoLista cargando={cargando} datos={obrasVisibles}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {obrasVisibles.map((obra) => (
              <TarjetaObra
                key={obra.identificador}
                obra={obra}
                estaEnFavoritos={LIstaFavoritos.includes(obra.identificador)}
                onAlternarFavorito={onAlternarFavorito}
                onVerDetalle={onVerDetalle}
              />
            ))}
          </div>
        </EstadoLista>
      </section>
      

      <section>
        <h2 className="my-6 text-center text-xl font-semibold text-gray-900">Exposiciones Vigentes</h2>
        <EstadoLista cargando={cargando} datos={listaExposiciones}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {listaExposiciones.map((expo) => (
              <TarjetaExpo
                key={expo.identificador}
                exposicion={expo}
              />
            ))}
          </div>
        </EstadoLista>
      </section>

    </div>
  );
}