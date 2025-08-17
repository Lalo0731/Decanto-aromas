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

import arabe1 from '../images/OudRoyal.webp';
import arabe2 from '../images/AmberOudGold.jpg';
import arabe3 from '../images/MuskAlTahara.avif';

import disenador1 from '../images/JeanPaul.webp';

import proximo1 from '../images/perfumNew1.webp';
import proximo2 from '../images/perfumNew2.jpg';
import proximo3 from '../images/perfumNew3.webp';
import proximo4 from '../images/perfumNew4.jpg';
import proximo5 from '../images/perfumNew5.jpeg';
import proximo6 from '../images/perfumNew6.webp';
import proximo7 from '../images/perfumNew7.jpg';


const perfumes = [
  {
    id: '1',
    name: 'Perfume Dubai Citrine Unisex de Bond No 9 EDP 100ML',
    description: 'Una fragancia intensa con notas cítricas y ambarinas.',
    category: 'arabe', // o 'diseñador'
    oldPrice: 6800,
    price: 5500,
    isNew: true,
    images: [perfume1, perfumDetail1, perfumDetail1_1]
  },
  {
    id: '2',
    name: 'Perfume Dos',
    description: 'Notas amaderadas profundas para una personalidad fuerte.',
    category: 'diseñador',
    oldPrice: 1500,
    price: 1200,
    isNew: true,
    // isNew: false,
    images: [perfume2, perfumDetail2_1, perfumDetail2_2]
  },
  {
    id: '3',
    name: 'Perfume Tres',
    description: 'Aromas frescos y florales que inspiran libertad.',
    category: 'arabe',
    oldPrice: 1300,
    price: 1050,
    isNew: true,
    images: [perfume3, perfumDetail3_1, perfumDetail3_2]
  },
  {
    id: '4',
    name: 'Perfume Cuatro',
    description: 'Combina lo dulce y lo exótico con elegancia.',
    category: 'diseñador',
    oldPrice: 1400,
    price: 1100,
    isNew: true,
    images: [perfume4, perfumDetail4_1, perfumDetail4_2]
  },
  {
    id: '5',
    name: 'Oud Royal',
    description: 'Una fragancia intensa con toques de madera y especias.',
    category: 'arabe',
    oldPrice: 450,
    price: 350,
    isNew: false,
    images: [arabe1]
  },
  {
    id: '6',
    name: 'Musk Al Tahara',
    description: 'Aroma limpio y elegante para uso diario.',
    category: 'arabe',
    oldPrice: 350,
    price: 280,
    isNew: false,
    images: [arabe3]
  },
  {
    id: '7',
    name: 'Amber Oud Gold',
    description: 'Dulce y amaderado, ideal para ocasiones especiales.',
    category: 'arabe',
    oldPrice: 500,
    price: 400,
    isNew: false,
    images: [arabe2]
  },
  {
    id: '8',
    name: 'Jean Paul Gaultier Le Male Elixir Parfum',
    description: 'Dulce y amaderado, ideal para ocasiones especiales.',
    category: 'diseñador',
    oldPrice: 4000,
    price: 3300,
    isNew: false,
    images: [disenador1]
  },
  {
    id: '9',
    name: 'Sauvage - Christian Dior - 100ml EDP',
    description: 'Eau de parfum - notas cítricas y avainilladas - recargable.',
    category: 'next',
    oldPrice: 7000,
    price: 6000,
    isNew: false,
    images: [proximo1,proximo2,proximo3]
  },
  {
    id: '10',
    name: 'Bleu - Chanel - 100ml EDT',
    description: 'Bleu de Chanel de Chanel es una fragancia de la familia olfativa Amaderada Aromática, lanzada en 2010.',
    category: 'next',
    oldPrice: 6000,
    price: 4500,
    isNew: false,
    images: [proximo4,proximo5,proximo3]
  },
  {
    id: '11',
    name: 'Bleu - Chanel - 100ml EDT',
    description: 'Bleu de Chanel de Chanel es una fragancia de la familia olfativa Amaderada Aromática, lanzada en 2010.',
    category: 'next',
    oldPrice: 6000,
    price: 4500,
    isNew: false,
    images: [proximo4,proximo5,proximo3]
  },
  {
    id: '12',
    name: 'Acqua di Gio Parfum',
    description: 'El secreto de los mejores perfumes es la combinación perfecta entre ingredientes que se potencian entre sí y hacen que sea posible trasladarnos a lugares únicos.',
    category: 'next',
    oldPrice: 6000,
    price: 4500,
    isNew: false,
    images: [proximo5,proximo6]
  },
  {
    id: '13',
    name: 'Acqua di Gio Parfum',
    description: 'El secreto de los mejores perfumes es la combinación perfecta entre ingredientes que se potencian entre sí y hacen que sea posible trasladarnos a lugares únicos.',
    category: 'next',
    oldPrice: 6000,
    price: 4500,
    isNew: false,
    images: [proximo5,proximo6]
  }
  ,
  {
    id: '14',
    name: 'Acqua di Gio Parfum',
    description: 'El secreto de los mejores perfumes es la combinación perfecta entre ingredientes que se potencian entre sí y hacen que sea posible trasladarnos a lugares únicos.',
    category: 'next',
    oldPrice: 6000,
    price: 4500,
    isNew: false,
    images: [proximo5,proximo6]
  },
  {
    id: '15',
    name: 'Acqua di Gio Parfum',
    description: 'El secreto de los mejores perfumes es la combinación perfecta entre ingredientes que se potencian entre sí y hacen que sea posible trasladarnos a lugares únicos.',
    category: 'next',
    oldPrice: 6000,
    price: 4500,
    isNew: false,
    images: [proximo5,proximo6]
  }
];

export default perfumes;

