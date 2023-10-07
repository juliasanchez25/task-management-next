type Theme = 'dark' | 'light';
export class ThemeService {
  static getTheme(): Theme {
    if (typeof window === 'undefined') return 'light';
    const theme = (localStorage.getItem('theme') || 'light') as Theme;
    return theme;
  }

  static setTheme(theme: Theme) {
    if (typeof window === 'undefined') return;
    localStorage.setItem('theme', theme);
  }
}
