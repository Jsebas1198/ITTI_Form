import  { AxiosResponse } from 'axios';
import axiosInstance from '../config/axios';
import MUser from '../models/MUser';
import { IUser } from '../interfaces/User/IUser';
import { ICreateUser } from '../interfaces/User/ICreateuser';
import { ERequestContentType } from '../enum/ERequestContentType';
import { IUpdateUser } from '../interfaces/User/IUpdateUser';
import { IHttpResponse } from '../interfaces/User/IHttpResponse';


export default class UserService {
  /**
   * @description Obtiene los usuarios de la base de datos
   * @returns {Promise<MUser[]>}
   */
  public static async getUsers(): Promise<MUser[]> {
    try {
      const { data: categoriesResponse }: AxiosResponse<any> = await axiosInstance.get(
        '/todos'
      );

      return categoriesResponse;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  /**
   * @description Busca un usuario pro su ID
   * @param {string} userId ID del usuario que se va a buscar
   * @returns {Promise<MUser>}
   */
  public static async getUserById(userId: string): Promise<MUser> {
    try {
      const { data: userResponse }: AxiosResponse<IUser> = await axiosInstance.get(
        `/todos/${userId}`
      );
      return new MUser(userResponse);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  /**
   * @description Crea un Usuario
   * @param {ICreateUser} createValues Valores de la cración del usuario
   * @returns {Promise<MUser>}
   */
  public static async create(createValues: ICreateUser): Promise<MUser> {
    try {
      const {userId, title, completed  } = createValues;

      const requestData = {
        userId, title, completed
      };

      const { data: createResponse }: AxiosResponse<IHttpResponse<MUser>> =
        await axiosInstance.post('todos', requestData, {
          headers: {
            'content-type': `${ERequestContentType.JSON}; charset=UTF-8`,
          },
        });

      return createResponse.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  /**
   * @description Actualiza un usuario
   * @param {IUpdateUser} changes Datos del usuario que se van a actualizar
   * @param {string} userId ID del usuario que se va a actualizar
   * @returns {Promise<any>}
   */
  public static async updateUser(changes: IUpdateUser, id: number): Promise<any> {
    try {
      const { userId, title, completed  } = changes;

      const newData = { userId, title, completed };
      const { data: updateResponse }: AxiosResponse<IHttpResponse<any>> = await axiosInstance.put(
        `todos/${id}`,
        newData,
        {
          headers: {
            'content-type': `${ERequestContentType.JSON}; charset=UTF-8`,
          },
        }
      );

      return updateResponse.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  /**
   * @description Elimina a un Usuario
   * @param {number} userId ID del usuario que se va a eliminar
   * @returns {Promise<null>}
   */
  public static async deleteUser(userId: string): Promise<null> {
    try {
      await axiosInstance.delete(`/todos/${userId}`);
      return null;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
