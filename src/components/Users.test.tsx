import { render, screen } from "@testing-library/react";
import Users from "./Users";
import "@testing-library/jest-dom/extend-expect";

describe("User", () => {
  it("Should render User Info", () => {
    const userInfo = [
      {
        Email: "email@gmail.com",
        name: "my name",
        id: "123",
      },
      {
        Email: "email2@gmail.com",
        name: "my name 2",
        id: "1234",
      },
    ];
    render(<Users users={userInfo} />);
    expect(screen.getByText("email2@gmail.com")).toBeInTheDocument();
    expect(screen.getByText("my name 2")).toBeInTheDocument();
    expect(screen.getByText("email@gmail.com")).toBeInTheDocument();
    expect(screen.getByText("my name")).toBeInTheDocument();
  });
});
