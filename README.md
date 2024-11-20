### Workshop NextJS 15 Camping สู้ๆ ครับทุกๆ คน

## EP1 ติดตั้ง NextJS15 & Shadcn

```bash
npx create-next-app@latest camp

npx shadcn@latest init -d
npx shadcn@latest add button
```

## EP2 ติดตั้ง Navbar

```bash
npx shadcn@latest add input
```

## EP3 Darkmode

# https://ui.shadcn.com/docs/dark-mode/next

```bash
npm install next-themes
```

## EP4 Profile Button

```tsx
type NavLinks = {
  href: string;
  label: string;
};

export const links: NavLinks[] = [
  { href: "/", label: "Home" },
  { href: "/favorits", label: "Favorits" },
  { href: "/camp", label: "Camp" },
];
```

## สู้ๆ ครับทุกๆ คน
