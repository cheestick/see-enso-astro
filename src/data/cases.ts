export interface ICaseCard {
  heading: string;
  description: string;
  thumbUrl: string;
  jobList: string[];
}

export default [
  {
    heading: "кліп Анни Трінчер",
    description:
      "Діджитал агенція, що створює цілісний продукт створює ціccfffffлісний продукт генція, що створює цілісний продукт ств",
    thumbUrl: "/images/cases/thumb/",
    jobList: ["Підготовка", "Зйомка", "Монтаж", "Кольорокорекція"],
  },
  {
    heading: "ютуб проєкт - Ти київ бадоєв",
    description:
      "Діджитал агенція, що створює цілісний продукт створює ціccfffffлісний продукт генція, що створює цілісний продукт ств",
    thumbUrl: "/images/cases/thumb/",
    jobList: ["Зйомка", "Оператор", "Друк"],
  },
  {
    heading: "друкована продукція - pepsico",
    description:
      "Діджитал агенція, що створює цілісний продукт створює ціccfffffлісний продукт генція, що створює цілісний продукт ств",
    thumbUrl: "/images/cases/thumb/",
    jobList: ["Копірайтинг", "Дослідження", "Дизайн", "Переклад", "Друк"],
  },
] as ICaseCard[];
