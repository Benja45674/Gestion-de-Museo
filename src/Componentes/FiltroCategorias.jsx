import { SegmentedControl } from '@mantine/core';

const CATEGORIAS = ['Todas', 'Pintura', 'Escultura', 'Paisaje'];

export default function FiltroCategorias({ categoriaSeleccionada,
  onCambiarCategoria }) {
  return (
    <div className="flex justify-center overflow-x-auto px-2">
      <SegmentedControl
        data={CATEGORIAS}
        value={categoriaSeleccionada}
        onChange={onCambiarCategoria}
        radius="xl"
        color="dark"
        className="!bg-stone-100 border border-stone-400"
        withItemsBorders={false}
      />
    </div>
  );
}
