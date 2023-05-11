export interface Products {
  Name: string;
  _id: string;
  Image: string;
  Slug: {
    current: string;
  };
  Price: number;
  Details: string;
}

export interface Banner {
  smallText: string;
  midText: string;
  largeText1: string;
  image: string;
  product: string;
  buttonText: string;
  description: string;
}

export interface HomeProps {
  products: Products[];
  bannerData: Banner[];
}
