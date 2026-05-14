export type ServiceItem = {
  name: string;
  price: number | string;
  note?: string;
};

export type ServiceGroup = {
  group: string;
  items: ServiceItem[];
};

export type ServiceCategory = {
  id: string;
  label: string;
  groups: ServiceGroup[];
};

function bd(price: number | string) {
  if (typeof price === "string") return price;
  const str = price.toString();
  return str.includes(".") ? `BD ${price}` : `BD ${price}`;
}
export { bd };

export const services: ServiceCategory[] = [
  {
    id: "hair",
    label: "Hair",
    groups: [
      {
        group: "Hair Wash",
        items: [
          { name: "Hair wash", price: 2.2 },
          { name: "Hair wash + Airdry", price: 4.4 },
        ],
      },
      {
        group: "Haircut",
        items: [
          { name: "Hair trim", price: 5.5 },
          { name: "Haircut", price: 11 },
        ],
      },
      {
        group: "Blow Dry",
        items: [
          { name: "Short", price: 6.6 },
          { name: "Medium", price: 8.8 },
          { name: "Long", price: 11 },
          { name: "Blowdry wavy", price: 13.2 },
        ],
      },
      {
        group: "Wavy",
        items: [
          { name: "Short", price: 11 },
          { name: "Medium", price: 13.2 },
          { name: "Long", price: 16.5 },
          { name: "Retro", price: 33 },
        ],
      },
      {
        group: "Hairstyle",
        items: [{ name: "Starting price", price: 27.5 }],
      },
    ],
  },
  {
    id: "treatments",
    label: "Treatments",
    groups: [
      {
        group: "Treatments",
        items: [
          { name: "Olaplex", price: 22 },
          { name: "Tea tree", price: 11 },
          { name: "L'Oréal Power Mix", price: 8.8 },
        ],
      },
      {
        group: "Nashi Filler Therapy",
        items: [
          { name: "Short", price: 19.8 },
          { name: "Medium", price: 23.1 },
          { name: "Long", price: 27.5 },
        ],
      },
      {
        group: "Express Filler",
        items: [
          { name: "Short", price: 16.5 },
          { name: "Medium", price: 22 },
          { name: "Long", price: 27.5 },
          { name: "Extra long", price: 31.9 },
        ],
      },
    ],
  },
  {
    id: "color",
    label: "Color",
    groups: [
      {
        group: "Hair Coloring",
        items: [
          { name: "Hair color (Full)", price: 33 },
          { name: "Hair color (Roots)", price: 16.5 },
          { name: "Hair color (Half roots)", price: 11 },
          { name: "Balayage", price: 38.5 },
          { name: "Highlights", price: 33 },
          { name: "Lowlights", price: 33 },
          { name: "Toner", price: 16.5 },
        ],
      },
    ],
  },
  {
    id: "nails-hands",
    label: "Nails — Hands",
    groups: [
      {
        group: "Manicure",
        items: [
          { name: "Manicure", price: 6.6 },
          { name: "Manicure + normal polish", price: 7.7 },
          { name: "Manicure + gel polish", price: 11 },
          { name: "Manicure + french polish", price: 9.9 },
          { name: "Manicure + french gel polish", price: 13.2 },
          { name: "Manicure + chrome mirror gel polish", price: 13.2 },
        ],
      },
      {
        group: "Nail Color",
        items: [
          { name: "Nail color", price: 2.2 },
          { name: "French nail color", price: 4.4 },
          { name: "Nail color removal", price: 1.1 },
          { name: "Gel color", price: 7.7 },
          { name: "French gel color", price: 9.9 },
          { name: "Gel color removal", price: 4.4 },
        ],
      },
      {
        group: "Cut & File",
        items: [
          { name: "Cut & file", price: 3.3 },
          { name: "Cut & file + color", price: 5.5 },
        ],
      },
      {
        group: "False Nails",
        items: [
          { name: "False nails + manicure + color", price: 16.5 },
          { name: "False nails + manicure + french color", price: 18.7 },
          { name: "False nails + color", price: 12.1 },
          { name: "False nails per nail", price: 1.7 },
          { name: "False nails removal", price: 4.4 },
        ],
      },
      {
        group: "Gel & Acrylic",
        items: [
          { name: "Soft gel set", price: 27.5 },
          { name: "Soft gel per nail", price: 2.2 },
          { name: "Builder per nail", price: 2.2 },
          { name: "Acrylic / poly gel full set", price: 30.8 },
          { name: "Acrylic / poly gel refill", price: 19.8 },
          { name: "Acrylic / poly gel per nail", price: 2.75 },
          { name: "Acrylic / poly gel removal", price: 8.8 },
          { name: "Poly gel ombré", price: 35.2 },
        ],
      },
      {
        group: "Nail Art",
        items: [{ name: "Nail art (per nail)", price: 1.1 }],
      },
    ],
  },
  {
    id: "nails-feet",
    label: "Nails — Feet",
    groups: [
      {
        group: "Pedicure",
        items: [
          { name: "Pedicure", price: 7.7 },
          { name: "Pedicure + normal polish", price: 8.8 },
          { name: "Pedicure + gel polish", price: 12.1 },
          { name: "Pedicure + french polish", price: 11 },
          { name: "Pedicure + french gel polish", price: 14.3 },
          { name: "Pedicure + chrome mirror gel polish", price: 14.3 },
        ],
      },
      {
        group: "Nail Color",
        items: [
          { name: "Nail color", price: 2.2 },
          { name: "French nail color", price: 4.4 },
          { name: "Nail color removal", price: 1.1 },
          { name: "Gel color", price: 6.6 },
          { name: "French gel color", price: 8.8 },
          { name: "Gel color removal", price: 4.4 },
        ],
      },
      {
        group: "Cut & File",
        items: [
          { name: "Cut & file", price: 3.3 },
          { name: "Cut & file + color", price: 5.5 },
        ],
      },
    ],
  },
];

export function formatPrice(price: number | string): string {
  if (typeof price === "string") return price;
  const s = price.toString();
  const decimals = s.includes(".") ? s.split(".")[1].length : 0;
  if (decimals === 0) return `BD ${price}`;
  return `BD ${price}`;
}
