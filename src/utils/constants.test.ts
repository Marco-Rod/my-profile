import { describe, it, expect } from 'vitest';
import {
  NAVIGATION_SECTIONS,
  COLORS,
  BREAKPOINTS,
  ANIMATION_DURATIONS,
  EASING,
  ANIMATION_VARIANTS,
  VIEWPORT_CONFIG,
  Z_INDEX,
  SCROLL_CONFIG,
  INTERSECTION_OBSERVER_CONFIG,
  API_ENDPOINTS,
  SOCIAL_LINKS,
  FEATURES,
} from './constants';

describe('NAVIGATION_SECTIONS', () => {
  it('exports navigation sections array', () => {
    expect(NAVIGATION_SECTIONS).toBeDefined();
    expect(Array.isArray(NAVIGATION_SECTIONS)).toBe(true);
  });

  it('contains expected section objects', () => {
    expect(NAVIGATION_SECTIONS.length).toBeGreaterThan(0);
    NAVIGATION_SECTIONS.forEach(section => {
      expect(section).toHaveProperty('id');
      expect(section).toHaveProperty('label');
      expect(typeof section.id).toBe('string');
      expect(typeof section.label).toBe('string');
    });
  });

  it('includes home section', () => {
    const homeSection = NAVIGATION_SECTIONS.find(s => s.id === 'home');
    expect(homeSection).toBeDefined();
    expect(homeSection?.label).toBe('nav.home');
  });

  it('includes all expected sections', () => {
    const expectedIds = ['home', 'about', 'experience', 'projects', 'technologies', 'education', 'contact'];
    const actualIds = NAVIGATION_SECTIONS.map(s => s.id);
    
    expectedIds.forEach(id => {
      expect(actualIds).toContain(id);
    });
  });
});

describe('COLORS', () => {
  it('exports color palette', () => {
    expect(COLORS).toBeDefined();
    expect(typeof COLORS).toBe('object');
  });

  it('contains primary colors', () => {
    expect(COLORS.primary).toBeDefined();
    expect(COLORS.secondary).toBeDefined();
    expect(COLORS.accent).toBeDefined();
  });

  it('contains background colors', () => {
    expect(COLORS.bg).toBeDefined();
    expect(COLORS.bg.dark).toBeDefined();
    expect(COLORS.bg.light).toBeDefined();
    expect(COLORS.bg.card).toBeDefined();
  });

  it('contains text colors', () => {
    expect(COLORS.text).toBeDefined();
    expect(COLORS.text.primary).toBeDefined();
    expect(COLORS.text.secondary).toBeDefined();
    expect(COLORS.text.muted).toBeDefined();
  });

  it('contains status colors', () => {
    expect(COLORS.success).toBeDefined();
    expect(COLORS.warning).toBeDefined();
    expect(COLORS.error).toBeDefined();
  });

  it('colors are valid hex codes', () => {
    const hexRegex = /^#[0-9A-Fa-f]{6}$/;
    expect(hexRegex.test(COLORS.primary)).toBe(true);
    expect(hexRegex.test(COLORS.bg.dark)).toBe(true);
    expect(hexRegex.test(COLORS.text.primary)).toBe(true);
  });
});

describe('BREAKPOINTS', () => {
  it('exports breakpoint values', () => {
    expect(BREAKPOINTS).toBeDefined();
    expect(typeof BREAKPOINTS).toBe('object');
  });

  it('contains all responsive breakpoints', () => {
    expect(BREAKPOINTS.mobile).toBe(640);
    expect(BREAKPOINTS.tablet).toBe(768);
    expect(BREAKPOINTS.desktop).toBe(1024);
    expect(BREAKPOINTS.wide).toBe(1280);
    expect(BREAKPOINTS.ultrawide).toBe(1536);
  });

  it('breakpoints are in ascending order', () => {
    const values = Object.values(BREAKPOINTS);
    for (let i = 1; i < values.length; i++) {
      expect(values[i]).toBeGreaterThan(values[i - 1]);
    }
  });
});

describe('ANIMATION_DURATIONS', () => {
  it('exports animation durations', () => {
    expect(ANIMATION_DURATIONS).toBeDefined();
    expect(typeof ANIMATION_DURATIONS).toBe('object');
  });

  it('contains duration values', () => {
    expect(ANIMATION_DURATIONS.fast).toBe(150);
    expect(ANIMATION_DURATIONS.normal).toBe(300);
    expect(ANIMATION_DURATIONS.slow).toBe(500);
    expect(ANIMATION_DURATIONS.verySlow).toBe(1000);
  });

  it('durations are in ascending order', () => {
    expect(ANIMATION_DURATIONS.fast).toBeLessThan(ANIMATION_DURATIONS.normal);
    expect(ANIMATION_DURATIONS.normal).toBeLessThan(ANIMATION_DURATIONS.slow);
    expect(ANIMATION_DURATIONS.slow).toBeLessThan(ANIMATION_DURATIONS.verySlow);
  });
});

describe('EASING', () => {
  it('exports easing functions', () => {
    expect(EASING).toBeDefined();
    expect(typeof EASING).toBe('object');
  });

  it('contains easing function strings', () => {
    expect(EASING.easeIn).toBeDefined();
    expect(EASING.easeOut).toBeDefined();
    expect(EASING.easeInOut).toBeDefined();
    expect(EASING.spring).toBeDefined();
  });

  it('easing functions are cubic-bezier strings', () => {
    expect(EASING.easeIn).toContain('cubic-bezier');
    expect(EASING.easeOut).toContain('cubic-bezier');
    expect(EASING.easeInOut).toContain('cubic-bezier');
    expect(EASING.spring).toContain('cubic-bezier');
  });
});

describe('ANIMATION_VARIANTS', () => {
  it('exports animation variants', () => {
    expect(ANIMATION_VARIANTS).toBeDefined();
    expect(typeof ANIMATION_VARIANTS).toBe('object');
  });

  it('contains fade in variant', () => {
    expect(ANIMATION_VARIANTS.fadeIn).toBeDefined();
    expect(ANIMATION_VARIANTS.fadeIn.hidden).toHaveProperty('opacity', 0);
    expect(ANIMATION_VARIANTS.fadeIn.visible).toHaveProperty('opacity', 1);
  });

  it('contains slide variants', () => {
    expect(ANIMATION_VARIANTS.slideUp).toBeDefined();
    expect(ANIMATION_VARIANTS.slideInLeft).toBeDefined();
    expect(ANIMATION_VARIANTS.slideInRight).toBeDefined();
  });

  it('contains scale and stagger variants', () => {
    expect(ANIMATION_VARIANTS.scaleIn).toBeDefined();
    expect(ANIMATION_VARIANTS.staggerContainer).toBeDefined();
  });

  it('variants have proper structure', () => {
    Object.values(ANIMATION_VARIANTS).forEach(variant => {
      expect(variant).toHaveProperty('hidden');
      expect(variant).toHaveProperty('visible');
    });
  });
});

describe('VIEWPORT_CONFIG', () => {
  it('exports viewport configuration', () => {
    expect(VIEWPORT_CONFIG).toBeDefined();
    expect(typeof VIEWPORT_CONFIG).toBe('object');
  });

  it('contains viewport settings', () => {
    expect(VIEWPORT_CONFIG.once).toBe(true);
    expect(VIEWPORT_CONFIG.amount).toBe(0.3);
  });
});

describe('Z_INDEX', () => {
  it('exports z-index values', () => {
    expect(Z_INDEX).toBeDefined();
    expect(typeof Z_INDEX).toBe('object');
  });

  it('contains all layer values', () => {
    expect(Z_INDEX.base).toBe(0);
    expect(Z_INDEX.dropdown).toBeDefined();
    expect(Z_INDEX.sticky).toBeDefined();
    expect(Z_INDEX.modal).toBeDefined();
    expect(Z_INDEX.tooltip).toBeDefined();
  });

  it('z-index values are in ascending order', () => {
    expect(Z_INDEX.base).toBeLessThan(Z_INDEX.dropdown);
    expect(Z_INDEX.dropdown).toBeLessThan(Z_INDEX.sticky);
    expect(Z_INDEX.sticky).toBeLessThan(Z_INDEX.fixed);
    expect(Z_INDEX.fixed).toBeLessThan(Z_INDEX.modal);
  });
});

describe('SCROLL_CONFIG', () => {
  it('exports scroll configuration', () => {
    expect(SCROLL_CONFIG).toBeDefined();
    expect(typeof SCROLL_CONFIG).toBe('object');
  });

  it('contains scroll settings', () => {
    expect(SCROLL_CONFIG.offset).toBe(80);
    expect(SCROLL_CONFIG.smooth).toBe(true);
    expect(SCROLL_CONFIG.behavior).toBe('smooth');
  });
});

describe('INTERSECTION_OBSERVER_CONFIG', () => {
  it('exports intersection observer configuration', () => {
    expect(INTERSECTION_OBSERVER_CONFIG).toBeDefined();
    expect(typeof INTERSECTION_OBSERVER_CONFIG).toBe('object');
  });

  it('contains observer settings', () => {
    expect(INTERSECTION_OBSERVER_CONFIG.threshold).toBe(0.1);
    expect(INTERSECTION_OBSERVER_CONFIG.rootMargin).toBeDefined();
    expect(typeof INTERSECTION_OBSERVER_CONFIG.rootMargin).toBe('string');
  });
});

describe('API_ENDPOINTS', () => {
  it('exports API endpoints', () => {
    expect(API_ENDPOINTS).toBeDefined();
    expect(typeof API_ENDPOINTS).toBe('object');
  });

  it('contains endpoint URLs', () => {
    expect(API_ENDPOINTS.contact).toBeDefined();
    expect(API_ENDPOINTS.analytics).toBeDefined();
  });
});

describe('SOCIAL_LINKS', () => {
  it('exports social media links', () => {
    expect(SOCIAL_LINKS).toBeDefined();
    expect(typeof SOCIAL_LINKS).toBe('object');
  });

  it('contains social platform links', () => {
    expect(SOCIAL_LINKS.github).toBeDefined();
    expect(SOCIAL_LINKS.linkedin).toBeDefined();
    expect(SOCIAL_LINKS.twitter).toBeDefined();
    expect(SOCIAL_LINKS.email).toBeDefined();
  });

  it('links are strings', () => {
    Object.values(SOCIAL_LINKS).forEach(link => {
      expect(typeof link).toBe('string');
    });
  });
});

describe('FEATURES', () => {
  it('exports feature flags', () => {
    expect(FEATURES).toBeDefined();
    expect(typeof FEATURES).toBe('object');
  });

  it('contains feature flags', () => {
    expect(FEATURES.darkMode).toBeDefined();
    expect(FEATURES.analytics).toBeDefined();
    expect(FEATURES.contactForm).toBeDefined();
    expect(FEATURES.downloadCV).toBeDefined();
    expect(FEATURES.animations).toBeDefined();
  });

  it('feature flags are booleans', () => {
    Object.values(FEATURES).forEach(flag => {
      expect(typeof flag).toBe('boolean');
    });
  });
});
