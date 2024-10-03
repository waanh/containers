import ErrorRepository from '../src/ErrorRepository';

test('translate existing error code', () => {
  const repo = new ErrorRepository();
  repo.add(404, 'Not Found');
  expect(repo.translate(404)).toBe('Not Found');
});

test('translate non-existing error code', () => {
  const repo = new ErrorRepository();
  expect(repo.translate(500)).toBe('Unknown error');
});
