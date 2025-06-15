import React from 'react';
import { useTranslation } from 'react-i18next';
import { ShoppingBasket } from 'lucide-react';

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  harvestTime: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, image, harvestTime }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-green-600 font-bold">${price.toFixed(2)}/kg</p>
        <p className="text-sm text-gray-600">Harvest: {harvestTime}</p>
        <button className="mt-3 w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 flex items-center justify-center">
          <ShoppingBasket className="w-4 h-4 mr-2" />
          {t('products.addToCart')}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;