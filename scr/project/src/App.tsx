import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import HarvestCalendar from './components/HarvestCalendar';
import ContactForm from './components/ContactForm';
import { Leaf } from 'lucide-react';

function App() {
  const { t } = useTranslation();

  const products = [
    {
      name: 'Fresh Tomatoes',
      price: 4.99,
      image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea',
      harvestTime: 'June - September',
    },
    {
      name: 'Organic Lettuce',
      price: 2.99,
      image: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1',
      harvestTime: 'March - November',
    },
    {
      name: 'Bell Peppers',
      price: 3.99,
      image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83',
      harvestTime: 'July - October',
    },
    {
      name: 'Fresh Carrots',
      price: 2.49,
      image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37',
      harvestTime: 'April - November',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1574943320219-553eb213f72d)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full flex items-center justify-center text-center text-white">
          <div>
            <h1 className="text-5xl font-bold mb-4">{t('hero.title')}</h1>
            <p className="text-xl">{t('hero.subtitle')}</p>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <section id="products" className="py-16 px-4 max-w-7xl mx-auto">
        <div className="flex items-center justify-center mb-12">
          <Leaf className="w-8 h-8 text-green-600 mr-3" />
          <h2 className="text-3xl font-bold text-gray-800">{t('products.title')}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </section>

      {/* Harvest Calendar Section */}
      <section id="harvest" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <HarvestCalendar />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 max-w-7xl mx-auto">
        <ContactForm />
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2024 EcoHarvest Organic Farm. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;