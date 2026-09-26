import ListaObras from '../Datos/obras.json';
import ListaExposiciones from '../Datos/exposiciones.json';

const api = {
  get: (endpoint) =>
    new Promise((resolve) => {
      setTimeout(() => {
        if (endpoint === '/getobras') resolve(ListaObras);
        if (endpoint === '/getexposiciones') resolve(ListaExposiciones);
      }, 800);
    }),
};

export default api;
