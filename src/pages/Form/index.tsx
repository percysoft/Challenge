import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Button from '../../components/atoms/Button/buttont';
import Input from '../../components/atoms/Input/Input';
import MyDatePicker from '../../components/atoms/DatePicker/DatePicker';
import ProductFinancialService from '../../services';
import useFormValidation from './hook';
import { formatDate } from '../../utils';
import { ROUTES } from '../../constant';
import Loader from '../../components/atoms/Loader/Loader';
import ErrorComponent from '../../components/molecules/ErrorPage/ErrorPage';

export const FormProducts: React.FC = ({
  navigation,
  initialValues,
  register,
}: any) => {
  const {values, errors, handleChange, handleSubmit, handleReset, setValues} =
    useFormValidation(initialValues);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    setValues(initialValues);

    if (!register) {
      setIsEditMode(true);
    } else {
      setIsEditMode(false);
    }
  }, [initialValues]);

  const postProducts = async (data: any) => {
    setLoading(true);
    try {
      const newData = {
        id: data.id,
        name: data.name,
        description: data.description,
        logo: data.logo,
        date_release: formatDate(data.releaseDate),
        date_revision: formatDate(data.revisionDate),
      };
       await ProductFinancialService.postProducts(newData);
       setLoading(false);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };
  const putProduct = async (data: any) => {
    setLoading(true);

    try {
      const newData = {
        name: data.name,
        description: data.description,
        logo: data.logo,
        date_release: formatDate(data.releaseDate),
        date_revision: formatDate(data.revisionDate),
      };
      await ProductFinancialService.putProducts(data.id, newData);
      setLoading(false);

    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };
  const sendValues = () => {
    const response = handleSubmit();
    if (response.isValid) {
      if (isEditMode) {
        putProduct(response.values);
        navigation.navigate(ROUTES.FINANCIAL_PRODUCTS);
      } else {
        postProducts(response.values);
        navigation.navigate(ROUTES.FINANCIAL_PRODUCTS);
      }
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <ErrorComponent
        message="Error update or save products. Please try again."
        onRetry={sendValues}
      />
    );
  }

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      pagingEnabled={true}
      style={styles.scrollView}>
      <View style={styles.container}>
        <View>
          <Text>FORMULARIO DE REGISTRO</Text>
        </View>
        <View style={styles.containerInputs}>
          <Input
            label="Id"
            keyboardType="default"
            value={values.id}
            error={!!errors.id}
            errorMessage={errors.id}
            onChange={value => handleChange('id', value)}
          />
          <Input
            label="name"
            keyboardType="default"
            value={values.name}
            error={!!errors.name}
            errorMessage={errors.name}
            onChange={value => handleChange('name', value)}
          />
          <Input
            label="Descripción"
            keyboardType="default"
            value={values.description}
            error={!!errors.description}
            errorMessage={errors.description}
            onChange={value => handleChange('description', value)}
          />
          <Input
            label="Logo"
            keyboardType="default"
            value={values.logo}
            error={!!errors.logo}
            errorMessage={errors.logo}
            onChange={value => handleChange('logo', value)}
          />
          <MyDatePicker
            label="Fecha Liberación"
            date={values.releaseDate}
            setDate={() =>
              setValues({
                ...values,
                releaseDate: values.releaseDate,
              })
            }
            onChange={date => handleChange('releaseDate', date)}
            error={!!errors.releaseDate}
            errorMessage={errors.releaseDate}
          />
          <MyDatePicker
            label="Fecha Revisión"
            date={values.revisionDate}
            setDate={() =>
              setValues({
                ...values,
                revisionDate: values.revisionDate,
              })
            }
            onChange={date => handleChange('revisionDate', date)}
            error={!!errors.revisionDate}
            errorMessage={errors.revisionDate}
          />
        </View>
        <View style={styles.containerButton}>
          <Button
            background="#fedd03"
            text={isEditMode ? 'Editar' : 'Enviar'}
            onClick={sendValues}
            key="send"
            colorText="#5d6f9b"
          />
          <Button
            background="#cccdce"
            text="Reiniciar"
            onClick={handleReset}
            key="reload"
            colorText="#5d6f9b"
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    flexDirection: 'column',
    width: '100%',
    overflow: 'scroll',
  },
  containerInputs: {
    width: '100%',
  },
  containerButton: {
    flex: 1,
    flexDirection: 'column',
    gap: 20,
    width: '100%',
  },
});

export default FormProducts;
