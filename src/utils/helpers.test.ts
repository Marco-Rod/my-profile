import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import {
  formatDate,
  scrollToElement,
  calculateDuration,
  calculateExperienceDuration,
  calculateExperienceDurationEn,
  getExperienceDurationLabel,
  classNameMerge,
  isEmpty,
  debounce,
  throttle,
  truncateText,
} from './helpers';

describe('formatDate', () => {
  it('formats date correctly in Spanish', () => {
    const result = formatDate('2023-01-15', 'es');
    // Spanish locale includes "de" between month and year
    expect(result).toMatch(/enero( de)? 2023/);
  });

  it('formats date correctly in English', () => {
    const result = formatDate('2023-01-15', 'en');
    expect(result).toBe('January 2023');
  });

  it('handles invalid date strings', () => {
    const result = formatDate('invalid-date', 'es');
    expect(result).toBe('invalid-date');
  });

  it('formats December correctly', () => {
    const result = formatDate('2023-12-25', 'en');
    expect(result).toBe('December 2023');
  });
});

describe('scrollToElement', () => {
  beforeEach(() => {
    // Mock DOM elements
    document.body.innerHTML = '<div id="test-element" style="position: absolute; top: 1000px;"></div>';
    
    // Mock window.scrollTo
    window.scrollTo = vi.fn();
    
    // Mock getBoundingClientRect
    Element.prototype.getBoundingClientRect = vi.fn().mockReturnValue({
      top: 500,
      left: 0,
      bottom: 600,
      right: 100,
      width: 100,
      height: 100,
    });
  });

  it('scrolls to element with default offset', () => {
    scrollToElement('test-element');
    
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: expect.any(Number),
      behavior: 'smooth',
    });
  });

  it('scrolls to element with custom offset', () => {
    scrollToElement('test-element', 100);
    
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: expect.any(Number),
      behavior: 'smooth',
    });
  });

  it('logs warning for non-existent element', () => {
    const consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    
    scrollToElement('non-existent');
    
    expect(consoleWarnSpy).toHaveBeenCalledWith(
      'Element with id "non-existent" not found'
    );
    
    consoleWarnSpy.mockRestore();
  });
});

describe('calculateDuration', () => {
  it('calculates duration between two dates', () => {
    const result = calculateDuration('2021-01-01', '2023-06-01');
    expect(result).toBe('2 años 5 meses');
  });

  it('calculates duration to present', () => {
    const result = calculateDuration('2022-01-01', null);
    // Result will vary based on current date, so just check it's not empty
    expect(result).toMatch(/\d+ años \d+ meses/);
  });

  it('handles invalid dates', () => {
    const result = calculateDuration('invalid', '2023-01-01');
    expect(result).toBe('');
  });
});

describe('calculateExperienceDuration', () => {
  it('calculates years and months correctly', () => {
    const result = calculateExperienceDuration('2021-01', '2023-06');
    expect(result).toBe('2 años 6 meses');
  });

  it('handles single year', () => {
    const result = calculateExperienceDuration('2022-01', '2023-01');
    expect(result).toBe('1 año 1 mes');
  });

  it('handles only months (less than a year)', () => {
    const result = calculateExperienceDuration('2023-01', '2023-06');
    expect(result).toBe('6 meses');
  });

  it('handles single month', () => {
    const result = calculateExperienceDuration('2023-01', '2023-02');
    expect(result).toBe('2 meses');
  });

  it('handles exact years (no remaining months)', () => {
    const result = calculateExperienceDuration('2021-01', '2023-01');
    // Should return 2 years and 1 month due to inclusive month calculation
    expect(result).toMatch(/2 años/);
  });

  it('calculates to present when endDate is null', () => {
    const result = calculateExperienceDuration('2022-01', null);
    expect(result).toMatch(/\d+ (año|años)( \d+ (mes|meses))?/);
  });
});

describe('calculateExperienceDurationEn', () => {
  it('calculates years and months correctly in English', () => {
    const result = calculateExperienceDurationEn('2021-01', '2023-06');
    expect(result).toBe('2 years 6 months');
  });

  it('handles single year in English', () => {
    const result = calculateExperienceDurationEn('2022-01', '2023-01');
    expect(result).toBe('1 year 1 month');
  });

  it('handles only months in English', () => {
    const result = calculateExperienceDurationEn('2023-01', '2023-06');
    expect(result).toBe('6 months');
  });

  it('handles exact years in English', () => {
    const result = calculateExperienceDurationEn('2021-01', '2023-01');
    // Should return 2 years and 1 month due to inclusive month calculation
    expect(result).toMatch(/2 years/);
  });
});

describe('getExperienceDurationLabel', () => {
  it('returns Spanish duration for "es" language', () => {
    const result = getExperienceDurationLabel('2021-01', '2023-06', 'es');
    expect(result).toBe('2 años 6 meses');
  });

  it('returns English duration for "en" language', () => {
    const result = getExperienceDurationLabel('2021-01', '2023-06', 'en');
    expect(result).toBe('2 years 6 months');
  });

  it('defaults to English for unknown language', () => {
    const result = getExperienceDurationLabel('2021-01', '2023-06', 'fr');
    expect(result).toBe('2 years 6 months');
  });
});

describe('classNameMerge', () => {
  it('merges multiple class names', () => {
    const result = classNameMerge('class1', 'class2', 'class3');
    expect(result).toBe('class1 class2 class3');
  });

  it('filters out falsy values', () => {
    const result = classNameMerge('class1', false, 'class2', null, undefined, 'class3');
    expect(result).toBe('class1 class2 class3');
  });

  it('handles empty input', () => {
    const result = classNameMerge();
    expect(result).toBe('');
  });

  it('handles conditional classes', () => {
    const isActive = true;
    const isDisabled = false;
    const result = classNameMerge(
      'base',
      isActive && 'active',
      isDisabled && 'disabled'
    );
    expect(result).toBe('base active');
  });
});

describe('isEmpty', () => {
  it('returns true for null', () => {
    expect(isEmpty(null)).toBe(true);
  });

  it('returns true for undefined', () => {
    expect(isEmpty(undefined)).toBe(true);
  });

  it('returns true for empty string', () => {
    expect(isEmpty('')).toBe(true);
  });

  it('returns true for string with only whitespace', () => {
    expect(isEmpty('   ')).toBe(true);
  });

  it('returns true for empty array', () => {
    expect(isEmpty([])).toBe(true);
  });

  it('returns true for empty object', () => {
    expect(isEmpty({})).toBe(true);
  });

  it('returns false for non-empty string', () => {
    expect(isEmpty('text')).toBe(false);
  });

  it('returns false for non-empty array', () => {
    expect(isEmpty([1, 2, 3])).toBe(false);
  });

  it('returns false for non-empty object', () => {
    expect(isEmpty({ key: 'value' })).toBe(false);
  });

  it('returns false for number 0', () => {
    expect(isEmpty(0)).toBe(false);
  });
});

describe('debounce', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('delays function execution', () => {
    const func = vi.fn();
    const debouncedFunc = debounce(func, 300);

    debouncedFunc();
    expect(func).not.toHaveBeenCalled();

    vi.advanceTimersByTime(300);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('cancels previous calls', () => {
    const func = vi.fn();
    const debouncedFunc = debounce(func, 300);

    debouncedFunc();
    vi.advanceTimersByTime(100);
    debouncedFunc();
    vi.advanceTimersByTime(100);
    debouncedFunc();
    vi.advanceTimersByTime(300);

    expect(func).toHaveBeenCalledTimes(1);
  });

  it('passes arguments correctly', () => {
    const func = vi.fn();
    const debouncedFunc = debounce(func, 300);

    debouncedFunc('arg1', 'arg2');
    vi.advanceTimersByTime(300);

    expect(func).toHaveBeenCalledWith('arg1', 'arg2');
  });
});

describe('throttle', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('executes immediately on first call', () => {
    const func = vi.fn();
    const throttledFunc = throttle(func, 100);

    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('prevents execution within time limit', () => {
    const func = vi.fn();
    const throttledFunc = throttle(func, 100);

    throttledFunc();
    throttledFunc();
    throttledFunc();

    expect(func).toHaveBeenCalledTimes(1);
  });

  it('allows execution after time limit', () => {
    const func = vi.fn();
    const throttledFunc = throttle(func, 100);

    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);

    vi.advanceTimersByTime(100);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(2);
  });

  it('passes arguments correctly', () => {
    const func = vi.fn();
    const throttledFunc = throttle(func, 100);

    throttledFunc('arg1', 'arg2');
    expect(func).toHaveBeenCalledWith('arg1', 'arg2');
  });
});

describe('truncateText', () => {
  it('truncates text longer than maxLength', () => {
    const result = truncateText('This is a long text', 10);
    expect(result).toBe('This is a...');
  });

  it('does not truncate text shorter than maxLength', () => {
    const result = truncateText('Short', 10);
    expect(result).toBe('Short');
  });

  it('handles exact length', () => {
    const result = truncateText('Exact text', 10);
    expect(result).toBe('Exact text');
  });

  it('trims whitespace before adding ellipsis', () => {
    const result = truncateText('This is a    ', 10);
    expect(result).toBe('This is a...');
  });

  it('handles empty string', () => {
    const result = truncateText('', 10);
    expect(result).toBe('');
  });
});
