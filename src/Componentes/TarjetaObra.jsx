import { IconBookmark, IconBookmarkFilled } from '@tabler/icons-react';

export default function TarjetaObra({ obra, estaEnFavoritos, onAlternarFavorito, onVerDetalle }) {
  return (
    <article className="p-4 flex flex-col justify-between bg-stone-100 rounded-xl border border-stone-300 shadow-lg ">

      <figure>
        <img
          src={obra.enlaceImagen}
          alt={`Obra ${obra.titulo} de ${obra.artista}`}
          loading="lazy"
          decoding="async"
          className="max-h-52 min-h-52 w-auto m-auto rounded-xl"
        />
      </figure>

      <div className="mt-3">
        <h3 className="text-lg/6 font-semibold text-gray-900">{obra.titulo}</h3>
        <p className="text-sm/6 text-gray-600 font-medium">{obra.artista}</p>
        <span className="text-xs/6 text-gray-400 uppercase border px-2 inline-block rounded-2xl">{obra.categoria}</span>
      </div>


      <div className="flex justify-between items-center mt-4 ">
        <button onClick={() => onVerDetalle(obra)}
          className="text-stone-400 hover:text-stone-900 transition-colors"
        >
          Ver detalle
        </button>

        <button
          onClick={() => onAlternarFavorito(obra.identificador)}
          className="transition-transform hover:scale-110"
          aria-label={estaEnFavoritos ? "Quitar de favoritos" : "Guardar en favoritos"}
        >
          {estaEnFavoritos ? (
            <IconBookmarkFilled size={24} className="text-black" />
          ) : (
            <IconBookmark size={24} stroke={1.8} className="text-black" />
          )}
        </button>
      </div>
    </article>
  );
}