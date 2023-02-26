import { render, screen, within } from '@testing-library/react';

const ContainRole = (container, role, quantity = 1) => {
  const elements = within(container).queryAllByRole(role);

  if (elements.length === quantity) {
    return {
      pass: true
    };
  }

  return {
    pass: false,
    message: () => `Expected to find ${quantity} ${role} elements.
    Found ${elements.length} instead.`
  }
}

expect.extend({ ContainRole });

