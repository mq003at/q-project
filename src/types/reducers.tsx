export type Theme = 'dark' | 'light';

export interface UserReducer {
    currentTheme: Theme;
    colors: ColorPalettes;
}

export type ColorPalettes = {
    main: string;
    sub: string;
    slayout: string;
    slayout2: string;
    slayout3: string;
    mlayout: string;
    pcolor: string;
    scolor: string;
    calend: string;
    calend2: string;
    scolor2: string;
    special: string;
    alert: string;
    greyish: string;
}