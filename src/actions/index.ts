import { defineAction } from "astro:actions";
import { z } from "astro:schema";

const phoneNumberRegExp = new RegExp(
  "^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"
);

export const server = {
  sendContactFormData: defineAction({
    accept: "form",
    input: z.object({
      Fullname: z
        .string()
        .trim()
        .min(1, "Від 1 символа")
        .max(30, "До 30 символів"),
      Phone: z
        .string()
        .trim()
        .min(5, "Від 5 символа")
        .max(20, "До 20 символів")
        .regex(phoneNumberRegExp, "Не відповідає формату телефону"),
      Email: z
        .string()
        .trim()
        .email("Не коректний формат пошти")
        .min(5, "Від 5 символа")
        .max(50, "До 50 символів"),
      Message: z
        .string()
        .trim()
        .min(5, "Від 5 символа")
        .max(500, "До 50 символів"),
    }),
    handler: async (input) => {
      const formData = new FormData();
      for (const key in input) {
        if (input.hasOwnProperty(key)) {
          // @ts-ignore
          formData.append(key, input[key]);
        }
      }

      const googleSheetUrl = import.meta.env.CONTACT_FORM_GSHEET_URL;
      const res = await fetch(googleSheetUrl, {
        method: "POST",
        body: formData,
      });

      return res.json();
    },
  }),
};
