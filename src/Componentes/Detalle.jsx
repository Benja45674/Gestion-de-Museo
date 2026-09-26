import { Modal} from '@mantine/core';
import { IconPalette, IconCalendar, IconUser } from '@tabler/icons-react';

export default function Detalle({ obra, onClose }) {
  if (!obra) return null;

  return (
    <Modal
      opened={Boolean(obra)}
      onClose={onClose}
      title={<span className="font-bold text-xl">{obra.titulo}</span>}
      centered
      radius="md"
    >
      <div className="flex flex-col gap-4">
        <figure>
          <img
            src={obra.enlaceImagen}
            alt={`Obra ${obra.titulo} de ${obra.artista}`}
            loading="lazy"
            decoding="async"
            className="max-h-72 w-auto mx-auto rounded-xl"
          />
        </figure>

        <dl className="bg-stone-100 p-3 rounded-xl divide-y divide-stone-200">
          <div className="flex justify-between items-center py-1">
            <dt className="flex items-center gap-2 text-stone-500 text-sm">
              <IconUser size={18} /> Artista
            </dt>
            <dd className="font-semibold text-stone-900">{obra.artista}</dd>
          </div>

          <div className="flex justify-between items-center py-1">
            <dt className="flex items-center gap-2 text-stone-500 text-sm">
              <IconCalendar size={18} /> Año
            </dt>
            <dd className="font-semibold text-stone-900">{obra.añoCreacion}</dd>
          </div>

          <div className="flex justify-between items-center py-1">
            <dt className="flex items-center gap-2 text-stone-500 text-sm">
              <IconPalette size={18} /> Categoría
            </dt>
            <dd className="font-semibold text-stone-900">{obra.categoria}</dd>
          </div>
        </dl>

        <div>
          <h3 className="text-xs uppercase font-semibold text-stone-400 mb-1">
            Acerca de la obra
          </h3>
          <p className="text-sm leading-relaxed text-stone-700">
            {obra.descripcion}
          </p>
        </div>
      </div>
    </Modal>
  );
}
