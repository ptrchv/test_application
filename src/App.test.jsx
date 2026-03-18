import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App.jsx";

it("renders the heading", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", { name: /hitachi challenge/i })
  ).toBeInTheDocument();
});

it("shows a notification when the button is pressed", async () => {
  render(<App />);
  const user = userEvent.setup();

  await user.click(screen.getByRole("button", { name: /demo button/i }));

  expect(screen.getByRole("status")).toHaveTextContent(/button pressed/i);
});
