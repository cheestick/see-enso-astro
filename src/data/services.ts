export interface IVariation {
  v: string;
  extra?: string;
  price?: number;
  duration?: string;
}

export interface ISEService {
  title: string;
  previewUrl: string;
  variation: IVariation[];
}

export const seServices: ISEService[] = [
  {
    title: "SMM",
    previewUrl: "/images/services/smm.png",
    variation: [
      {
        v: "FB, Inst, TikTok, LinkedIn",
        price: 0,
        duration: "",
      },
      {
        v: "Розробка SMM-стратегії",
        price: 780,
        duration: "10 днів",
      },
      {
        v: "Створення контенту",
        price: 200,
        duration: "1 день",
      },
      {
        v: "Ведення соцмереж",
        price: 800,
        duration: "22 дні",
      },
      {
        v: "Або все це “під ключ”",
        price: 1000,
        duration: "22 дні",
      },
    ],
  },
  {
    title: "ТАРГЕТ ТА PPC",
    previewUrl: "/images/services/advertising.png",
    variation: [
      {
        v: "Таргетована реклама",
        price: 200,
        duration: "10 днів",
      },
      {
        v: "Контекстна реклама",
        price: 400,
        duration: "10 днів",
      },
      {
        v: "Розробка креативів",
        price: 15,
        duration: "2 дні",
      },
      {
        v: "Запуск та оптимізація",
        price: 450,
        duration: "22 дні",
      },
      {
        v: "Аналітика РК",
        price: 100,
        duration: "3 дні",
      },
    ],
  },
  {
    title: "ГРАФІЧНИЙ ДИЗАЙН",
    previewUrl: "/images/services/design.png",
    variation: [
      {
        v: "Логотип",
        price: 150,
        duration: "5 днів",
      },
      {
        v: "Фірмовий стиль, брендбук",
        price: 350,
        duration: "10 днів",
      },
      {
        v: "Дизайн-система для Instagram",
        price: 260,
        duration: "5 днів",
      },
      {
        v: "Брендинг, дизайн, продукту",
        price: 75,
        duration: "3 дні",
      },
      {
        v: "Банери, пости, презентації",
        price: 75,
        duration: "2 дні",
      },
      {
        v: "Друкована продукція",
        price: 50,
        duration: "3 дні",
      },
    ],
  },
  {
    title: "РОЗРОБКА САЙТІВ",
    previewUrl: "/images/services/websites.png",
    variation: [
      {
        v: "Лендинг",
        price: 700,
        duration: "15 днів",
      },
      {
        v: "UX/UA Дизайн",
        price: 400,
        duration: "10 днів",
      },
      {
        v: "Корпоративні сайти",
        price: 1700,
        duration: "44 дні",
      },
      {
        v: "Адаптивна верстка",
        price: 1000,
        duration: "22 дні",
      },
      {
        v: "Адміністрування",
        price: 500,
        duration: "22 дні",
      },
      {
        v: "Тех підтримка",
        price: 600,
        duration: "2 дні",
      },
    ],
  },
  {
    title: "ПРЕПРОДАКШН",
    previewUrl: "/images/services/preproduction.png",
    variation: [
      {
        v: "Розробка ідеї, концепції",
        price: 130,
        duration: "2 дні",
      },
      {
        v: "Сценарії для відео",
        price: 200,
        duration: "3 дні",
      },
      {
        v: "Пошук акторів, локацій",
        price: 100,
        duration: "4 дні",
      },
      {
        v: "Організація знімального процесу",
        price: 150,
        duration: "2 дні",
      },
    ],
  },
  {
    title: "ПРОДАКШН",
    previewUrl: "/images/services/production.png",
    variation: [
      {
        v: "Відео для бізнесу",
        price: 750,
        duration: "1 день",
      },
      {
        v: "Кліпи, реклама, промо",
        price: 1500,
        duration: "2 дні",
      },
      {
        v: "Контент для соцмереж",
        price: 500,
        duration: "1 день",
      },
      {
        v: "Звітні відео (подія/захід)",
        price: 500,
        duration: "1 день",
      },
      {
        v: "Трансляції (прямі ефіри)",
        price: 800,
        duration: "1 день",
      },
      {
        v: "Подкасти “під ключ”",
        price: 1000,
        duration: "1 день",
      },
    ],
  },
  {
    title: "ПОСТПРОДАКШН",
    previewUrl: "/images/services/postproduction.png",
    variation: [
      {
        v: "Анімація та 3D рендери",
        price: 100,
        duration: "1сек.",
      },
      {
        v: "Монтаж відео. Від TikTok до кіно",
        price: 50,
        duration: "1хв.",
      },
      {
        v: "Переклад. EN, DE, PL",
        price: 20,
        duration: "1к.симв.",
      },
      {
        v: "Кольорокорекція",
        price: 55,
        duration: "1хв.",
      },
      {
        v: "Робота зі звуком",
        price: 45,
        duration: "1хв.",
      },
      {
        v: "Аудіодубляж",
        price: 25,
        duration: "1сек.",
      },
    ],
  },
  {
    title: "ФОТОЗЙОМКИ",
    previewUrl: "/images/services/photo.png",
    variation: [
      {
        v: "Студійні фото",
        price: 300,
        duration: "2 дні",
      },
      {
        v: "Предметна зйомка",
        price: 300,
        duration: "2 дні",
      },
      {
        v: "Промо- та рекламні фото",
        price: 500,
        duration: "3 дні",
      },
      {
        v: "Репортажна зйомка",
        price: 300,
        duration: "1 день",
      },
      {
        v: "Бізнес портрет",
        price: 350,
        duration: "3 дні",
      },
    ],
  },
  {
    title: "PR та комунікація",
    previewUrl: "/images/services/pr.png",
    variation: [
      {
        v: "Комунікаційні стратегії",
        price: 250,
        duration: "10 днів",
      },
      {
        v: "Робота зі ЗМІ",
        price: 150,
        duration: "5 днів",
      },
      {
        v: "PR брендів та заходів",
        price: 600,
        duration: "14 днів",
      },
      {
        v: "Супровід проєктів",
        price: 900,
        duration: "22 дні",
      },
      {
        v: "Все під ключ",
        price: 1500,
        duration: "22 дні",
      },
    ],
  },
];
