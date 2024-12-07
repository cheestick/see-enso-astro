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
    title: "ФОТОЗЙОМКИ",
    price: 300,
    duration: 5,
    previewUrl: "/images/services/photography/photography@1x.webp",
    variation: [
      {
        v: "Студійна зйомка",
      },
      {
        v: "Предметна зйомка",
      },
      {
        v: "Бізнес портрет",
      },
      {
        v: "Репортажна зйомка",
      },
      {
        v: "Контент для соцмереж",
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
        v: "Розробка ідеї/концепції",
      },
      {
        v: "Написання сценаріїв для відео",
      },
      {
        v: "Пошук акторів/локацій",
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
        v: "Зйомка відеоконтенту для соцмереж",
      },
      {
        v: "Корпоративні відео",
      },
      {
        v: "Реклама та промо відео",
      },
      {
        v: "Подкасти “під ключ”",
      },
      {
        v: "Кліпи",
      },
      {
        v: "Звітні відео",
        extra: "про подію/захід",
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
        v: "Монтаж",
        extra: "від Tik Tok до кіно",
      },
      {
        v: "Анімація",
        extra: "3D рендери продукту та ін.",
      },
      {
        v: "Кольорокорекція",
      },
      {
        v: "Робота зі звуком",
        extra: "від “прибрати шум” до саунд-дизайну",
      },
      {
        v: "Переклад",
        extra: "англійська, німецька, польська",
      },
      {
        v: "Аудіо дублювання різними мовами",
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
        v: "Дизайн-система для Instagram",
      },
      {
        v: "Розробка логотипів",
      },
      {
        v: "Брендинг та дизайн продукту",
      },
      {
        v: "Дизайн поліграфії",
        extra: "від візитки до книги",
      },
      {
        v: "Розробка брендбуку",
      },
    ],
  },
  {
    title: "СТВОРЕННЯ САЙТІВ",
    price: 600,
    duration: 10,
    previewUrl: "/images/services/photography/photography@1x.webp",
    variation: [
      {
        v: "Landing page",
        extra: "посадкова сторінка",
      },
      {
        v: "Сайт для бізнесу",
      },
      {
        v: "Інтернет-магазин",
      },
      {
        v: "Підтримка сайту",
      },
      {
        v: "Вебдизайн",
        extra: "UX/UI",
      },
      {
        v: "Редизайн вашого сайту",
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
        v: "Розробка комунікаційної стратегії",
      },
      {
        v: "Комунікаційний супровід",
        extra: "робота зі ЗМІ",
      },
      {
        v: "PR брендів/заходів",
      },
      {
        v: "Супровід соціальних проєктів",
      },
    ],
  },
  {
    title: "SMM",
    price: 900,
    duration: 6,
    previewUrl: "/images/services/photography/photography@1x.webp",
    variation: [
      {
        v: "TikTok, Instagram, Facebook, LinkedIn",
      },
      {
        v: "Розробка SMM-стратегії для певної платформи",
      },
      {
        v: "Наповнення та ведення сторінок",
      },
      {
        v: "Таргетована реклама",
      },
      {
        v: "Або все це “під ключ”",
      },
      {
        v: "Комунікаційний супровід",
      },
      {
        v: "SEO",
        extra: "оптимізація для пошукових систем",
      },
      {
        v: "PPC",
        extra: "реклама з оплатою за клік",
      },
      {
        v: "Розробка бренду",
      },
    ],
  },
];
