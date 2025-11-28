import { useContext } from 'react';
import data from './/../helpers/products.json';
import { render, waitFor } from '@testing-library/react';
import { FilteredProductsContext, FilteredProductsProvider } from './filteredProductsContext';
import { ProductsContext } from './productsContext';
import { FilterContext } from './filterContext';
import { usePagination } from '../hooks/usePagination';

const sort = 'default';

const pagination = {
  currentPage: 1,
  productsPerPage: 12,
  productsCount: 0
};

describe('color filter operation test', () => {
  test(`'Red' filter returned the 'Red' products`, async () =>  {
    const products  = data;

    const filters = {
        searchValue: '',
        category: 'All',
        price: {
            minPrice: 0,
            maxPrice: 999999
        },
        colors: ['Red']
    };

    let filteredResult = [];

    const TestComponent = () => {
      const { products } = useContext(FilteredProductsContext);
      filteredResult = products;
      return null;
    };

    render(
      <ProductsContext.Provider value={products}>
        <FilterContext.Provider value={{ filters, sort, pagination }}>
          <FilteredProductsProvider>
            <TestComponent />
          </FilteredProductsProvider>
        </FilterContext.Provider>
      </ProductsContext.Provider>
    );

    const filteredByRedColor = products.filter((product) => product.color === 'Red');

    await waitFor(() => {
      expect(filteredResult).not.toBeUndefined();
    });

    expect(filteredResult).toEqual(filteredByRedColor);
  });
  test(`'Red', 'Blue', 'Black' filter returned the right products`, async () =>  {
    const products  = data;

    const filters = {
        searchValue: '',
        category: 'All',
        price: {
            minPrice: 0,
            maxPrice: 999999
        },
        colors: ['Red', 'Blue', 'Black']
    };

    let filteredResult = [];

    const TestComponent = () => {
      const { products } = useContext(FilteredProductsContext);
      filteredResult = products;
      return null;
    };

    render(
      <ProductsContext.Provider value={products}>
        <FilterContext.Provider value={{ filters, sort, pagination }}>
          <FilteredProductsProvider>
            <TestComponent />
          </FilteredProductsProvider>
        </FilterContext.Provider>
      </ProductsContext.Provider>
    );

    const filteredByColors = products.filter((product) => ['Red', 'Blue', 'Black'].includes(product.color));

    const paginatedFilteredByColors = filteredByColors.slice(
      (pagination.currentPage - 1) * pagination.productsPerPage,
      pagination.currentPage * pagination.productsPerPage
    );

    await waitFor(() => {
      expect(filteredResult).not.toBeUndefined();
    });

    expect(filteredResult).toEqual(paginatedFilteredByColors);
  });
});

describe('category filter operation test', () => {
  test(`'Men' filter returned the right products`, async () => {
    const products  = data;

    const filters = {
        searchValue: '',
        category: 'Men',
        price: {
            minPrice: 0,
            maxPrice: 999999
        },
        colors: []
    };

    let filteredResult = [];

    const TestComponent = () => {
      const { products } = useContext(FilteredProductsContext);
      filteredResult = products;
      return null;
    };

    render(
      <ProductsContext.Provider value={products}>
        <FilterContext.Provider value={{ filters, sort, pagination }}>
          <FilteredProductsProvider>
            <TestComponent />
          </FilteredProductsProvider>
        </FilterContext.Provider>
      </ProductsContext.Provider>
    );

    const filteredByColors = products.filter((product) => product.categories.includes(filters.category));

    const paginatedFilteredByColors = filteredByColors.slice(
      (pagination.currentPage - 1) * pagination.productsPerPage,
      pagination.currentPage * pagination.productsPerPage
    );

    await waitFor(() => {
      expect(filteredResult).not.toBeUndefined();
    });

    expect(filteredResult).toEqual(paginatedFilteredByColors);
  });
  test(`'Women' filter returned the right products`, async () => {
    const products  = data;

    const filters = {
        searchValue: '',
        category: 'Women',
        price: {
            minPrice: 0,
            maxPrice: 999999
        },
        colors: []
    };

    let filteredResult = [];

    const TestComponent = () => {
      const { products } = useContext(FilteredProductsContext);
      filteredResult = products;
      return null;
    };

    render(
      <ProductsContext.Provider value={products}>
        <FilterContext.Provider value={{ filters, sort, pagination }}>
          <FilteredProductsProvider>
            <TestComponent />
          </FilteredProductsProvider>
        </FilterContext.Provider>
      </ProductsContext.Provider>
    );

    const filteredByColors = products.filter((product) => product.categories.includes(filters.category));

    const paginatedFilteredByColors = filteredByColors.slice(
      (pagination.currentPage - 1) * pagination.productsPerPage,
      pagination.currentPage * pagination.productsPerPage
    );

    await waitFor(() => {
      expect(filteredResult).not.toBeUndefined();
    });

    expect(filteredResult).toEqual(paginatedFilteredByColors);
  });
});

test('operational test of the search value', async () => {
  const products  = data;

    const filters = {
        searchValue: 'sweater',
        category: 'All',
        price: {
            minPrice: 0,
            maxPrice: 999999
        },
        colors: []
    };

    let filteredResult = [];

    const TestComponent = () => {
      const { products } = useContext(FilteredProductsContext);
      filteredResult = products;
      return null;
    };

    render(
      <ProductsContext.Provider value={products}>
        <FilterContext.Provider value={{ filters, sort, pagination }}>
          <FilteredProductsProvider>
            <TestComponent />
          </FilteredProductsProvider>
        </FilterContext.Provider>
      </ProductsContext.Provider>
    );

    const filteredByColors = products.filter((product) => product.name.toLowerCase().includes(filters.searchValue.toLowerCase()));

    const paginatedFilteredByColors = filteredByColors.slice(
      (pagination.currentPage - 1) * pagination.productsPerPage,
      pagination.currentPage * pagination.productsPerPage
    );

    await waitFor(() => {
      expect(filteredResult).not.toBeUndefined();
    });

    expect(filteredResult).toEqual(paginatedFilteredByColors);
});
