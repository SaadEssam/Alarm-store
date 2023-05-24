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
  onRemove: (product: any) => void;
  toggleCartItemQuantity: (id: string, value: string) => void;
  setCartItems;
  setTotalPrice;
  setTotalQuantities;
}

interface ProductProps {
  _updatedAt: string;
  Details: string;
  slug: {
    current: string;
    _type: string;
  };
  image: {}[];
  name: string;
  price: number;
  quantity: number;
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
}
