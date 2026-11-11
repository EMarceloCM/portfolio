import { useState, useEffect } from 'react';
import { PortfolioPage } from './pages/PortfolioPage';
import { LanguageProvider, Language, nextLanguage } from './contexts/LanguageContext';

export function App() {
  const [isDark, setIsDark] = useState(false);
  const [language, setLanguage] = useState<Language>('pt');

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleDark = () => {
    console.log('Toggling dark mode');
    setIsDark(!isDark);
  };

  const toggleLanguage = () => {
    console.log('Toggling language');
    setLanguage(nextLanguage(language));
  };

  return (
    <LanguageProvider language={language} toggleLanguage={toggleLanguage}>
      <PortfolioPage toggleDark={toggleDark} isDark={isDark} />
    </LanguageProvider>
  );
}