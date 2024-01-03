export type Theme = 'dark' | 'light';

export interface UserReducer {
    currentTheme: Theme;
    colors: { [key: string]: string };
}