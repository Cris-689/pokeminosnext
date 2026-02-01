'use client'
import { createContext, useContext, useState } from 'react';
import { getDictionary } from './diccionario';
type LanguageContextType = {
    idioma: string;
    setIdioma: (lang: string) => void;
    dict: any;
};
const LanguageContext = createContext<LanguageContextType | null>(null);
export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [idioma, setIdioma] = useState('en');
    const dict = getDictionary(idioma);
    return (
        <LanguageContext.Provider value={{ idioma, setIdioma, dict }}>
            {children}
        </LanguageContext.Provider>
    );
}
export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage debe usarse dentro de LanguageProvider');
    }
    return context;
}