declare namespace Data {
  type Product = ProductData[];

  interface ProductData {
    id: number;
    product_name: string;
    product_image: string;
    product_offer: boolean;
    product_price: number;
    product_status: string;
  }
}

export = Data;
