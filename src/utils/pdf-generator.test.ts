import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { downloadCV, openCV } from './pdf-generator';

describe('downloadCV', () => {
  let mockLink: HTMLAnchorElement;
  let appendChildSpy: ReturnType<typeof vi.spyOn>;
  let removeChildSpy: ReturnType<typeof vi.spyOn>;
  let clickSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    // Create a mock link element
    mockLink = document.createElement('a');
    
    // Spy on click method
    clickSpy = vi.spyOn(mockLink, 'click').mockImplementation(() => {});
    
    // Mock document.createElement to return our mock link
    vi.spyOn(document, 'createElement').mockReturnValue(mockLink);
    
    // Spy on appendChild and removeChild
    appendChildSpy = vi.spyOn(document.body, 'appendChild').mockImplementation(() => mockLink);
    removeChildSpy = vi.spyOn(document.body, 'removeChild').mockImplementation(() => mockLink);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('downloads Spanish CV', () => {
    downloadCV('es');

    expect(document.createElement).toHaveBeenCalledWith('a');
    expect(mockLink.href).toContain('/MarcoCV2026_ES.pdf');
    expect(mockLink.download).toBe('MarcoCV2026_ES.pdf');
    expect(appendChildSpy).toHaveBeenCalledWith(mockLink);
    expect(clickSpy).toHaveBeenCalled();
    expect(removeChildSpy).toHaveBeenCalledWith(mockLink);
  });

  it('downloads English CV', () => {
    downloadCV('en');

    expect(document.createElement).toHaveBeenCalledWith('a');
    expect(mockLink.href).toContain('/MarcoCV2026.pdf');
    expect(mockLink.download).toBe('MarcoCV2026.pdf');
    expect(appendChildSpy).toHaveBeenCalledWith(mockLink);
    expect(clickSpy).toHaveBeenCalled();
    expect(removeChildSpy).toHaveBeenCalledWith(mockLink);
  });

  it('creates and removes link element correctly', () => {
    downloadCV('es');

    expect(appendChildSpy).toHaveBeenCalledTimes(1);
    expect(clickSpy).toHaveBeenCalledTimes(1);
    expect(removeChildSpy).toHaveBeenCalledTimes(1);
  });

  it('sets correct attributes on link element', () => {
    downloadCV('en');

    expect(mockLink.href).toBeTruthy();
    expect(mockLink.download).toBeTruthy();
    expect(mockLink.download).toMatch(/^MarcoCV2026(_ES)?\.pdf$/);
  });
});

describe('openCV', () => {
  let windowOpenSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    windowOpenSpy = vi.spyOn(window, 'open').mockImplementation(() => null);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('opens Spanish CV in new tab', () => {
    openCV('es');

    expect(windowOpenSpy).toHaveBeenCalledWith(
      '/MarcoCV2026_ES.pdf',
      '_blank',
      'noopener,noreferrer'
    );
  });

  it('opens English CV in new tab', () => {
    openCV('en');

    expect(windowOpenSpy).toHaveBeenCalledWith(
      '/MarcoCV2026.pdf',
      '_blank',
      'noopener,noreferrer'
    );
  });

  it('uses correct security attributes', () => {
    openCV('es');

    const callArgs = windowOpenSpy.mock.calls[0];
    expect(callArgs[2]).toContain('noopener');
    expect(callArgs[2]).toContain('noreferrer');
  });

  it('opens in new tab', () => {
    openCV('en');

    const callArgs = windowOpenSpy.mock.calls[0];
    expect(callArgs[1]).toBe('_blank');
  });
});
