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
        color="#cdc6b8"
        autoContrast

        className="!bg-[#ece8e1] border border-[#ded9cf]"
        withItemsBorders={false}
      />
    </div>
  );
}
