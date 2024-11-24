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

## EP 5 Clerk Authentication

```plaintext
Clerk จัดการผู้ใช้งาน
https://clerk.com/
---- Middleware ----
https://clerk.com/docs/references/nextjs/clerk-middleware
```

## EP 6 Toast & SignIn, SignOut

```tsx
npx shadcn@latest add toast
```

## EP 7 Form

```plaintext
1. form
2. Action
3. แยก components
4. Props, types
5. Send to Server action
6. Validate with zod
7. connect db (supabase)
8. insert to db (supabase)
```

https://clerk.com/docs/deployments/clerk-environment-variables#sign-in-and-sign-up-redirects

```env
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL='/profile/create'
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL='/profile/create'
```

## EP8 FromInput

```tsx
// rafce
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type FormInputProps = {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
};

const FormInput = (props: FormInputProps) => {
  const { name, type, label, defaultValue, placeholder } = props;
  return (
    <div className="mb-2">
      <Label htmlFor={name}> {label} </Label>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </div>
  );
};
export default FormInput;
```

## EP9 Buttons

## EP 10

### Step 1 FormContainer.tsx แยก file

```tsx
"use client";
const FormContainer = ({ action, children }) => {
  return <form action={action}>{children}</form>;
};
export default FormContainer;
```

### Step 2 FormContainer.tsx เพิ่ม useActionState

```tsx
"use client";
import { useActionState } from "react";
const initialState = {
  message: "",
};

const FormContainer = ({ action, children }) => {
  const [state, formAction] = useActionState(action, initialState);

  return <form action={formAction}>{children}</form>;
};
export default FormContainer;
```

### Step 3 FormContainer.tsx กำหนด Type

```tsx
"use client";
import { useActionState } from "react";

const initialState = {
  message: "",
};
type actionFunction = (
  prevState: any,
  formData: FormData
) => Promise<{ message: string }>;

const initialState = {
  message: "",
};

const FormContainer = ({ action, children }) => {
  const [state, formAction] = useActionState(action, initialState);

  return <form action={formAction}>{children}</form>;
};
export default FormContainer;
```

## EP 11 Zod

## EP 12 Prisma



```sh
npm install prisma --save-dev
npm install @prisma/client
```

```sh
npx prisma init
```

```plaintext
https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/nextjs-prisma-client-dev-practices
```
```tsx utils/db.ts
import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma
```

```prisma

model Profile {
  id           String     @id @default(uuid())
  clerkId      String     @unique
  firstName    String
  lastName     String
  username     String
  email        String
  profileImage String
  createdAt    DateTime   @default(now())
  updatedAt    DateTime   @updatedAt
  landmarks Landmark[]
  favorites Favorite[]
}

model Landmark {
  id          String     @id @default(uuid())
  name        String
  description String
  category    String
  image       String
  province    String
  lat         Float
  lng         Float
  price       Int
  createdAt   DateTime   @default(now())
  updatedAt   DateTime   @updatedAt
  profile     Profile    @relation(fields: [profileId], references: [clerkId], onDelete: Cascade)
  profileId   String
  favorites   Favorite[]
}

model Favorite {
  id        String   @id @default(uuid())
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  profile   Profile  @relation(fields: [profileId], references: [clerkId], onDelete: Cascade)
  profileId String

  landmark   Landmark  @relation(fields: [landmarkId], references: [id], onDelete: Cascade)
  landmarkId String

}
```

```bash
npx prisma db push
```

```bash
npx prisma studio
```

## EP 13 Supabase & Prisma
```plaintext

```

## EP 14 Create Profile
```plaintext
https://clerk.com/docs/references/nextjs/current-user
https://clerk.com/docs/users/metadata
```

## สู้ๆ ครับทุกๆ คน
