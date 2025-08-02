import perfume1 from '../images/perfume1.webp';
import perfumDetail1 from '../images/perfumDetail1.webp';
import perfumDetail1_1 from '../images/perfumDetail2.webp';

import perfume2 from '../images/perfume2.webp';
import perfumDetail2_1 from '../images/perfumDetail2_1.jpg';
import perfumDetail2_2 from '../images/perfumDetail2_2.webp';

import perfume3 from '../images/perfume3.webp';
import perfumDetail3_1 from '../images/perfumDetail3_1.jpg';
import perfumDetail3_2 from '../images/perfumDetail3_2.jpg';

import perfume4 from '../images/perfume4.webp';
import perfumDetail4_1 from '../images/perfumDetail4_1.avif';
import perfumDetail4_2 from '../images/perfumDetail4_2.jpg';


const products = [
    {
      id: '1',
      name: 'Perfume Dubai Citrine Unisex de Bond No 9 EDP 100ML',
      price: 950,
      description: 'Una fragancia intensa con notas cítricas y ambarinas.',
      priceBefore: 'antes: 6,800',
      priceNow: 'ahora: 5,500',
      images: [perfume1, perfumDetail1, perfumDetail1_1, perfume1]
    },
    {
      id: '2',
      name: 'Perfume Dos',
      price: 1200,
      description: 'Notas amaderadas profundas para una personalidad fuerte.',
      images: [perfume2, perfumDetail2_1, perfumDetail2_2, perfume2]

    },
    {
      id: '3',
      name: 'Perfume Tres',
      price: 1050,
      description: 'Aromas frescos y florales que inspiran libertad.',
      images: [perfume3, perfumDetail3_1, perfumDetail3_2, perfume3]
    },
    {
      id: '4',
      name: 'Perfume Cuatro',
      price: 1100,
      description: 'Combina lo dulce y lo exótico con elegancia.',
      images: [perfume4, perfumDetail4_1, perfumDetail4_2, perfume4]
    }
  ];
  
  export default products;
  