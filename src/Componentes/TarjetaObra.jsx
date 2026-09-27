import { IconBookmark, IconBookmarkFilled } from '@tabler/icons-react';

export default function TarjetaObra({ obra, estaEnFavoritos, onAlternarFavorito, onVerDetalle }) {
  return (
    <article className="flex flex-col justify-between bg-stone-50 rounded-2xl border border-stone-300 shadow-lg overflow-hidden sm:p-3">
      <figure className="w-full">
        <img
          src={obra.enlaceImagen}
          alt={obra.titulo}
          loading="lazy"
          decoding="async"
          className="w-full h-auto sm:rounded-xl sm:max-h-60 sm:min-h-60 sm:w-auto sm:m-auto"
        />
      </figure>

      <div className="p-4 sm:p-0 flex flex-col justify-between flex-1">
        <div className="mt-1 sm:mt-3">
          <h3 className="text-lg/6 font-semibold text-gray-900">{obra.titulo}</h3>
          <p className="text-sm/6 text-gray-700 font-medium">{obra.artista}</p>
          <span className="my-2 py-0.5 inline-flex items-center text-sm uppercase border border-stone-400/80 bg-stone-200/60 text-stone-800 px-2 rounded-full">
            {obra.categoria}
          </span>
        </div>

        <div className="flex justify-between items-center mt-4">
          <button
            onClick={() => onVerDetalle(obra)}
            className="text-stone-500 hover:text-stone-900 transition-colors underline"
          >
            Ver detalle
          </button>

          <button
            onClick={() => onAlternarFavorito(obra.identificador)}
            className="transition-transform hover:scale-110"
          >
            {estaEnFavoritos ? (
              <IconBookmarkFilled size={24} className="text-black" />
            ) : (
              <IconBookmark size={24} stroke={1.8} className="text-black" />
            )}
          </button>
        </div>
      </div>
    </article>
  );
}