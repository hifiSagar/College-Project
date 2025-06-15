import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          nav: {
            home: 'Home',
            products: 'Our Products',
            harvest: 'Harvest Calendar',
            contact: 'Contact',
          },
          hero: {
            title: 'Fresh Organic Produce',
            subtitle: 'From Our Fields to Your Table',
          },
          products: {
            title: 'Our Organic Products',
            addToCart: 'Add to Cart',
          },
          harvest: {
            title: 'Harvest Calendar',
            inSeason: 'In Season',
            coming: 'Coming Soon',
          },
          contact: {
            title: 'Contact Us',
            name: 'Name',
            email: 'Email',
            message: 'Message',
            send: 'Send Message',
          },
        },
      },
      es: {
        translation: {
          nav: {
            home: 'Inicio',
            products: 'Productos',
            harvest: 'Calendario',
            contact: 'Contacto',
          },
          hero: {
            title: 'Productos Orgánicos Frescos',
            subtitle: 'De Nuestros Campos a Tu Mesa',
          },
          products: {
            title: 'Nuestros Productos Orgánicos',
            addToCart: 'Añadir',
          },
          harvest: {
            title: 'Calendario de Cosecha',
            inSeason: 'En Temporada',
            coming: 'Próximamente',
          },
          contact: {
            title: 'Contáctanos',
            name: 'Nombre',
            email: 'Correo',
            message: 'Mensaje',
            send: 'Enviar Mensaje',
          },
        },
      },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;