export default function TarjetaExpo({ datosExpo }) {
  return (
    <div className="p-4 flex flex-col justify-between bg-white rounded-xl border border-stone-200">
      <h4 className="text-lg/6 font-semibold text-gray-900">{datosExpo.titulo}</h4>
      <p className="text-sm/6 text-gray-600 font-medium">Ubicación: {datosExpo.salaAsignada}</p>
      <p className="text-xs/6 text-gray-400 uppercase border px-2 inline-block self-start rounded-2xl">
        Fechas: {datosExpo.periodoFechas}
      </p>
    </div>
  );
}