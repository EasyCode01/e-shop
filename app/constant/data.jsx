import {
  AccountBalanceOutlined,
  MonetizationOnOutlined,
  ShoppingBagOutlined,
  StoreOutlined,
} from "@mui/icons-material";
import Instagram from "@mui/icons-material/Instagram";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Twitter from "@mui/icons-material/Twitter";

export const navLinks = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "About",
    link: "/about",
  },
  {
    label: "Contact",
    link: "/contact",
  },
  {
    label: "SignUp",
    link: "/signup",
  },
];

export const analytics = [
  {
    icon: <StoreOutlined />,
    number: "10.5k",
    title: "Sallers active in our site",
  },
  {
    icon: <MonetizationOnOutlined />,
    number: "33k",
    title: "Monthly product sale",
  },
  {
    icon: <ShoppingBagOutlined />,
    number: "45.5k",
    title: "Customers active in our site",
  },
  {
    icon: <AccountBalanceOutlined />,
    number: "25.5k",
    title: "Annual gross sale in our site",
  },
];

export const founders = [
  {
    image: "/images/tom-cruise.png",
    role: "Founder & Chairman",
    name: "Tom Cruise",
    icons: [<Twitter />, <Instagram />, <LinkedIn />],
  },
  {
    image: "/images/emma-watson.png",
    role: "Managing Director",
    name: "Emma Watson",
    icons: [<Twitter />, <Instagram />, <LinkedIn />],
  },
  {
    image: "/images/will-smith.png",
    role: "Product Designer",
    name: "Will Smith",
    icons: [<Twitter />, <Instagram />, <LinkedIn />],
  },
];

export const hero = [
  {
    image: "images/hero-frame-1.png",
    text: "Up to 10%  off Voucher",
    name: "iPhone 14 series",
    tinyImage: "/images/apple-gray-logo.png",
  },
  {
    image: "images/boomblox.png",
    text: "Up to 20%  off Voucher",
    name: "BoomBlox series",
    tinyImage: "/images/boomblox.png",
  },
  {
    image: "images/ps5-play-station.png",
    text: "Up to 15%  off Voucher",
    name: "Play Station 5",
    tinyImage: "/images/ps5-play-station.png",
  },
];
export const productsData = [
  {
    id: 1,
    name: "Amazon Echo",
    image: "/images/amazon-echo.png",
    category: "Electronics",
    categoryType: "Flash sales",
    isNew: false,
    numberOfProducts: 25,
    price: 99.99,
    ratings: 4.5,
    discountPercentage: 20,
    newPrice: 79.99,
  },
  {
    id: 2,
    name: "Boomblox",
    image: "/images/boomblox.png",
    category: "Electronics",
    categoryType: "Flash sales",
    isNew: true,
    numberOfProducts: 20,
    price: 129.99,
    ratings: 4.8,
    discountPercentage: 10,
    newPrice: 116.99,
  },
  {
    id: 3,
    name: "Canon Camera",
    image: "/images/canon-camera.png",
    category: "Electronics",
    categoryType: "Best selling products",
    isNew: true,
    numberOfProducts: 15,
    price: 299.99,
    ratings: 2.7,
    discountPercentage: 15,
    newPrice: 254.99,
  },
  {
    id: 4,
    name: "Keyboard",
    image: "/images/keyboard.png",
    category: "Electronics",
    categoryType: "Best selling products",
    isNew: false,
    numberOfProducts: 30,
    price: 79.99,
    ratings: 4.6,
    discountPercentage: 10,
    newPrice: 71.99,
  },
  {
    id: 5,
    name: "LCD Monitor",
    image: "/images/lcd-monitor.png",
    category: "Electronics",
    categoryType: "Flash sales",
    isNew: true,
    numberOfProducts: 10,
    price: 199.99,
    ratings: 4.9,
    discountPercentage: 15,
    newPrice: 169.99,
  },
  {
    id: 6,
    name: "Gamepad Red",
    image: "/images/game-pad-red.png",
    category: "Gaming",
    categoryType: "Flash sales",
    isNew: false,
    numberOfProducts: 50,
    price: 39.99,
    ratings: 4.7,
    discountPercentage: 15,
    newPrice: 33.99,
  },
  {
    id: 7,
    name: "White Gamepad",
    image: "/images/white-gamepad.png",
    category: "Gaming",
    categoryType: "Flash sales",
    isNew: false,
    numberOfProducts: 40,
    price: 49.99,
    ratings: 3.9,
    discountPercentage: 20,
    newPrice: 39.99,
  },
  {
    id: 8,
    name: "Gaming Laptop",
    image: "/images/gaming-laptop.png",
    category: "Gaming",
    categoryType: "Best selling products",
    isNew: false,
    numberOfProducts: 30,
    price: 999.99,
    ratings: 2.5,
    discountPercentage: 10,
    newPrice: 899.99,
  },
  {
    id: 9,
    name: "PS5 Play Station",
    image: "/images/ps5-play-station.png",
    category: "Gaming",
    categoryType: "Best selling products",
    isNew: false,
    numberOfProducts: 20,
    price: 499.99,
    ratings: 5.0,
    discountPercentage: 0,
    newPrice: 499.99,
  },
  {
    id: 10,
    name: "CPU Cooler",
    image: "/images/cpu-cooler.png",
    category: "Gaming",
    categoryType: "Flash sales",
    isNew: false,
    numberOfProducts: 35,
    price: 49.99,
    ratings: 4.3,
    discountPercentage: 25,
    newPrice: 37.49,
  },
  {
    id: 11,
    name: "Book Shelf",
    image: "/images/book-shelf.png",
    category: "Furnitures",
    categoryType: "Flash sales",
    isNew: false,
    numberOfProducts: 45,
    price: 129.99,
    ratings: 4.8,
    discountPercentage: 10,
    newPrice: 116.99,
  },
  {
    id: 12,
    name: "Comfort Chair",
    image: "/images/comfort-chair.png",
    category: "Furnitures",
    categoryType: "Flash sales",
    isNew: true,
    numberOfProducts: 30,
    price: 149.99,
    ratings: 2.7,
    discountPercentage: 20,
    newPrice: 119.99,
  },
  {
    id: 13,
    name: "Boomblox",
    image: "/images/boomblox.png",
    category: "Furnitures",
    categoryType: "Best selling products",
    isNew: false,
    numberOfProducts: 60,
    price: 39.99,
    ratings: 4.0,
    discountPercentage: 0,
    newPrice: 39.99,
  },
  {
    id: 14,
    name: "Curology Product",
    image: "/images/curology-product.png",
    category: "Furnitures",
    categoryType: "Best selling products",
    isNew: true,
    numberOfProducts: 20,
    price: 79.99,
    ratings: 4.5,
    discountPercentage: 15,
    newPrice: 67.99,
  },
  {
    id: 15,
    name: "Gucci Bag",
    image: "/images/gucci-bag.png",
    category: "Men's fashion",
    categoryType: "Flash sales",
    isNew: true,
    numberOfProducts: 50,
    price: 299.99,
    ratings: 2.9,
    discountPercentage: 10,
    newPrice: 269.99,
  },
  {
    id: 16,
    name: "Satin Jacket",
    image: "/images/satin-jacket.png",
    category: "Men's fashion",
    categoryType: "Flash sales",
    isNew: false,
    numberOfProducts: 40,
    price: 119.99,
    ratings: 4.7,
    discountPercentage: 0,
    newPrice: 119.99,
  },
  {
    id: 17,
    name: "Book Shelf",
    image: "/images/book-shelf.png",
    category: "Women's fashion",
    categoryType: "Flash sales",
    isNew: false,
    numberOfProducts: 60,
    price: 249.99,
    ratings: 3.8,
    discountPercentage: 30,
    newPrice: 174.99,
  },
  {
    id: 18,
    name: "Perfume Gucci",
    image: "/images/perfume-gucci.png",
    category: "Women's fashion",
    categoryType: "Best selling products",
    isNew: true,
    numberOfProducts: 45,
    price: 39.99,
    ratings: 4.5,
    discountPercentage: 0,
    newPrice: 39.99,
  },

  {
    id: 19,
    name: "Breed Dry Dog Food",
    image: "/images/dry-dog-food.png",
    category: "Women's fashion",
    categoryType: "Best selling products",
    isNew: true,
    numberOfProducts: 45,
    price: 39.99,
    ratings: 4.5,
    discountPercentage: 0,
    newPrice: 39.99,
  },
];
