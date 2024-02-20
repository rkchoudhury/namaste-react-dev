import { render, screen } from "@testing-library/react";

import RestaurantCard, {
  withPromotedLabel,
} from "../src/components/RestaurantCard";
import MOCK_DATA from "../__mocks__/restaurantMockData.json";
import "@testing-library/jest-dom";

it("Should render RestaurantCard component with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Burger King");

  expect(name).toBeInTheDocument();
});

it("Should render RestaurantCard component with Promoted Label", () => {
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  render(<RestaurantCardPromoted resData={MOCK_DATA} />);

  const promotedText = screen.getByText("Promoted");

  expect(promotedText).toBeInTheDocument();
});
