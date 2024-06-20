import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Button from '../../components/atoms/Button/buttont';
import {ModalOptions} from './components/ModalOptions';
import {useRoute} from '@react-navigation/native';
import {detailProduct} from '../../Types/pages/DetailProduct';
import { NavigationsProps } from '../../Types/pages/navigation';
import { ROUTES } from '../../constant';

export const DetailProduct: React.FC = ({navigation}: NavigationsProps) => {
  const route = useRoute<detailProduct>();
  const {product} = route.params;
  const [openModal, setOpenModal] = useState(false);

  const DetailName = (label: string, text: string) => {
    return (
      <View style={styles.containerDetailName}>
        <Text style={styles.textLabelName}>{label}</Text>
        <Text style={styles.textDetailName}>{text}</Text>
      </View>
    );
  };

  const DetailLogo = (label: string, image: string) => {
    return (
      <View style={styles.containerLogo}>
        <Text>{label}</Text>
        {image ? (
          <Text style={styles.logo}>No se puede cargar la imagen</Text>
        ) : (
          <Image
            source={{uri: image}}
            style={styles.logo}
            resizeMode="contain"
          />
        )}
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.labelId}>ID: {product.id}</Text>
        <Text style={styles.labelInformation}>Informacion extra</Text>
      </View>

      <View
        style={{
          width: '70%',
          justifyContent: 'flex-start',
          flex: 1,
          marginTop: 20,
        }}>
        {DetailName('Nombre', product.name)}
        {DetailName('Descripción', product.description)}
        {DetailLogo('logo', product.logo)}
        {DetailName('Fecha Liberación', product.date_release)}
        {DetailName('Fecha Revisión', product.date_revision)}
      </View>
      <View style={styles.containerButton}>
        <Button
          background="#cccdce"
          text="Editar"
          onClick={() => {
            navigation.navigate(ROUTES.EDIT_PRODUCTS, {
              initialValues: {
                id: product.id,
                name: product.name,
                description: product.description,
                logo: product.logo,
                releaseDate: new Date(product.date_release),
                revisionDate: new Date(product.date_revision),
              },
              register: false,
            });
          }}
          key="edit"
          colorText="#5d6f9b"
        />
        <Button
          background="red"
          text="Eliminar"
          onClick={() => setOpenModal(true)}
          key="delete"
          colorText="white"
        />
      </View>
      <ModalOptions
        openModal={openModal}
        setOpenModal={setOpenModal}
        name={product.name}
        id={product.id}
        navigation={navigation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 20,
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
  containerDetailName: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  containerLogo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  containerButton: {
    flexDirection: 'column',
    gap: 20,
    width: '100%',
  },
  logo: {
    width: 200,
    height: 200,
  },
  textDetailName: {
    color: 'black',
    fontWeight: '400',
    fontSize: 16,
  },
  textLabelName: {
    color: 'grey',
    fontSize: 16,
  },
  containerTitle: {
    justifyContent: 'flex-start',
    width: '70%',
  },
  labelId: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  labelInformation: {
    fontSize: 20,
  },
});
