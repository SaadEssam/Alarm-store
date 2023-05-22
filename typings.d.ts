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

export interface StateContextProps {
  showCart: boolean;
  setShowCart: (value: boolean) => void;
  cartItems: any[];
  totalPrice: number;
  totalQuantities: number;
  qty: number;
  incQty: () => void;
  decQty: () => void;
  onAdd: (product: any, quantity: number) => void;
  toggleCartItemQuantity: (id: string, value: string) => void;
}
