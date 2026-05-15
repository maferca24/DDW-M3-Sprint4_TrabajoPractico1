//IRepository.mjs
//Establece una interfaz que define los métodos CRUD estándar y sirve para 
//asegurar que cualquier clase que implemente la interfaz cuente con estos métodos

class IRepository {
    obtenerTodos() {
        throw new Error("Método 'obtenerTodos()' no implementado");

    }
    crearSuperHeroe(datos) {
        throw new Error("Método 'crear()' no implementado");
    }
    actualizarSuperHeroe(id, datosActualizados) {
        throw new Error("Método 'actualizarHeroe()' no implementado");
    }
    eliminarSuperHeroe(id, datos) {
        throw new Error("Método 'actualizarHeroe()' no implementado");
    }
    ////
     obtenerPorId(id) {
        throw new Error("Método 'obtenerPorId()' no implementado");

    }
    buscarPorAtributo(atributo, valor) {
        throw new Error("Método 'buscarPorAtribulo()' no implementado");

    }
    obtenerMayoresDe30(atributo, valor) {
        throw new Error("Método 'obtenerMayoresDe30()' no implementado");

    }


}
export default IRepository;



