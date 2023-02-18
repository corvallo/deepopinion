import { IProduct } from "./../@typings/product.d";
import { faker } from "@faker-js/faker";

function generateFakeProduct(): IProduct {
  return {
    id: faker.datatype.uuid(),
    name: faker.commerce.product(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
  };
}

export function generateFakeProducts(n: number = 1000): IProduct[] {
  return Array.from({ length: n }, () => generateFakeProduct());
}
