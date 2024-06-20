import React from 'react';
import { StyleSheet, View } from 'react-native';
import Input from '../../components/atoms/Input/Input';
import Button from '../../components/atoms/Button/buttont';
import Loader from '../../components/atoms/Loader/Loader';
import ErrorComponent from '../../components/molecules/ErrorPage/ErrorPage';
import CustomList from '../../components/molecules/CustomList/ CustomList';
import { ProductForm } from '../../Types/pages/Form';
import useProductList from './Hook';
import { NavigationsProps } from '../../Types/pages/navigation';
import { ROUTES } from '../../constant';

export const FinancialProducts: React.FC<NavigationsProps> = ({navigation}) => {
  const {filteredProducts, loading, error, search, setSearch, reloadProducts} =
    useProductList();

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <ErrorComponent
        message="Error fetching products. Please try again."
        onRetry={reloadProducts}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Input placeholder="Search..." onChange={setSearch} value={search} />
      <View style={styles.listContainer}>
        <CustomList
          data={filteredProducts}
          onItemPress={item =>
            navigation.navigate(ROUTES.DETAIL_PRODUCTS, {product: item})
          }
        />
      </View>
      <Button
        background="#fedd03"
        text="Agregar"
        onClick={() => {
          const initialProductValues: ProductForm = {
            id: '',
            name: '',
            description: '',
            logo: '',
            releaseDate: new Date(),
            revisionDate: new Date(),
          };
          navigation.navigate(ROUTES.REGISTER_PRODUCTS, {
            initialValues: initialProductValues,
            register: true,
          });
        }}
        key="add"
        colorText="#5d6f9b"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    width: '100%',
  },
  listContainer: {
    width: '100%',
    justifyContent: 'flex-start',
    flex: 1,
  },
});
