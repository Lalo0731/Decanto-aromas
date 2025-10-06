import perfume1 from '../images/perfume1.webp';
import perfumDetail1 from '../images/perfumDetail1.webp';
import perfumDetail1_1 from '../images/perfumDetail2.webp';

import perfume2 from '../images/perfume2.webp';
import perfumDetail2_1 from '../images/perfumDetail2_1.jpg';
import perfumDetail2_2 from '../images/perfumDetail2_2.webp';

import perfume3 from '../images/perfume3.webp';
import perfumDetail3_1 from '../images/perfumDetail3_1.jpg';
import perfumDetail3_2 from '../images/perfumDetail3_2.jpg';

import arabe1 from '../images/OudRoyal.webp';
import arabe1_1 from '../images/arabe1.1.jpeg';
import arabe1_2 from '../images/arabe1.2.webp';
import AmberOudGold from '../images/AmberOudGold.jpg';
import AmberOudGold1 from '../images/AmberOudGold.webp'
import arabe3 from '../images/MuskAlTahara.avif';

import TheMostWanted from '../images/TheMostWanted.jpg';
import TheMostWanted1 from '../images/TheMostWanted.1.webp';
import TheMostWanted2 from '../images/TheMostWanted.2.avif';

import disenador1 from '../images/JeanPaul.webp';
import JeanPaulGaultierLeMaleElixir from '../images/JeanPaulGaultierLeMaleElixir.jpg';

import proximo1 from '../images/perfumNew1.webp';
import proximo2 from '../images/perfumNew2.jpg';
import proximo3 from '../images/perfumNew3.webp';
import proximo4 from '../images/perfumNew4.jpg';
import proximo5 from '../images/perfumNew5.jpeg';


const perfumes = [
  {
    id: '1',
    name: 'Perfume Dubai Citrine Unisex de Bond No 9 EDP 100ML',
    description: 'Una fragancia intensa con notas cítricas y ambarinas.',
    category: 'arabe', // o 'diseñador'
    oldPrice: 6800,
    price: 5500,
    isDecantOnly: true, //cuando quieras que un producto sea solo decants, 👈 esto marca que NO hay perfume completo
    priceDecant: 15,
    isDecant: true,
    isNew: true,
    available: true,
    images: [perfume1, perfumDetail1, perfumDetail1_1],
    accords: [
      "aromático", "fresco especiado", "cítrico", "florales",
      "amaderado", "dulce", "afrutados", "terrosos", "herbal", "almizclado"
    ],
    specialFor: ["Primavera", "Verano", "Día", "Noche"]
  },
  {
    id: '2',
    name: 'NauticaNautica Voyage de Nautica.',
    description: 'Fragancia masculina que evoca la frescura del océano y la libertad de la navegación.',
    category: 'diseñador',
    oldPrice: 1500,
    price: 1200,
    isDecantOnly: true,
    priceDecant: 15,
    isDecant: true,
    isNew: true,
    available: false,
    // isNew: false,
    images: [perfume2, perfumDetail2_1, perfumDetail2_2],
    accords: [
      "verde", "afrutados", "florales", "fresco",
      "atalcado", "acuático", "almizclado", "amaderado"
    ],
    specialFor: ["Primavera", "Verano", "Día", "Noche"]
  },
  {
    id: '3',
    name: 'Carolina Herrera Bad Boy Dazzling Garden',
    description: 'BAD BOY Dazzling Garden de Carolina Herrera es una edición limitada que celebra el icónico frasco en forma de rayo con un diseño morado vibrante...',
    category: 'arabe',
    // category: 'diseñador',
    oldPrice: 1050,
    price: 800,
    isDecantOnly: true,
    priceDecant: 15,
    isDecant: true,
    isNew: true,
    available: true,
    images: [perfume3, perfumDetail3_1, perfumDetail3_2],
    accords: [
      "cálido especiado", "cacao", "aromático", "fresco especiado",
      "avainillado", "dulce", "ámbar", "cítrico", "especiado suave"
    ],
    specialFor: ["Invierno", "Primavera", "Verano", "Otoño", "Día", "Noche"]
  },
  {
    id: '4',
    name: 'The Most Wanted Azzaro',
    description: 'The Most Wanted de Azzaro es una fragancia de la familia olfativa Oriental Especiada para Hombres. The Most Wanted se lanzó en 2021. La Nota de Salida es cardamomo; la Nota de Corazón es tófe; la Nota de Fondo es Amberwood.',
    category: 'diseñador',
    oldPrice: 2995,
    price: 2190,
    isDecantOnly: false,
    priceDecant: 0,
    isDecant: false,
    isNew: false,
    available: true,
    images: [TheMostWanted, TheMostWanted1, TheMostWanted2],
    accords: [
      "cálido especiado", "dulce", "ámbar", "amaderado",
      "caramelo", "aromático"
    ],
    specialFor: ["Invierno", "Primavera", "Verano", "Otoño", "Día", "Noche"]
  },
  {
    id: '5',
    name: 'Extracto De Perfume L Haya Oud Royale 100ml',
    description: 'Este extracto de perfume unisex combina la calidez del coñac con la especia de la canela y la suavidad de la vainilla, creando una fragancia envolvente y sofisticada.',
    category: 'arabe',
    oldPrice: 2800,
    price: 1500,
    isDecantOnly: false,
    priceDecant: 0,
    isDecant: false,
    isNew: false,
    available: true,
    images: [arabe1, arabe1_1, arabe1_2],
    accords: [
      "fresco especiado", "cálido especiado", "pachulí", "oud",
      "lavanda", "almizclado", "amaderado", "atalcado", "metálico", "terrosos"
    ],
    specialFor: ["Invierno", "Primavera", "Verano", "Otoño", "Día", "Noche"]
  },
  {
    id: '6',
    name: 'Musk Al Tahara',
    description: 'Aroma limpio y elegante para uso diario.',
    category: 'arabe',
    oldPrice: 350,
    price: 280,
    isDecantOnly: true,
    priceDecant: 15,
    isDecant: true,
    isNew: false,
    available: true,
    images: [arabe3],
    accords: [
      "cálido especiado", "cacao", "aromático", "fresco especiado",
      "avainillado", "dulce", "ámbar", "cítrico", "especiado suave"
    ],
    specialFor: ["Invierno", "Primavera", "Verano", "Otoño", "Día", "Noche"]
  },
  {
    id: '7',
    name: 'Amber Oud Gold',
    description: 'Amber Oud Gold Edition de Al Haramain Perfumes es una fragancia de la familia olfativa Oriental Vainilla para Hombres y Mujeres. Amber Oud Gold Edition se lanzó en 2024.',
    category: 'arabe',
    oldPrice: 500,
    price: 400,
    isDecantOnly: false,
    priceDecant: 15,
    isDecant: false,
    isNew: false,
    available: true,
    images: [AmberOudGold, AmberOudGold1],
    accords: [
      "cálido especiado", "cacao", "aromático", "fresco especiado",
      "avainillado", "dulce", "ámbar", "cítrico", "especiado suave"
    ],
    specialFor: ["Invierno", "Primavera", "Verano", "Otoño", "Día", "Noche"]
  },
  {
    id: '8',
    name: 'Jean Paul Gaultier Le Male Elixir Parfum',
    description: 'Le Male Elixir de Jean Paul Gaultier es una fragancia de la familia olfativa Oriental Fougère para Hombres. Esta fragrancia es nueva. Le Male Elixir se lanzó en 2023.',
    category: 'diseñador',
    oldPrice: 4000,
    price: 3300,
    isDecantOnly: false,
    priceDecant: 15,
    isDecant: true,
    isNew: false,
    available: true,
    images: [disenador1, JeanPaulGaultierLeMaleElixir],
    accords: [
      "cálido especiado", "cacao", "aromático", "fresco especiado",
      "avainillado", "dulce", "ámbar", "cítrico", "especiado suave"
    ],
    specialFor: ["Invierno", "Primavera", "Verano", "Otoño", "Día", "Noche"]
  },
  {
    id: '9',
    name: 'Sauvage - Christian Dior - 100ml EDP',
    description: 'Sauvage de Dior es una fragancia de la familia olfativa Aromática Fougère para Hombres. Sauvage se lanzó en 2015. La Nariz detrás de esta fragrancia es François Demachy.',
    category: 'next',
    oldPrice: 4500,
    price: 3080,
    isDecantOnly: false,
    priceDecant: 15,
    isDecant: false,
    isNew: true,
    available: true,
    images: [proximo1,proximo2,proximo3],
    accords: [
      "cálido especiado", "cacao", "aromático", "fresco especiado",
      "avainillado", "dulce", "ámbar", "cítrico", "especiado suave"
    ],
    specialFor: ["Invierno", "Primavera", "Verano", "Otoño", "Día", "Noche"]
  },
  {
    id: '10',
    name: 'Bleu - Chanel - 100ml EDT',
    description: 'Bleu de Chanel de Chanel es una fragancia de la familia olfativa Amaderada Aromática, lanzada en 2010.',
    category: 'next',
    oldPrice: 6000,
    price: 4500,
    isDecantOnly: false,
    priceDecant: 15,
    isDecant: false,
    isNew: false,
    images: [proximo4,proximo5,proximo3],
    accords: [
      "cálido especiado", "cacao", "aromático", "fresco especiado",
      "avainillado", "dulce", "ámbar", "cítrico", "especiado suave"
    ],
    specialFor: ["Invierno", "Primavera", "Verano", "Otoño", "Día", "Noche"]
  }
];

export default perfumes;

