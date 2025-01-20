export interface IVariation {
  v: string;
  extra?: string;
}

export interface ISEService {
  title: string;
  price: number;
  duration: number;
  previewUrl: string;
  variation: IVariation[];
}

export const seServices: ISEService[] = [
  {
    title: "SMM",
    price: 900,
    duration: 6,
    previewUrl: "/images/services/photography/photography@1x.webp",
    variation: [
      {
        v: "FB, Inst, TikTok, LinkedIn",
      },
      {
        v: "Розробка SMM-стратегії",
      },
      {
        v: "Створення контенту",
      },
      {
        v: "Ведення соцмереж",
      },
      {
        v: "Таргетована реклама",
      },
      {
        v: "Або все це “під ключ”",
      },
    ],
  },
  {
    title: "ТАРГЕТ ТА PPC",
    price: 700,
    duration: 7,
    previewUrl: "/images/services/photography/photography@1x.webp",
    variation: [
      {
        v: "Таргетована реклама",
      },
      {
        v: "Контекстна реклама",
      },
      {
        v: "Розробка креативів",
      },
      {
        v: "Запуск та оптимізація",
      },
      {
        v: "Аналітика РК",
      },
    ],
  },
  {
    title: "ГРАФІЧНИЙ ДИЗАЙН",
    price: 550,
    duration: 14,
    previewUrl: "/images/services/photography/photography@1x.webp",
    variation: [
      {
        v: "Логотип",
      },
      {
        v: "Фірмовий стиль, брендбук",
      },
      {
        v: "Дизайн-система для Instagram",
      },
      {
        v: "Брендинг, дизайн, продукту",
      },
      {
        v: "Банери, пости, презентації",
      },
      {
        v: "Друкована продукція",
      },
    ],
  },
  {
    title: "РОЗРОБКА САЙТІВ",
    price: 600,
    duration: 10,
    previewUrl: "/images/services/photography/photography@1x.webp",
    variation: [
      {
        v: "Лендинг",
      },
      {
        v: "UX/UA Дизайн",
      },
      {
        v: "Корпоративні сайти",
      },
      {
        v: "Адаптивна верстка",
      },
      {
        v: "Адміністрування",
      },
      {
        v: "Тех підтримка",
      },
    ],
  },
  {
    title: "ПРЕПРОДАКШН",
    price: 500,
    duration: 7,
    previewUrl: "/images/services/photography/photography@1x.webp",
    variation: [
      {
        v: "Розробка ідеї, концепції",
      },
      {
        v: "Сценарії для відео",
      },
      {
        v: "Пошук акторів, локацій",
      },
      {
        v: "Організація знімального процесу",
      },
    ],
  },
  {
    title: "ПРОДАКШН",
    price: 700,
    duration: 4,
    previewUrl: "/images/services/photography/photography@1x.webp",
    variation: [
      {
        v: "Відео для бізнесу",
      },
      {
        v: "Кліпи, реклама, промо",
      },
      {
        v: "Контент для соцмереж",
      },
      {
        v: "Звітні відео (подія/захід)",
      },
      {
        v: "Трансляції (прямі ефіри)",
      },
      {
        v: "Подкасти “під ключ”",
      },
    ],
  },
  {
    title: "ПОСТПРОДАКШН",
    price: 800,
    duration: 14,
    previewUrl: "/images/services/photography/photography@1x.webp",
    variation: [
      {
        v: "Анімація та 3D рендери",
      },
      {
        v: "Монтаж відео. Від TikTok до кіно",
      },
      {
        v: "Переклад. EN, DE, PL",
      },
      {
        v: "Кольорокорекція",
      },
      {
        v: "Аудіодубляж",
      },
    ],
  },
  {
    title: "ФОТОЗЙОМКИ",
    price: 300,
    duration: 5,
    previewUrl: "/images/services/photography/photography@1x.webp",
    variation: [
      {
        v: "Студійні фото",
      },
      {
        v: "Предметна зйомка",
      },
      {
        v: "Промо- та рекламні фото",
      },
      {
        v: "Репортажна зйомка",
      },
      {
        v: "Бізнес портрет",
      },
    ],
  },
  {
    title: "PR та комунікація",
    price: 700,
    duration: 5,
    previewUrl: "/images/services/photography/photography@1x.webp",
    variation: [
      {
        v: "Комунікаційні стратегії",
      },
      {
        v: "Робота зі ЗМІ",
      },
      {
        v: "PR брендів та заходів",
      },
      {
        v: "Супровід соц. проєктів",
      },
    ],
  },
];
