declare module '*.png';
declare module '*.jpg';
declare module '*.svg';

export {};
declare global {
    interface Window {
        isFilterOpened: boolean;
    }
};