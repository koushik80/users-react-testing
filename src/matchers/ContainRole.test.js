import { render, screen, within } from '@testing-library/react';
import ContainRole from './ContainRole';
import FormData from './FormData';



// implementing custom matchers
test('the form displays two buttons', () => {
  //render(<ContainRole />);
  render(<FormData />);

  const form = screen.getByRole('form');

  expect(form).toContainRole('button', 2);
});