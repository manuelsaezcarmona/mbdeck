import { render } from './test.utils';
import App from './App';

describe('With React Testing Library', () => {
  test('Shows "Hello world!"', () => {
    render(
      <App />
    );
    expect(2 + 2).toBe(4);
  });
});
