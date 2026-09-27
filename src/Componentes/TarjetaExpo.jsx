export default function TarjetaExpo({ exposicion }) {
  return (
    <article className="flex flex-col sm:flex-row bg-stone-50 rounded-xl border border-stone-300 shadow-lg overflow-hidden">
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
        <p className="text-sm text-gray-800 py-0.5 inline-flex items-center uppercase border border-stone-400 bg-stone-200/60 px-2 self-start gap-1 rounded-2xl">
          Fecha: <time>{exposicion.periodoFechas}</time>
        </p>
      </div>
    </article>
  );
}