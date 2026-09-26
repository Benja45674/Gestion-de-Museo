export default function TarjetaExpo({ exposicion }) {
  return (
    <article className="p-4 flex flex-col justify-between bg-stone-100 rounded-xl border border-stone-300 shadow-xl">
      <h3 className="text-lg/6 font-semibold text-gray-900">{exposicion.titulo}</h3>
      <p className="text-sm/6 text-gray-600 font-medium">Ubicación: {exposicion.salaAsignada}</p>
      <p className="text-xs/6 text-gray-400 uppercase border px-2 inline-block self-start rounded-2xl">
        Fechas: <time>{exposicion.periodoFechas}</time>
      </p>
    </article>
  );
}