import { useEffect, useRef } from 'react';

export default function Detalle({ obra, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      className="p-6 max-w-md w-full rounded-xl bg-white m-auto"
    >
      <img
        src={obra.enlaceImagen}
        alt={obra.titulo}
        className="w-full mb-4 rounded-xl"
      />
      <h2 className="text-xl/6 font-bold">{obra.titulo}</h2>
      <p className="text-sm/6 text-gray-600">{obra.artista} ({obra.añoCreacion})</p>
      <p className="text-xs/6 text-gray-400 uppercase border px-2 inline-block rounded-2xl">{obra.categoria}</p>
      <p className="text-sm/6 text-gray-700">{obra.descripcion}</p>

      <button
        onClick={onClose}
        className="mt-4 py-2 w-full bg-stone-900 text-white rounded-lg"
      >
        Cerrar
      </button>
    </dialog>
  );
}
