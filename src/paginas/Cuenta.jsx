import EstadoLista from '../Componentes/EstadoLista';

export default function Cuenta({ usuario, cargando }) {
  return (
    <EstadoLista cargando={cargando} datos={usuario}>
      <article className="max-w-xl mx-auto bg-white rounded-2xl border border-[#ded9cf] shadow-md p-6 sm:p-8">
        <h2 className="text-center text-2xl font-serif font-bold text-gray-900 border-b border-[#ded9cf] pb-4">
          Mi Cuenta
        </h2>

        <div className="divide-y divide-[#ded9cf] mt-2">
          <div className="py-3.5">
            <span className="text-xs uppercase text-gray-500 font-semibold tracking-wide">Nombre</span>
            <p className="text-base font-medium text-gray-900 mt-0.5">{usuario?.nombre}</p>
          </div>

          <div className="py-3.5">
            <span className="text-xs uppercase text-gray-500 font-semibold tracking-wide">Nombre de usuario</span>
            <p className="text-base font-medium text-gray-900 mt-0.5">@{usuario?.nombreUsuario}</p>
          </div>

          <div className="py-3.5">
            <span className="text-xs uppercase text-gray-500 font-semibold tracking-wide">Correo electrónico</span>
            <p className="text-base font-medium text-gray-900 mt-0.5">{usuario?.email}</p>
          </div>

          <div className="py-3.5">
            <span className="text-xs uppercase text-gray-500 font-semibold tracking-wide">Miembro desde</span>
            <p className="text-base font-medium text-gray-900 mt-0.5">{usuario?.fechaRegistro}</p>
          </div>
        </div>
      </article>
    </EstadoLista>
  );
}
