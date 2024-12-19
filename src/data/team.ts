export interface ITeamCard {
  fullname: string;
  position: string;
  imageFilename: string;
}

export default [
  {
    fullname: "Роман",
    position: "Co-founder, директор",
    imageFilename: "roman",
  },
  {
    fullname: "Белла",
    position: "Co-founder, проджект",
    imageFilename: "bella",
  },
  {
    fullname: "Сніжана",
    position: "UI/UX дизайнер",
    imageFilename: "snizhana",
  },
  {
    fullname: "Лєна",
    position: "СММ",
    imageFilename: "lena",
  },
] as ITeamCard[];
