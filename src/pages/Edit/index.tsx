import React from 'react';
import {  StyleSheet } from 'react-native';
import FormProducts from '../Form';
import { NavigationsProps } from '../../Types/pages/navigation';

export const EditProducts: React.FC = ({
  route,
  navigation,
}: NavigationsProps) => {
  const {initialValues, register} = route.params || {};

  return (
    <FormProducts
      initialValues={initialValues}
      register={register}
      navigation={navigation}
    />
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

export default EditProducts;
