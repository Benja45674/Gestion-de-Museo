import IconoFavorito from "../Icon/IconoFavorito";

export default function TarjetaObra({ datosObra, estaEnFavoritos, funcionAlternarFavorito, funcionVerDetalle }) {
  return (
    <div className="p-4 flex flex-col justify-between bg-stone-100 rounded-xl border border-stone-300 shadow-lg ">
      <div>
        <img
          src={datosObra.enlaceImagen}
          alt={datosObra.titulo}
          className="w-full h-54 object-contain mb-2"
        />
        <h2 className="text-lg/6 font-semibold text-gray-900">{datosObra.titulo}</h2>
        <p className="text-sm/6 text-gray-600 font-medium">{datosObra.artista}</p>
        <p className="text-xs/6 text-gray-400 uppercase border px-2 inline-block rounded-2xl ">{datosObra.categoria}</p>
      </div>

      <div className="flex justify-between items-center mt-4 ">
        <button onClick={() => funcionVerDetalle(datosObra)} 
        className="text-stone-400 hover:text-stone-900 transition-colors"
        >
          Ver detalle
        </button>

        <button
          type="button"
          onClick={() => funcionAlternarFavorito(datosObra.identificador)}
          className="transition-transform"
        >
          <IconoFavorito activo={estaEnFavoritos} />
        </button>
      </div>
    </div>
  );
}