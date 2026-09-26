import { SegmentedControl } from '@mantine/core';

export default function FiltroCategorias({ listaCategorias, categoriaSeleccionada, onCambiarCategoria }) {
  return (
    <div className="flex justify-center my-4 overflow-x-auto px-2">
      <SegmentedControl
        data={listaCategorias}
        value={categoriaSeleccionada}
        onChange={onCambiarCategoria}
        radius="xl"
        color="dark"
        className="bg-stone-300/70 border border-stone-400"
        withItemsBorders={false}
      />
    </div>
  );
}