import React from "react"
import { fireEvent, render } from '@testing-library/react-native'
import { Checkbox } from "../Checkbox"
import { ThemeProvider } from "styled-components/native"
import { theme } from "../../../../themes"


describe('Checkbox Component', () => {
  it('Should render component with unchecked state', () => {
    const { getByTestId, queryByTestId } = render(
      <ThemeProvider theme={theme}>
        <Checkbox label="Checkbox 1" />
      </ThemeProvider>
    )

    expect(getByTestId('uncheckedCheckbox')).toBeTruthy();
    expect(queryByTestId('checkedCheckbox')).toBeNull();
  });

  it('Should renders correctly with checked state', () => {
    const { getByTestId, queryByTestId } = render(<Checkbox checked />);

    expect(getByTestId('checkedCheckbox')).toBeTruthy();
    expect(queryByTestId('uncheckedCheckbox')).toBeNull();
  });

  it('Should calls handleToggle when pressed', () => {
    const handleToggle = jest.fn();
    const { getByTestId } = render(<Checkbox handleToggle={handleToggle} />);

    fireEvent.press(getByTestId('checkboxContainer'));

    expect(handleToggle).toHaveBeenCalledTimes(1);
  });
})