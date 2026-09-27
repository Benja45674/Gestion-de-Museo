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
      radius="lg"
      size="md"
    >
      <div className="flex flex-col gap-4">
        <figure>
          <img
            src={obra.enlaceImagen}
            alt={obra.titulo}
            loading="lazy"
            decoding="async"
            className="w-full h-auto rounded-lg object-contain"
          />
        </figure>

        <dl className="bg-stone-200/60 p-4 rounded-xl divide-y divide-stone-300">
          <div className="flex justify-between items-center py-2">
            <dt className="flex items-center gap-2 text-stone-700 text-sm">
              <IconUser size={18} /> Artista
            </dt>
            <dd className="font-semibold text-stone-900">{obra.artista}</dd>
          </div>

          <div className="flex justify-between items-center py-2">
            <dt className="flex items-center gap-2 text-stone-700 text-sm">
              <IconCalendar size={18} /> Año
            </dt>
            <dd className="font-semibold text-stone-900">{obra.añoCreacion}</dd>
          </div>

          <div className="flex justify-between items-center py-2">
            <dt className="flex items-center gap-2 text-stone-700 text-sm">
              <IconPalette size={18} /> Categoría
            </dt>
            <dd className="font-semibold text-stone-900">{obra.categoria}</dd>
          </div>
        </dl>

        <div>
          <h3 className="text-sm uppercase font-semibold text-stone-700 mb-2">
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
