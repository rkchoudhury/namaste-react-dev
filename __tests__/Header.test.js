import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../src/components/Header";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// useSelector -> Provider
// error occurred in the <Link> component -> BrowserRouter
// error in toBeInTheDocument -> import "@testing-library/jest-dom";
it("Should load Header Componet with a login button", () => {
  // 1. Render
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // 2. Querying
  const loginButton = screen.getByRole("button");
  const loginButton1 = screen.getByText("Login");
  const loginButton2 = screen.getByRole("button", { name: "Login" }); // When multiple buttons are there

  // 3. Assertion
  expect(loginButton).toBeInTheDocument();
});

it("Should load Header Componet with a Cart Item 0", () => {
  // 1. Render
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // 2. Querying
  const cartItem = screen.getByText("(0)");

  // 3. Assertion
  expect(cartItem).toBeInTheDocument();
});

it("Should load Header Componet with a Cart Item", () => {
  // 1. Render
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // 2. Querying
  const cartItem = screen.getByText(/(\d+)/); // We can pass regex here when we are using text

  // 3. Assertion
  expect(cartItem).toBeInTheDocument();
});

it("Should change Login button to Logout on click", () => {
  // 1. Render
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // 2. Querying
  const loginButton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "Logout" });

  // 3. Assertion
  expect(logoutButton).toBeInTheDocument();
});
