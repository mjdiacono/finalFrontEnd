import { fireEvent, render, screen } from "@testing-library/react";
import Form from "../Components/Form";

describe("Form", () => {
  let inputName;
  let inputEmail;
  let button;
  beforeEach(() => {
    render(<Form />);
    inputName = screen.getByLabelText("Full Name");
    inputEmail = screen.getByLabelText("Email");
    button = screen.getByRole("button", { name: "Send" });
  });

  test("The field is incorrect, enter it again", async () => {
    fireEvent.change(inputName, {
      target: { value: "Diego" },
    });
    expect(inputName.value).toBe("Diego");
  });

  test("Enter data with correct email format", async () => {
    fireEvent.change(inputName, {
      target: { value: "Diego" },
    });
    fireEvent.change(inputEmail, {
      target: { value: "diego@gmail.com" },
    });
    fireEvent.click(button);

    const formRes = await screen.findByText(
      / Thank you Diego, we will contact you as soon as possible via email/i
    );
    expect(formRes).toBeInTheDocument();
  });
});
