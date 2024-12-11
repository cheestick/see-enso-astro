export interface ISEContactInfo {
  icon: string;
  caption: string;
  link?: string;
}

export const seContactInfo: ISEContactInfo[] = [
  {
    icon: "/images/location-pin.svg",
    caption: "Україна, Київ",
  },
  {
    icon: "/images/phone-call.svg",
    caption: "+380 99 967 77 76",
    link: "tel:+380999677776",
  },
  {
    icon: "/images/telegram.svg",
    caption: "telegram",
    link: "https://t.me/See_Enso",
  },
  {
    icon: "/images/instagram.svg",
    caption: "instagram",
    link: "https://www.instagram.com/see.enso",
  },
  {
    icon: "/images/youtube.svg",
    caption: "youtube",
    link: "https://youtube.com",
  },
  {
    icon: "/images/email.svg",
    caption: "enso.filmmaker@gmail.com",
    link: "mail:enso.filmmaker@gmail.com",
  },
  // {
  //   icon: "/images/tiktok.svg",
  //   caption: "tiktok",
  //   link: "https://tiktok.com",
  // },
];

export const seContacts: Record<string, ISEContactInfo> = {
  location: {
    icon: "/images/location-pin.svg",
    caption: "Україна, Київ",
  },
  phone: {
    icon: "/images/phone-call.svg",
    caption: "+380 99 967 77 76",
    link: "+380999677776",
  },
  telegram: {
    icon: "/images/telegram.svg",
    caption: "telegram",
    link: "https://t.me/See_Enso",
  },
  instagram: {
    icon: "/images/instagram.svg",
    caption: "instagram",
    link: "https://www.instagram.com/see.enso",
  },
  youtube: {
    icon: "/images/youtube.svg",
    caption: "youtube",
    link: "https://youtube.com",
  },
  email: {
    icon: "/images/email.svg",
    caption: "enso.filmmaker@gmail.com",
    link: "enso.filmmaker@gmail.com",
  },
  tiktok: {
    icon: "/images/tiktok.svg",
    caption: "tiktok",
    link: "https://tiktok.com",
  },
};
