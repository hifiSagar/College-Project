import React from 'react';
import { useTranslation } from 'react-i18next';
import { Sprout, ShoppingCart } from 'lucide-react';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="bg-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Sprout className="h-8 w-8 mr-2" />
            <span className="font-bold text-xl">EcoHarvest</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-green-200">{t('nav.home')}</a>
            <a href="#products" className="hover:text-green-200">{t('nav.products')}</a>
            <a href="#harvest" className="hover:text-green-200">{t('nav.harvest')}</a>
            <a href="#contact" className="hover:text-green-200">{t('nav.contact')}</a>
            
            <div className="flex items-center ml-4">
              <button
                onClick={() => changeLanguage('en')}
                className="px-2 py-1 text-sm rounded hover:bg-green-600"
              >
                EN
              </button>
              <button
                onClick={() => changeLanguage('es')}
                className="px-2 py-1 text-sm rounded hover:bg-green-600"
              >
                ES
              </button>
            </div>
            
            <button className="relative p-2 hover:bg-green-600 rounded-full">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full h-5 w-5 text-xs flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;