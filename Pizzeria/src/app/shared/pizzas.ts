import {Pizza} from "./pizza";

export const PIZZAS: Pizza[] = [
  {
    id: '0',
    name: 'Пепперони',
    image: '/assets/images/pepperoni.png',
    featured: true,
    label: 'Острая',
    price: '17.50',
    description: 'Пицца с пепперони, цветочным медом, острым халапеньо, сыром Моцарелла и фирменным томатным соусом',
    comments: [
      {
        rating: 5,
        comment: 'Самая вкусная пицца, которую я ела!',
        author: 'Ольга',
        date: '2021-10-16'
      },
      {
        rating: 4,
        comment: 'Вкусная пицца, но мало сыра',
        author: 'Павел',
        date: '2020-09-05'
      },
      {
        rating: 3,
        comment: 'Не очень так пицца',
        author: 'Леша',
        date: '2021-12-14'
      },
    ]
  },
  {
    id: '1',
    name: 'Бонфесто',
    image: '/assets/images/bonfesto.png',
    featured: false,
    label: 'Новая',
    price: '17.89',
    description: 'Кремчиз и шпинат, бекон, курица, грибы, томаты, моцарелла, смесь 3х сыров, шарики моцарелла в кунжуте, чипсы из пармезана',
    comments: [
      {
        rating: 2,
        comment: 'Перебор с соусом',
        author: 'Сергей',
        date: '2021-03-15'
      },
    ]
  },
  {
    id: '2',
    name: 'Альпийская',
    image: '/assets/images/alpen.png',
    featured: false,
    label: '',
    price: '20.10',
    description: 'Мясная пицца с пикантной пепперони, альпийскими колбасками, Моцареллой, луком и соусом Барбекю',
    comments: [
      {
        rating: 5,
        comment: 'Сытно и вкусно!',
        author: 'Мария',
        date: '2022-01-05'
      },
      {
        rating: 5,
        comment: 'Замечательная пицца, мне понравилась',
        author: 'Геннадий',
        date: '2021-14-02'
      },
    ]
  },
  {
    id: '3',
    name: 'Веганская',
    image: '/assets/images/vegan.png',
    featured: false,
    label: 'Вегетарианская',
    price: '18.60',
    description: 'Томатный соус, веганский сыр, томаты, шампиньоны, лук, сладкий зеленый перец, маслины',
    comments: [
      {
        rating: 4,
        comment: 'Нормальная пицца, только мало овощей',
        author: 'Дарья',
        date: '2022-02-02'
      },
    ]
  },
  {
    id: '4',
    name: 'Домашняя',
    image: '/assets/images/home.png',
    featured: true,
    label: '',
    price: '15.11',
    description: 'Пикантная пепперони, ветчина, соленые огурчики, томаты, моцарелла, томатный соус',
    comments: [
      {
        rating: 5,
        comment: 'Очень вкусная пицца!',
        author: 'Катя',
        date: '2022-02-05'
      },
      {
        rating: 3,
        comment: 'Мне не очень понравилась, слишком острый соус',
        author: 'Володя',
        date: '2022-02-11'
      },
    ]
  },
  {
    id: '5',
    name: 'Сицилийская',
    image: '/assets/images/sicilian.png',
    featured: false,
    label: 'Острая',
    price: '24.60',
    description: 'Острые колбаски чоризо, соус барбекю, томаты, красный лук, моцарелла, томатный соус',
    comments: [
      {
        rating: 5,
        comment: 'Вкусно и аппетитно!',
        author: 'Миша',
        date: '2022-02-08'
      },
      {
        rating: 5,
        comment: 'Мне понравилась',
        author: 'Антон',
        date: '2022-02-07'
      },
      {
        rating: 5,
        comment: 'Всем рекомендую, очень вкусно',
        author: 'Люба',
        date: '2022-02-05'
      },
    ]
  }
];
