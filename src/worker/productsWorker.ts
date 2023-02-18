import { generateFakeProducts } from "../utils/generateProducts";
/* eslint-disable no-restricted-globals */
self.onmessage = (message: MessageEvent<string>) => {
  if (message && message.data && message.data[0] === "GENERATE_PRODUCTS") {
    self.postMessage(["PRODUCTS", generateFakeProducts(parseInt(message.data[1]))]);
  }
};

export {};
