import { render, screen } from '@testing-library/react';
import DataForm from './DataForm';

// When to use Each Suffix
test('selecting different elements', () => {
  render(<DataForm />);

  const elements = [
    screen.getByRole('button'),
    screen.getByLabelText('Email'),
    screen.getByPlaceholderText('Red'),
    screen.getByText('Enter Data'), //screen.getByText(/enter data/i),
    screen.getByDisplayValue('koushik@yml.com'),
    screen.getByAltText('data'),
    screen.getByTitle('Click when ready to submit'),
    screen.getByTestId('image wrapper')
  ];

  for (let element of elements) {
    expect(element).toBeInTheDocument();
   }
});