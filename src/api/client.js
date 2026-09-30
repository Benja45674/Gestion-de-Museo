import ListaObras from '../Datos/obras.json';
import ListaExposiciones from '../Datos/exposiciones.json';
import DatosUsuario from '../Datos/usuario.json';

const api = {
  get: (endpoint) =>
    new Promise((resolve) => {
      setTimeout(() => {
        if (endpoint === '/getobras') resolve(ListaObras);
        if (endpoint === '/getexposiciones') resolve(ListaExposiciones);
        if (endpoint === '/getusuario') resolve(DatosUsuario);
      }, 800);
    }),
};

export default api;