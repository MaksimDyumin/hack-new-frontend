import axios, { AxiosInstance } from 'axios';
import { backendUrl } from '../app.config';

// Создаем функцию, которая принимает базовый URL и возвращает новый экземпляр Axios с этим URL в качестве базового
const useAxios = (options?: Object): AxiosInstance => {
  const instance = axios.create({
    baseURL: backendUrl,
    // Дополнительные настройки, если необходимо
  });

  // Возвращаем созданный экземпляр Axios
  return instance;
};

// Экспортируем функцию useAxios
export default useAxios;