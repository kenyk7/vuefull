import { assign } from 'lodash'

import users from './users/es_ES'
import things from './things/es_ES'
const common = {
  el: {
    select: {
      noData: 'Sin datos coincidentes'
    }
  },
  config: {
    title: 'Login admin',
    description: 'Description'
  },
  message: {
    save: {
      ok: 'Ok!',
      err: 'Se ha producido un error al guardar!'
    },
    confirm: {
      title: 'Advertencia',
      ok: 'Ok',
      cancel: 'Cancelar'
    },
    created: 'Creado con éxito',
    createFailed: 'Error al crear',
    updated: 'Actualización correcta',
    updateFailed: 'Error en la actualización',
    removed: 'Eliminado con éxito',
    removeFailed: 'Error al eliminar'
  },
  http: {
    error: {
      E401: 'No autorizado',
      E404: 'No se ha encontrado la URL',
      E500: 'Error del Servidor',
      others: 'Se ha producido algún error. Inténtalo de nuevo.'
    }
  },
  header: {
    settings: 'Ajustes de usuario',
    password: 'Password',
    logout: 'Logout',
    localeSetting: 'Idioma',
    pageLimit: 'Límite de conteo de datos por página',
    _password: {
      description: 'Cambia tu contraseña. Es recomendable que elija una contraseña compleja.',
      old: 'Contraseña anterior',
      _new: 'Nueva contraseña',
      newConfirm: 'Confirmar nueva contraseña',
      rules: {
        old: 'Introduzca su contraseña antigua',
        _new: 'Introduzca una nueva contraseña.',
        newConfirm: 'Ingresa una nueva contraseña de nuevo',
        notMatch: 'Las dos nuevas contraseñas no coinciden'
      },
      afterChange: 'La contraseña ha cambiado, el sistema se cerrará automáticamente, por favor, vuelva a iniciar sesión con la nueva contraseña.'
    }
  },
  menu: {
    users: 'Usuarios',
    things: 'Cosas'
  },
  toolbar: {
    create: 'Agregar',
    remove: 'Eliminar'
  },
  datatable: {
    operate: 'Acciones'
  },
  pagination: {
    current: 'Actual',
    currentAppend: 'página',
    total: 'total',
    pages: 'total',
    pagesAppend: 'página'
  },
  login: {
    username: 'Introduzca el nombre de usuario',
    password: 'Introduzca la contraseña',
    button: 'Iniciar sesión',
    notifyError: {
      title: 'Error',
      description: 'Datos Incorrectos'
    }
  }
}

export default assign({}, common, { users, things })
