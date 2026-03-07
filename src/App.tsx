import { useState, useEffect } from 'react';
import { PortfolioPage } from './pages/PortfolioPage';
import { LanguageProvider } from './contexts/LanguageContext';

export function App() {
  const [isDark, setIsDark] = useState(false);
  const [language, setLanguage] = useState<'en' | 'pt'>('pt');

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
    setLanguage(language === 'en' ? 'pt' : 'en');
  };

  return (
    <LanguageProvider language={language} toggleLanguage={toggleLanguage}>
      <PortfolioPage toggleDark={toggleDark} isDark={isDark} />
    </LanguageProvider>
  );
}