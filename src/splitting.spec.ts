import { describe, expect, it } from 'vitest';
import { splitting } from './splitting.js';

describe('splitting', () => {
  it('joins a single element without a separator', () => {
    expect(splitting(['test'])).toBe('test');
  });

  it('joins multiple elements with ", " separator', () => {
    expect(splitting(['a', 'b', 'c'])).toBe('a, b, c');
  });

  it('returns an empty string for an empty array', () => {
    expect(splitting([])).toBe('');
  });
});
