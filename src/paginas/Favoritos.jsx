import TarjetaObra from '../Componentes/TarjetaObra';
import EstadoLista from '../Componentes/EstadoLista';

export default function Favoritos({
  obrasFavoritas,
  cargando,
  onAlternarFavorito,
  onVerDetalle,
}) {
  return (
    <section>
      <h2 className="text-center text-xl font-semibold text-gray-900 mb-3 ">Mis Favoritos</h2>

      <EstadoLista cargando={cargando} datos={obrasFavoritas}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {obrasFavoritas.map((obra) => (
            <TarjetaObra
              key={obra.identificador}
              obra={obra}
              estaEnFavoritos={true}
              onAlternarFavorito={onAlternarFavorito}
              onVerDetalle={onVerDetalle}
            />
          ))}
        </div>
      </EstadoLista>
    </section>
  );
}