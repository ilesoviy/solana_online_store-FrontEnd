import { Item } from '../models/Item';

export const COLOURS = {
  white: '#ffffff',
  black: '#000000',
  lighterPurple: '#933FE6',
  lightGray: '#999999',
  paleGrey: '#F0F3F8',
  darkGrey: '#262626',
  charcoalGrey: '#676767',
  silver: '#B3B3B3',
  golden: '#FFD02C',
  purple: '#933FE7'
};

export const Categorys = [
  {
    label: 'cat-1',
    value: 'cat-1',
  },
  {
    label: 'cat-2',
    value: 'cat-2',
  },
];

export const SearchCategory = [
  {
    id: 1,
    name: 'Clothing',
    icon: 'shirt-outline',
  },
  {
    id: 2,
    name: 'Games',
    icon: 'game-controller-outline',
  },
  {
    id: 3,
    name: 'Entertainment',
    icon: 'tv-outline',
  },
  {
    id: 4,
    name: 'Home',
    icon: 'home-outline',
  },
  {
    id: 5,
    name: 'Green',
    icon: 'leaf-outline',
  },
  {
    id: 6,
    name: 'Technology',
    icon: 'headset-outline',
  },
];

export const Brands = [
  {
    id: 1,
    name: 'brand_one',
  },
  {
    id: 2,
    name: 'brand_two',
  },
  {
    id: 3,
    name: 'brand_three',
  },
  {
    id: 4,
    name: 'brand_four',
  },
  {
    id: 5,
    name: 'brand_five',
  },
  {
    id: 6,
    name: 'brand_six',
  },
];

export const Items: Item[] = [
  {
    id: '1',
    category: 'product',
    productName: 'MI Super Bass Bluetooth Wireless Headphones',
    productPrice: 1799,
    description:
      'Up to 20 hours battery life | Super powerful Bass | 40mm dynamic driver | Pressure less ear muffs | Bluetooth 5.0 | Voice control',
    detail: 36,
    offPercentage: 10,
    productImage: require('./images/products/Mi1.png'),
    likes: 12,
    productImageList: [
      require('./images/products/Mi1.png'),
      require('./images/products/Mi2.png'),
      require('./images/products/Mi3.png'),
    ],
  },
  {
    id: '2',
    category: 'product',
    productName: 'boAt Rockerz 450 Bluetooth Headphone',
    productPrice: 1499,
    description:
      'boAt Rockerz 450 M is an on-ear wireless headset that has been ergonomically designed to meet the needs of music lovers.',
    detail: 44,
    productImage: require('./images/products/boat1.png'),
    likes: 0,
    productImageList: [
      require('./images/products/boat1.png'),
      require('./images/products/boat2.png'),
      require('./images/products/boat3.png'),
    ],
  },
  {
    id: '3',
    category: 'accessory',
    productName: 'boAt Airdopes 441',
    productPrice: 1999,
    description:
      'Bluetooth: It has Bluetooth v5.0 with a range of 10m and is compatible with Android & iOS',
    detail: 34,
    offPercentage: 18,
    productImage: require('./images/accessories/boatairpods1.png'),
    likes: 55,
    productImageList: [
      require('./images/accessories/boatairpods1.png'),
      require('./images/accessories/boatairpods2.png'),
      require('./images/accessories/boatairpods3.png'),
    ],
  },
  {
    id: '4',
    category: 'accessory',
    productName: 'boAt Bassheads 242',
    productPrice: 399,
    description:
      'Fly into your workouts with precise tones that inspire and energize your system with its HD sound, all the time.',
    detail: 32,
    productImage: require('./images/accessories/boatbassheads1.png'),
    likes: 657,
    productImageList: [
      require('./images/accessories/boatbassheads1.png'),
      require('./images/accessories/boatbassheads2.png'),
      require('./images/accessories/boatbassheads3.png'),
    ],
  },
  {
    id: '5',
    category: 'accessory',
    productName: 'boAt Rockerz 255 Pro+',
    productPrice: 1499,
    description:
      'The unbeatable boAt signature sound shines through no matter what are you playing courtesy its 10mm drivers.',
    detail: 47,
    productImage: require('./images/accessories/boatrockerz1.png'),
    likes: 234,
    productImageList: [
      require('./images/accessories/boatrockerz1.png'),
      require('./images/accessories/boatrockerz2.png'),
      require('./images/accessories/boatrockerz3.png'),
    ],
  },
  {
    id: '6',
    userVendor: 'diletta.leotta@domain.com',
    category: 'accessory',
    productName: 'Boult Audio AirBass Propods TWS',
    productPrice: 1299,
    description:
      'One Touch Control & Voice Assistant: With one multifunction button, you can play/pause, previous/next track and answer/hang-up calls.Voice assistant function lets you access siri/Google Assistant',
    detail: 31,
    productImage: require('./images/accessories/boultairbass1.png'),
    likes: 0,
    productImageList: [
      require('./images/accessories/boultairbass1.png'),
      require('./images/accessories/boultairbass2.png'),
      require('./images/accessories/boultairbass3.png'),
    ],
  },
  {
    id: '7',
    category: 'product',
    productName: 'MI Super Bass Bluetooth Wireless Headphones',
    productPrice: 1799,
    description:
      'Up to 20 hours battery life | Super powerful Bass | 40mm dynamic driver | Pressure less ear muffs | Bluetooth 5.0 | Voice control',
    detail: 38,
    offPercentage: 32,
    productImage: require('./images/products/Mi1.png'),
    likes: 87,
    productImageList: [
      require('./images/products/Mi1.png'),
      require('./images/products/Mi2.png'),
      require('./images/products/Mi3.png'),
    ],
  },
  {
    id: '8',
    category: 'product',
    productName: 'boAt Rockerz 450 Bluetooth Headphone',
    productPrice: 1499,
    description:
      'boAt Rockerz 450 M is an on-ear wireless headset that has been ergonomically designed to meet the needs of music lovers.',
    detail: 38,
    productImage: require('./images/products/boat1.png'),
    likes: 66,
    productImageList: [
      require('./images/products/boat1.png'),
      require('./images/products/boat2.png'),
      require('./images/products/boat3.png'),
    ],
  },
  {
    id: '9',
    category: 'product',
    productName: 'MI Super Bass Bluetooth Wireless Headphones',
    productPrice: 1799,
    description:
      'Up to 20 hours battery life | Super powerful Bass | 40mm dynamic driver | Pressure less ear muffs | Bluetooth 5.0 | Voice control',
    detail: 43,
    offPercentage: 5,
    productImage: require('./images/products/Mi1.png'),
    likes: 78,
    productImageList: [
      require('./images/products/Mi1.png'),
      require('./images/products/Mi2.png'),
      require('./images/products/Mi3.png'),
    ],
  },
  {
    id: '10',
    userVendor: 'diletta.leotta@domain.com',
    category: 'product',
    productName: 'boAt Rockerz 450 Bluetooth Headphone',
    productPrice: 1499,
    description:
      'boAt Rockerz 450 M is an on-ear wireless headset that has been ergonomically designed to meet the needs of music lovers.',
    detail: 45,
    productImage: require('./images/products/boat1.png'),
    likes: 11,
    productImageList: [
      require('./images/products/boat1.png'),
      require('./images/products/boat2.png'),
      require('./images/products/boat3.png'),
    ],
  },
  {
    id: '11',
    category: 'product',
    productName: 'MI Super Bass Bluetooth Wireless Headphones',
    productPrice: 1799,
    description:
      'Up to 20 hours battery life | Super powerful Bass | 40mm dynamic driver | Pressure less ear muffs | Bluetooth 5.0 | Voice control',
    detail: 32,
    offPercentage: 15,
    productImage: require('./images/products/Mi1.png'),
    likes: 1,
    productImageList: [
      require('./images/products/Mi1.png'),
      require('./images/products/Mi2.png'),
      require('./images/products/Mi3.png'),
    ],
  },
  {
    id: '12',
    category: 'product',
    productName: 'boAt Rockerz 450 Bluetooth Headphone',
    productPrice: 1499,
    description:
      'boAt Rockerz 450 M is an on-ear wireless headset that has been ergonomically designed to meet the needs of music lovers.',
    detail: 34,
    productImage: require('./images/products/boat1.png'),
    likes: 0,
    productImageList: [
      require('./images/products/boat1.png'),
      require('./images/products/boat2.png'),
      require('./images/products/boat3.png'),
    ],
  },
  {
    id: '13',
    userVendor: 'diletta.leotta@domain.com',
    category: 'product',
    productName: 'boAt Rockerz 450 Bluetooth Headphone',
    productPrice: 1499,
    description:
      'boAt Rockerz 450 M is an on-ear wireless headset that has been ergonomically designed to meet the needs of music lovers.',
    detail: 34,
    productImage: require('./images/products/boat1.png'),
    likes: 0,
    productImageList: [require('./images/products/001.jpg')],
  },
  {
    id: '14',
    category: 'product',
    productName: 'boAt Rockerz 450 Bluetooth Headphone',
    productPrice: 1499,
    description:
      'boAt Rockerz 450 M is an on-ear wireless headset that has been ergonomically designed to meet the needs of music lovers.',
    detail: 34,
    productImage: require('./images/products/boat1.png'),
    likes: 0,
    productImageList: [require('./images/products/002.jpg')],
  },
  {
    id: '15',
    userVendor: 'diletta.leotta@domain.com',
    category: 'product',
    productName: 'boAt Rockerz 450 Bluetooth Headphone',
    productPrice: 1499,
    description:
      'boAt Rockerz 450 M is an on-ear wireless headset that has been ergonomically designed to meet the needs of music lovers.',
    detail: 34,
    productImage: require('./images/products/boat1.png'),
    likes: 0,
    productImageList: [require('./images/products/003.jpg')],
  },
];

export const UsersInfo = {
  id: 1,
  name: 'Diletta',
  surname: 'Leotta',
  email: 'diletta.leotta@domain.com',
  source: require('./images/users/photo.png'),
  bio: 'Hey! Here to sell stuff that I forgot they exist.',
  starRating: 3.5,
  numberReviews: 41,
};

export const _Items: Item[] = [
  {
    id: '1',
    category: 'product',
    productName: 'MI Super Bass Bluetooth Wireless Headphones',
    productPrice: 1799,
    description:
      'Up to 20 hours battery life | Super powerful Bass | 40mm dynamic driver | Pressure less ear muffs | Bluetooth 5.0 | Voice control',
    detail: 36,
    offPercentage: 10,
    productImage: require('./images/products/001.jpg'),
    likes: 12,
    productImageList: [
      require('./images/products/Mi1.png'),
      require('./images/products/Mi2.png'),
      require('./images/products/Mi3.png'),
    ],
  },
  {
    id: '2',
    category: 'product',
    productName: 'boAt Rockerz 450 Bluetooth Headphone',
    productPrice: 1499,
    description:
      'boAt Rockerz 450 M is an on-ear wireless headset that has been ergonomically designed to meet the needs of music lovers.',
    detail: 44,
    productImage: require('./images/products/002.jpg'),
    likes: 0,
    productImageList: [
      require('./images/products/boat1.png'),
      require('./images/products/boat2.png'),
      require('./images/products/boat3.png'),
    ],
  },
  {
    id: '3',
    category: 'accessory',
    productName: 'boAt Airdopes 441',
    productPrice: 1999,
    description:
      'Bluetooth: It has Bluetooth v5.0 with a range of 10m and is compatible with Android & iOS',
    detail: 34,
    offPercentage: 18,
    productImage: require('./images/accessories/boatairpods1.png'),
    likes: 55,
    productImageList: [
      require('./images/accessories/boatairpods1.png'),
      require('./images/accessories/boatairpods2.png'),
      require('./images/accessories/boatairpods3.png'),
    ],
  },
  {
    id: '4',
    category: 'accessory',
    productName: 'boAt Bassheads 242',
    productPrice: 399,
    description:
      'Fly into your workouts with precise tones that inspire and energize your system with its HD sound, all the time.',
    detail: 32,
    productImage: require('./images/accessories/boatbassheads1.png'),
    likes: 657,
    productImageList: [
      require('./images/accessories/boatbassheads1.png'),
      require('./images/accessories/boatbassheads2.png'),
      require('./images/accessories/boatbassheads3.png'),
    ],
  },
  {
    id: '5',
    category: 'accessory',
    productName: 'boAt Rockerz 255 Pro+',
    productPrice: 1499,
    description:
      'The unbeatable boAt signature sound shines through no matter what are you playing courtesy its 10mm drivers.',
    detail: 47,
    productImage: require('./images/accessories/boatrockerz1.png'),
    likes: 234,
    productImageList: [
      require('./images/accessories/boatrockerz1.png'),
      require('./images/accessories/boatrockerz2.png'),
      require('./images/accessories/boatrockerz3.png'),
    ],
  },
  {
    id: '6',
    userVendor: 'diletta.leotta@domain.com',
    category: 'accessory',
    productName: 'Boult Audio AirBass Propods TWS',
    productPrice: 1299,
    description:
      'One Touch Control & Voice Assistant: With one multifunction button, you can play/pause, previous/next track and answer/hang-up calls.Voice assistant function lets you access siri/Google Assistant',
    detail: 31,
    productImage: require('./images/accessories/boultairbass1.png'),
    likes: 0,
    productImageList: [
      require('./images/accessories/boultairbass1.png'),
      require('./images/accessories/boultairbass2.png'),
      require('./images/accessories/boultairbass3.png'),
    ],
  },
  {
    id: '7',
    category: 'product',
    productName: 'MI Super Bass Bluetooth Wireless Headphones',
    productPrice: 1799,
    description:
      'Up to 20 hours battery life | Super powerful Bass | 40mm dynamic driver | Pressure less ear muffs | Bluetooth 5.0 | Voice control',
    detail: 38,
    offPercentage: 32,
    productImage: require('./images/products/001.jpg'),
    likes: 87,
    productImageList: [
      require('./images/products/Mi1.png'),
      require('./images/products/Mi2.png'),
      require('./images/products/Mi3.png'),
    ],
  },
  {
    id: '8',
    category: 'product',
    productName: 'boAt Rockerz 450 Bluetooth Headphone',
    productPrice: 1499,
    description:
      'boAt Rockerz 450 M is an on-ear wireless headset that has been ergonomically designed to meet the needs of music lovers.',
    detail: 38,
    productImage: require('./images/products/002.jpg'),
    likes: 66,
    productImageList: [
      require('./images/products/boat1.png'),
      require('./images/products/boat2.png'),
      require('./images/products/boat3.png'),
    ],
  },
  {
    id: '9',
    category: 'product',
    productName: 'MI Super Bass Bluetooth Wireless Headphones',
    productPrice: 1799,
    description:
      'Up to 20 hours battery life | Super powerful Bass | 40mm dynamic driver | Pressure less ear muffs | Bluetooth 5.0 | Voice control',
    detail: 43,
    offPercentage: 5,
    productImage: require('./images/products/003.jpg'),
    likes: 78,
    productImageList: [
      require('./images/products/Mi1.png'),
      require('./images/products/Mi2.png'),
      require('./images/products/Mi3.png'),
    ],
  },
  {
    id: '10',
    userVendor: 'diletta.leotta@domain.com',
    category: 'product',
    productName: 'boAt Rockerz 450 Bluetooth Headphone',
    productPrice: 1499,
    description:
      'boAt Rockerz 450 M is an on-ear wireless headset that has been ergonomically designed to meet the needs of music lovers.',
    detail: 45,
    productImage: require('./images/products/001.jpg'),
    likes: 11,
    productImageList: [
      require('./images/products/boat1.png'),
      require('./images/products/boat2.png'),
      require('./images/products/boat3.png'),
    ],
  },
  {
    id: '11',
    category: 'product',
    productName: 'MI Super Bass Bluetooth Wireless Headphones',
    productPrice: 1799,
    description:
      'Up to 20 hours battery life | Super powerful Bass | 40mm dynamic driver | Pressure less ear muffs | Bluetooth 5.0 | Voice control',
    detail: 32,
    offPercentage: 15,
    productImage: require('./images/products/002.jpg'),
    likes: 1,
    productImageList: [
      require('./images/products/Mi1.png'),
      require('./images/products/Mi2.png'),
      require('./images/products/Mi3.png'),
    ],
  },
  {
    id: '12',
    category: 'product',
    productName: 'boAt Rockerz 450 Bluetooth Headphone',
    productPrice: 1499,
    description:
      'boAt Rockerz 450 M is an on-ear wireless headset that has been ergonomically designed to meet the needs of music lovers.',
    detail: 34,
    productImage: require('./images/products/003.jpg'),
    likes: 0,
    productImageList: [
      require('./images/products/boat1.png'),
      require('./images/products/boat2.png'),
      require('./images/products/boat3.png'),
    ],
  },
  {
    id: '13',
    userVendor: 'diletta.leotta@domain.com',
    category: 'product',
    productName: 'boAt Rockerz 450 Bluetooth Headphone',
    productPrice: 1499,
    description:
      'boAt Rockerz 450 M is an on-ear wireless headset that has been ergonomically designed to meet the needs of music lovers.',
    detail: 34,
    productImage: require('./images/products/boat1.png'),
    likes: 0,
    productImageList: [require('./images/products/001.jpg')],
  },
  {
    id: '14',
    category: 'product',
    productName: 'boAt Rockerz 450 Bluetooth Headphone',
    productPrice: 1499,
    description:
      'boAt Rockerz 450 M is an on-ear wireless headset that has been ergonomically designed to meet the needs of music lovers.',
    detail: 34,
    productImage: require('./images/products/boat1.png'),
    likes: 0,
    productImageList: [require('./images/products/002.jpg')],
  },
  {
    id: '15',
    userVendor: 'diletta.leotta@domain.com',
    category: 'product',
    productName: 'boAt Rockerz 450 Bluetooth Headphone',
    productPrice: 1499,
    description:
      'boAt Rockerz 450 M is an on-ear wireless headset that has been ergonomically designed to meet the needs of music lovers.',
    detail: 34,
    productImage: require('./images/products/boat1.png'),
    likes: 0,
    productImageList: [require('./images/products/003.jpg')],
  },
];
