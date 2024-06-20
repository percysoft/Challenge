import { RouteProp } from "@react-navigation/native";

export type itemProduct = {
  DetailProduct: {
    product: {
      id: string;
      name: string;
      description: string;
      date_release: string;
      date_revision: string;
      logo: string;
    };
  };
};
export type detailProduct = RouteProp<itemProduct, 'DetailProduct'>;
