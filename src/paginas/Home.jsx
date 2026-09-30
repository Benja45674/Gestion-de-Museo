import { useState } from 'react';
import FiltroCategorias from '../Componentes/FiltroCategorias';
import TarjetaObra from '../Componentes/TarjetaObra';
import TarjetaExpo from '../Componentes/TarjetaExpo';
import DetalleExpo from '../Componentes/DetalleExpo';
import EstadoLista from '../Componentes/EstadoLista';

export default function Home({
  obrasVisibles,
  cargando,
  categoriaSeleccionada,
  onCambiarCategoria,
  LIstaFavoritos,
  onAlternarFavorito,
  onVerDetalle,
  listaExposiciones,
}) {
  const [expoSeleccionada, setExpoSeleccionada] = useState(null);

  return (
    <div>
      <section className="flex flex-col gap-4">
        <h2 className="text-center text-2xl font-semibold text-gray-900">Colección Permanente</h2>

        <FiltroCategorias
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
        <h2 className="my-6 text-center text-2xl font-semibold text-gray-900">Exposiciones Vigentes</h2>
        <EstadoLista cargando={cargando} datos={listaExposiciones}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {listaExposiciones.map((expo) => (
              <TarjetaExpo
                key={expo.identificador}
                exposicion={expo}
                onVerDetalleExpo={setExpoSeleccionada}
              />
            ))}
          </div>
        </EstadoLista>
      </section>

      {expoSeleccionada && (
        <DetalleExpo
          exposicion={expoSeleccionada}
          onClose={() => setExpoSeleccionada(null)}
        />
      )}
    </div>
  );
}