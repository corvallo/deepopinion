import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import List from "../components/list/List";
import ListElement from "../components/list/ListElement";
import { generateFakeProducts } from "../utils/generateProducts";

class IntersectionObserver {
  observe = jest.fn();
  disconnect = jest.fn();
  unobserve = jest.fn();
}

Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  configurable: true,
  value: IntersectionObserver,
});

Object.defineProperty(global, "IntersectionObserver", {
  writable: true,
  configurable: true,
  value: IntersectionObserver,
});
describe("List", () => {
  const products = [...generateFakeProducts(10)];
  const rowHeight = 100;
  const bufferElements = 2;
  it("renders list", async () => {
    render(
      <List rowHeight={rowHeight}>
        {products.map((product, i) => (
          <ListElement key={i} product={product} index={i} />
        ))}
      </List>
    );

    const list = await screen.getByTestId("list");

    expect(list).toBeInTheDocument();

    const listHeader = await screen.getByTestId("list-header");
    expect(listHeader).toBeInTheDocument();
    expect(listHeader.childNodes).toHaveLength(3);
    expect(listHeader.childNodes[0]).toHaveTextContent("Product");
    expect(listHeader.childNodes[1]).toHaveTextContent("Description");
    expect(listHeader.childNodes[2]).toHaveTextContent("Price");

    const listContent = await screen.getByTestId("list-content");
    expect(listContent).toBeInTheDocument();
    expect(listContent.style.height).toBe(`${rowHeight * (products.length - 1)}px`);

    const listElements = await screen.getAllByTestId("list-element");
    const scrollPosition = list.scrollTop;
    const listHeight = list.offsetHeight;
    const start = Math.max(Math.floor(scrollPosition / rowHeight) - bufferElements, 0);
    const end = Math.min(Math.ceil((scrollPosition + listHeight) / rowHeight - 1) + bufferElements, products.length - 1);
    expect(listElements).toHaveLength(products.slice(start, end + 1).length);
  });
});
