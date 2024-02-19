import {
  fireEvent,
  getAllByTestId,
  render,
  screen,
} from "@testing-library/react";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import store from "../src/redux/store";
import RestaurantMenu from "../src/components/RestaurantMenu";
import Header from "../src/components/Header";
import Cart from "../src/components/Cart";
import MOCK_RESTAURANT_MENU from "../__mocks__/restaurantMenuMockData.json";
import { clearCart } from "../src/redux/slices/cartSlice";

// Integartion Testing of Cart functionality

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_RESTAURANT_MENU),
  })
);

describe("Integration Test case for RestaurantMenu Component", () => {
  beforeEach(() => {
    // Clearing the cart data from the store to beginning the test with 0 items in the store before each test
    store.dispatch(clearCart());
  });

  it("Should Load Restaurant Menu Component", async () => {
    await act(async () =>
      render(
        <Provider store={store}>
          <RestaurantMenu />
        </Provider>
      )
    );

    const recommendedSection = screen.getByText("Recommended (18)");
    expect(recommendedSection).toBeInTheDocument();
  });

  it("Should show food items under Recommended", async () => {
    await act(async () =>
      render(
        <Provider store={store}>
          <RestaurantMenu />
        </Provider>
      )
    );

    const recommendedSection = screen.getByText("Recommended (18)");
    expect(recommendedSection).toBeInTheDocument();

    fireEvent.click(recommendedSection);
    expect(screen.getAllByTestId("resMenuItem").length).toBe(18);
  });

  // Adding Header Component to check if there is any food items added into the header cart
  it("Should be no food items added into the cart", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Header />
            <RestaurantMenu />
          </Provider>
        </BrowserRouter>
      )
    );

    const recommendedSection = screen.getByText("Recommended (18)");
    expect(recommendedSection).toBeInTheDocument();

    fireEvent.click(recommendedSection);
    expect(screen.getAllByTestId("resMenuItem").length).toBe(18);

    expect(screen.getByText("(0)")).toBeInTheDocument();
  });

  it("Should be one food items added into the cart", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Header />
            <RestaurantMenu />
          </Provider>
        </BrowserRouter>
      )
    );

    const recommendedSection = screen.getByText("Recommended (18)");
    expect(recommendedSection).toBeInTheDocument();

    fireEvent.click(recommendedSection);
    expect(screen.getAllByTestId("resMenuItem").length).toBe(18);

    expect(screen.getByText("(0)")).toBeInTheDocument();

    const addButtons = screen.getAllByRole("button", { name: "Add" });
    fireEvent.click(addButtons[0]);

    expect(screen.getByText("(1)")).toBeInTheDocument();
  });

  it("Should be two food items added into the cart", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Header />
            <RestaurantMenu />
          </Provider>
        </BrowserRouter>
      )
    );

    const recommendedSection = screen.getByText("Recommended (18)");
    expect(recommendedSection).toBeInTheDocument();

    fireEvent.click(recommendedSection);
    expect(screen.getAllByTestId("resMenuItem").length).toBe(18);

    expect(screen.getByText("(0)")).toBeInTheDocument();

    const addButtons = screen.getAllByRole("button", { name: "Add" });

    fireEvent.click(addButtons[0]);
    expect(screen.getByText("(1)")).toBeInTheDocument();

    fireEvent.click(addButtons[1]);
    expect(screen.getByText("(2)")).toBeInTheDocument();
  });

  // Adding Header Component to check if there is any food items added into the header cart
  // Adding Cart Component to check if there is any food items added into the Cart Screen
  it("Should be two food items added into the cart", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Header />
            <RestaurantMenu />
            <Cart />
          </Provider>
        </BrowserRouter>
      )
    );

    const recommendedSection = screen.getByText("Recommended (18)");
    expect(recommendedSection).toBeInTheDocument();

    fireEvent.click(recommendedSection);
    expect(screen.getAllByTestId("resMenuItem").length).toBe(18);

    expect(screen.getByText("(0)")).toBeInTheDocument();

    const addButtons = screen.getAllByRole("button", { name: "Add" });

    fireEvent.click(addButtons[0]);
    expect(screen.getByText("(1)")).toBeInTheDocument();

    fireEvent.click(addButtons[1]);
    expect(screen.getByText("(2)")).toBeInTheDocument();

    // already has 18 resMenuItems in RestaurantMenu screen + newly added 2 resMenuItems in Cart screen (add button clicks)
    expect(screen.getAllByTestId("resMenuItem").length).toBe(20);
  });
});
