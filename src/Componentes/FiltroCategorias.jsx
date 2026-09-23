export default function FiltroCategorias({ listaCategorias, categoriaSeleccionada, funcionCambiarCategoria }) { // Recibe las categorías disponibles y su función
  return (
    <div className="flex flex-wrap gap-2 my-4 justify-center"> {/* Fila de botones centrados */}
      {listaCategorias.map((nombreCategoria) => ( // Recorre cada nombre de categoría para convertirlo en botón
        <button
          key={nombreCategoria} // Identificador requerido por React para listas
          onClick={() => funcionCambiarCategoria(nombreCategoria)} // Asigna la categoría tocada como la activa
          className={`px-2 py-1 rounded-full border border-stone-400 ${categoriaSeleccionada === nombreCategoria ? 'bg-stone-300' : ''}`}
        >
          {nombreCategoria} {/* Imprime el nombre del botón */}
        </button>
      ))}
    </div>
  );
}