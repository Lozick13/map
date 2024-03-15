import { ErrorRepository } from '../app';

test('ErrorRepository addError()', () => {
  const errors = new ErrorRepository();

  errors.addError(42, 'Ответ на главный вопрос жизни, вселенной и всего такого');

  const result = errors.errors.has(42);

  expect(result).toBe(true);
});
test('ErrorRepository translate() true', () => {
  const errors = new ErrorRepository();
  const expected = 'Ответ на главный вопрос жизни, вселенной и всего такого';

  errors.addError(42, expected);

  const result = errors.translate(42);

  expect(result).toBe(expected);
});
test('ErrorRepository translate() false', () => {
  const errors = new ErrorRepository();

  const result = errors.translate(42);

  expect(result).toBe('Unknown error');
});
