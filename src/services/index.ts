import { REACT_API_URL } from '@env';
import axios from 'axios';

const BASE_URL = `${REACT_API_URL}/bp`;

const api = axios.create({
  baseURL: BASE_URL
});

const ProductFinancialService = {
  getProducts: async () => {
    try {
      const response = await api.get(`${BASE_URL}/products`);
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },
  deleteProducts: async (id: string) => {
    try {
      const response = await api.delete(`${BASE_URL}/products/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error delete products:', error);
      throw error;
    }
  },
  postProducts: async (body: any) => {
    try {
      const response = await api.post(`${BASE_URL}/products`, body);
      return response.data;
    } catch (error) {
      console.error('Error Post products:', error);
      throw error;
    }
  },
  putProducts: async (id:string,body: any) => {
    try {
      const response = await api.put(`${BASE_URL}/products/${id}`, body);
      return response.data;
    } catch (error) {
      console.error('Error put products:', error);
      throw error;
    }
  },
};

export default ProductFinancialService;
