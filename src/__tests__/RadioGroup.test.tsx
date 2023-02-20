import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RadioGroup from "../components/controls/RadioGroup";

describe("RadioGroup component", () => {
  const options = [
    { value: 1000, label: "1000 Rows" },
    { value: 10000, label: "10000 Rows" },
    { value: 100000, label: "100000 Rows" },
  ];
  const name = "row-options";
  const onChange = jest.fn();

  it("renders radio buttons with labels for each option", async () => {
    render(<RadioGroup options={options} name={name} onChange={onChange} />);
    const radioOptions = await screen.findAllByTestId("radio");

    expect(radioOptions).toHaveLength(options.length);
    options.forEach(async (option) => {
      const optionLabel = await screen.queryByTestId(option.label);
      expect(optionLabel?.textContent).toBe(option.label);
    });
  });

  it("defaults to the first option", () => {
    render(<RadioGroup options={options} name={name} onChange={onChange} />);
    const firstOption = options[0];
    const defaultRadioButton: HTMLInputElement = screen.getByLabelText(firstOption.label);
    expect(defaultRadioButton.checked).toBe(true);
  });

  it("calls onChange function when a radio button is selected", () => {
    render(<RadioGroup options={options} name={name} onChange={onChange} />);
    const radioButtons = screen.getAllByRole("radio");
    fireEvent.click(radioButtons[1]);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(expect.any(Object));
    expect(onChange.mock.calls[0][0].target.value).toBe(`${options[1].value}`);
  });
});
