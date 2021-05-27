export interface Product {
  id: number | string;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
}

export function createProduct(params: Partial<Product>) {
  return {
    
  } as Product;
}
