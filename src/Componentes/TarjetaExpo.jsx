export default function TarjetaExpo({ exposicion, onVerDetalleExpo }) {
  return (
    <article className="flex flex-col sm:flex-row bg-white rounded-xl border border-[#ded9cf] shadow-lg overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:border-stone-400 transition-all duration-300">
      <img
        src={exposicion.imagen}
        alt={exposicion.titulo}
        className="w-full sm:w-1/3 h-auto sm:object-cover"
      />

      <div className="p-4 flex flex-col justify-between gap-4 flex-1">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg/6 font-semibold text-gray-900">{exposicion.titulo}</h3>
          <p className="text-sm/6 text-gray-700 font-medium">Ubicación: {exposicion.salaAsignada}</p>
          {exposicion.descripcion && (
            <p className="text-sm text-gray-600">{exposicion.descripcion}</p>
          )}
        </div>
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <p className="text-sm text-gray-800 py-0.5 inline-flex items-center uppercase border border-[#ded9cf] bg-[#ece8e1] px-2 self-start gap-1 rounded-2xl">
            Fecha: <time>{exposicion.periodoFechas}</time>
          </p>
          <button
            type="button"
            onClick={() => onVerDetalleExpo?.(exposicion)}
            className="text-xs font-semibold text-stone-700 hover:text-black underline underline-offset-4 cursor-pointer transition-colors"
          >
            Ver Detalles
          </button>
        </div>
      </div>
    </article>
  );
}