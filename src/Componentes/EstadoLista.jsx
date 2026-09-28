import { Loader } from '@mantine/core';

export default function EstadoLista({ cargando, datos, children }) {
  if (cargando) {
    return (
      <div className="flex justify-center py-8">
        <Loader color="#2c2825" size="md" type='dots' />
      </div>
    );
  }

  if (!datos || datos.length === 0) {
    return <p className="text-center py-8">No se encontraron resultados.</p>;
  }

  return children;
}
