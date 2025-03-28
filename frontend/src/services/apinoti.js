import axios from 'axios';

// Criando a instância do axios
const api = axios.create({
  baseURL: 'https://apicrm.cdchost.com.br/public/api', // Substitua pela URL da sua API
  headers: {
    'Content-Type': 'application/json', // Define o tipo de conteúdo como JSON
  },
});

// Definindo o token Bearer de forma dinâmica
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaWNybS5jZGNob3N0LmNvbS5ici9wdWJsaWMvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3MjY5MzAzMTgsImV4cCI6NjAxNzI2OTMwMzE4LCJuYmYiOjE3MjY5MzAzMTgsImp0aSI6IlZobFRGMEFUcjhybVhLTEYiLCJzdWIiOiIxIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.bWcequ2uVJ9XIEaqbMqCpVBRGUCApN06D87z3FX72Js'; // Substitua pelo seu token JWT

api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export default api;