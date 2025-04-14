export interface ICaseCard {
  title: string;
  description: string;
  thumbUrl: string;
  tags: string[];
  link?: string;
}

export default [
  {
    title: "СММ ВЕДЕННЯ  СОЦ. МЕРЕЖ ФОНДУ “БЛАГОМАЙ”",
    description:
      "Повне СММ ведення від контент плану до постингу. Монтаж Reels, створення візуального контенту, копірайтинг дописів, таргетована реклама (від стратегії до якісних показників)",
    thumbUrl: "/images/cases/01.png",
    tags: ["Дизайн", "Ведення сторінки", "Таргет"],
    link: "https://www.instagram.com/blagomayfund/",
  },
  {
    title:
      "ТАРГЕТ + СТВОРЕННЯ ДОПИСІВ ДЛЯ СОЦ МЕРЕЖ “СОС ДИТЯЧІ МІСТЕЧКА УКРАЇНА”",
    description:
      "Написання текстів та дизайн дописів, зйомка та монтаж Reels, одного з проектів фонду, таргетована реклама соцмереж вцілому.",
    thumbUrl: "/images//cases/02.png",
    tags: ["Дизайн", "Створення дописів", "Таргет"],
    link: "https://www.instagram.com/sos_cv_ukraine/",
  },
  {
    title: "ПРОВЕДЕННЯ СЕРІЇ ONLINE ВЕБІНАРІВ",
    description:
      "Створення креативів для таргету та обкладинок в соц. мережі та на ютуб Організація, трансляція та технічний  супровід лекторів та вебінарів.",
    thumbUrl: "/images/cases/03.png",
    tags: ["Організація", "Тех. супровід", "Дизайн"],
    link: "https://www.youtube.com/playlist?list=PLCY4teqJXrLcbd2_fqkZTrlah8vm83Y2f",
  },
  {
    title: "ПРОМОЦІЯ СЕРІЇ ONLINE ВЕБІНАРІВ",
    description:
      "Промоція в соц мережах, таргетована реклама, реєстраційні форми, розсилка запрошень та  презентаційних матеріалів.\nЗбільшення бази нових  учасників в чотири рази!",
    thumbUrl: "/images/cases/04.png",
    tags: ["Email маркетинг", "Таргет", "Дизайн"],
    link: "",
  },
  {
    title: "ВЕДЕННЯ РОЗДІЛУ ПРОЄКТУ НА САЙТІ “СОС ДИТЯЧІ МІСТЕЧКА УКРАЇНА”",
    description:
      "Ведення та наповнення розділу проєкту на сайті (написання статей, підбір контенту, додавання новин та вебінарів, ведення сторінки проєкту в цілому).",
    thumbUrl: "/images/cases/05.png",
    tags: ["Підбір контенту", "Копірайтинг", "Адміністрування"],
    link: "https://sos-ukraine.org/grantovi-proyekty/pravo-na-sim-yu-usunennya-systemnyh-progalyn-pidtrymka-reform-systemy-zahystu-ditej-v-albaniyi-bilorusi-virmeniyi-pivnichnij-makedoniyi-ta-ukrayini/",
  },
] as ICaseCard[];
