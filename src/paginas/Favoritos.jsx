import TarjetaObra from '../Componentes/TarjetaObra';

export default function Favoritos({
  obrasFavoritas,
  funcionAlternarFavorito,
  funcionVerDetalle,
}) {
  return (
    <div>
      <h2 className='text-center text-xl font-semibold text-gray-900 '> Mis Favoritos</h2>

      {obrasFavoritas.length === 0 ? (
        <p className="text-center py-8">No tienes obras agregadas a favoritos.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {obrasFavoritas.map((obra) => (
            <TarjetaObra
              key={obra.identificador}
              datosObra={obra}
              estaEnFavoritos={true}
              funcionAlternarFavorito={funcionAlternarFavorito}
              funcionVerDetalle={funcionVerDetalle}
            />
          ))}
        </div>
      )}
    </div>
  );
}