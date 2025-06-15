import React from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar } from 'lucide-react';

const HarvestCalendar = () => {
  const { t } = useTranslation();

  const harvestData = [
    { month: 'March', vegetables: ['Spinach', 'Lettuce', 'Peas'] },
    { month: 'April', vegetables: ['Carrots', 'Radishes'] },
    { month: 'May', vegetables: ['Tomatoes', 'Cucumbers'] },
    { month: 'June', vegetables: ['Zucchini', 'Bell Peppers'] },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center mb-6">
        <Calendar className="w-6 h-6 text-green-600 mr-2" />
        <h2 className="text-2xl font-bold text-gray-800">{t('harvest.title')}</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {harvestData.map((month) => (
          <div key={month.month} className="border rounded-lg p-4">
            <h3 className="font-semibold text-lg mb-2">{month.month}</h3>
            <ul className="space-y-1">
              {month.vegetables.map((veg) => (
                <li key={veg} className="text-gray-600 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  {veg}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HarvestCalendar;