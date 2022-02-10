import { render, screen } from "@testing-library/react";
import User from "./User";
import "@testing-library/jest-dom/extend-expect";

describe("User", () => {
  it("Should render User Info", () => {
    const userInfo = {
      Email: "email@gmail.com",
      name: "my name",
      id: "123",
    };
    render(<User user={userInfo} />);
    expect(screen.getByText("email@gmail.com")).toBeInTheDocument();
    expect(screen.getByText("my name")).toBeInTheDocument();
  });
});
