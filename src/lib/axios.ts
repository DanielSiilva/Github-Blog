import axios from 'axios'

//Url: base  - serve para definirmos o prefixo das nossas url´s

export const api = axios.create({
    baseURL: 'http://localhost:3333',
});