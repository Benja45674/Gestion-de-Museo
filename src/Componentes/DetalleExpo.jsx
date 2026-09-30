import { Modal } from '@mantine/core';
import { IconPalette, IconCalendar, IconUser } from '@tabler/icons-react';

export default function DetalleExpo({ exposicion, onClose }) {
  if (!exposicion) return null;

  return (
    <Modal
      opened={Boolean(exposicion)}
      onClose={onClose}
      title={
        <div className="flex flex-col">
          <span className="font-bold text-xl text-stone-900">
            Obras presentes en la exposición
          </span>
          <span className="text-sm font-serif text-stone-600">
            {exposicion.titulo}
          </span>
        </div>
      }
      centered
      radius="lg"
      size="xl"
    >
      <div className="flex flex-col gap-5 pt-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs uppercase font-medium text-stone-800  bg-[#ece8e1] px-3 py-1 rounded-2xl">
            Ubicación: <strong className="font-semibold">{exposicion.salaAsignada}</strong>
          </span>
          <span className="text-xs uppercase font-medium text-stone-800  bg-[#ece8e1] px-3 py-1 rounded-2xl">
            Fecha: <time className="font-semibold">{exposicion.periodoFechas}</time>
          </span>
        </div>

        <div className="flex flex-col gap-6">
          {exposicion.obras?.map((obra, index) => (
            <article
              key={index}
              className="bg-[#f6f4f0] rounded-2xl p-5 flex flex-col gap-4"
            >
              <h4 className="font-bold text-xl text-stone-900 border-none">
                {obra.titulo}
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                <figure className="w-full flex items-center justify-center">
                  <img
                    src={obra.enlaceImagen}
                    alt={obra.titulo}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto rounded-xl sm:max-h-60 sm:min-h-60 sm:w-auto sm:m-auto "
                  />
                </figure>

                <div className="flex flex-col gap-4">
                  <dl className="bg-[#ece8e1] p-4 rounded-xl divide-y divide-[#ded9cf]">
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
                    <h5 className="text-sm uppercase font-semibold text-stone-700 mb-2">
                      Acerca de la obra
                    </h5>
                    <p className="text-sm leading-relaxed text-stone-700">
                      {obra.descripcion}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Modal>
  );
}
