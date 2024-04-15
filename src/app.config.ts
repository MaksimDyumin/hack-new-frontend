// import dotenv from 'dotenv';

// Загрузка переменных среды из файла .env
// dotenv.config();

// Получение переменной среды REACT_APP_BACKEND_URL
const backendUrl = process.env.REACT_APP_BACKEND_URL;

console.log(backendUrl)

// Проверка, установлена ли переменная среды REACT_APP_BACKEND_URL
if (!backendUrl) {
  throw new Error('REACT_APP_BACKEND_URL не установлен в файле .env');
}

// Экспорт переменной среды
console.log(backendUrl)
export { backendUrl };