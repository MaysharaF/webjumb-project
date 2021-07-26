export interface Item {
  id: number;
  sku: string;
  path: string;
  name: string;
  image: string;
  price: number;
  specialPrice?: number;
  filter: {
    color: string;
  }[];
}
