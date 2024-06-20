import React  from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import BottomSheet from '../../../components/atoms/BottomSheet/BottomSheet';
import Button from '../../../components/atoms/Button/buttont';
import Close from '../../../icons/svg/close';
import ProductFinancialService from '../../../services';
import Loader from '../../../components/atoms/Loader/Loader';
import ErrorComponent from '../../../components/molecules/ErrorPage/ErrorPage';
import { ROUTES } from '../../../constant';
import useAsyncState from '../hook';

export const ModalOptions = ({
  openModal,
  setOpenModal,
  name,
  id,
  navigation,
}: any) => {
  const {loading, error, executeAsyncFunction} = useAsyncState();

  const deleteProduct = async (id: string) => {
    await executeAsyncFunction(async () => {
      await ProductFinancialService.deleteProducts(id);
      navigation.navigate(ROUTES.FINANCIAL_PRODUCTS);
    });
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <ErrorComponent
        message="Error delete product. Please try again."
        onRetry={() =>deleteProduct(id)}
      />
    );
  }
  return (
    <BottomSheet open={openModal} setOpen={setOpenModal}>
      <View style={styles.containerIcon}>
        <TouchableOpacity onPress={() => setOpenModal(false)}>
          <Close />
        </TouchableOpacity>
      </View>
      <Text style={styles.textModal}>
        ¿Estás seguro que desea eliminar el producto {name}?
      </Text>
      <View style={styles.containerButton}>
        <Button
          background="#fedd03"
          text="Confirmar"
          onClick={() => {
            deleteProduct(id);
          }}
          key="confirm"
          colorText="#5d6f9b"
        />
        <Button
          background="#cccdce"
          text="Cancelar"
          onClick={() => setOpenModal(false)}
          key="cancel"
          colorText="#5d6f9b"
        />
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  containerIcon: {
    paddingVertical: 20,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    justifyContent: 'flex-end',
    width: '100%',
    flexDirection: 'row',
  },
  textModal: {
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center',
  },
  containerButton: {
    marginTop: 40,
    flex: 1,
    flexDirection: 'column',
    gap: 20,
    width: '100%',
  },
});
