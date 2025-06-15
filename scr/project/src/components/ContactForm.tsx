import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6">{t('contact.title')}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">{t('contact.name')}</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">{t('contact.email')}</label>
            <input
              type="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">{t('contact.message')}</label>
            <textarea
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 flex items-center justify-center"
          >
            <Send className="w-4 h-4 mr-2" />
            {t('contact.send')}
          </button>
        </form>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6">Find Us</h2>
        <div className="space-y-4">
          <div className="flex items-center">
            <Phone className="w-5 h-5 text-green-600 mr-3" />
            <p>+1 (555) 123-4567</p>
          </div>
          <div className="flex items-center">
            <Mail className="w-5 h-5 text-green-600 mr-3" />
            <p>contact@ecoharvest.com</p>
          </div>
          <div className="flex items-center">
            <MapPin className="w-5 h-5 text-green-600 mr-3" />
            <p>123 Organic Farm Road<br />Green Valley, CA 95123</p>
          </div>
          <div className="mt-6">
            <img
              src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad"
              alt="Farm location"
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;