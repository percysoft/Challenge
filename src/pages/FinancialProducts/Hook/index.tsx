import { useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { Product, UseProductListProps } from '../../../Types/pages/FinantialProduct';
import ProductFinancialService from '../../../services';

const useProductList = ({ initialSearch = '' }: UseProductListProps = {}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [search, setSearch] = useState<string>(initialSearch);
  const isFocused = useIsFocused();

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const {data} = await ProductFinancialService.getProducts();
      setProducts(data);
      setFilteredProducts(data);
      setLoading(false);

    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isFocused) {
      fetchProducts();
    }
  }, [isFocused]);

  useEffect(() => {
    const filtered = products.filter(
      product =>
        product.id.includes(search) ||
        product.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [search, products]);

  useEffect(() => {
    if (isFocused) {
      setSearch(initialSearch);
      setFilteredProducts(products);
    }
  }, [isFocused, initialSearch, products]);

  return {
    products,
    filteredProducts,
    loading,
    error,
    search,
    setSearch,
    reloadProducts: fetchProducts,
  };
};

export default useProductList;
