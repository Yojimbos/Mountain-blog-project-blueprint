const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

export const siteConfig = {
  name: "Гірський Блок",
  description:
    "Українська платформа про маршрути, спорядження, безпеку та практичну підготовку до гірських походів.",
  url: configuredSiteUrl || "http://localhost:3000",
  email: "hello@girskyi-blok.ua",
  author: "Команда Гірського Блоку",
  navItems: [
    { href: "/", label: "Головна" },
    { href: "/about", label: "Про проєкт" },
    { href: "/routes", label: "Маршрути" },
    { href: "/equipment", label: "Спорядження" },
    { href: "/safety", label: "Безпека" },
    { href: "/blog", label: "Блог" },
    { href: "/contact", label: "Контакти" },
  ],
};
