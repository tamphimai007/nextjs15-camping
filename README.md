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
import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
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

## EP 15 Landmark

## EP 16 Categories

```ts
import {
  Tent,
  House,
  Mountain,
  Store,
  Utensils,
  Hotel,
  Bed,
} from "lucide-react";

export const categories = [
  {
    label: "camping",
    icon: Tent,
  },
  {
    label: "house",
    icon: House,
  },
  {
    label: "hotel",
    icon: Hotel,
  },
  {
    label: "hostel",
    icon: Bed,
  },
  {
    label: "moutain",
    icon: Mountain,
  },
  {
    label: "store",
    icon: Store,
  },
  {
    label: "food",
    icon: Utensils,
  },
];
```

## EP 17 Province

```ts
export const provinces = [
  { PROVINCE_ID: 1, PROVINCE_NAME: "กรุงเทพมหานคร" },
  { PROVINCE_ID: 2, PROVINCE_NAME: "สมุทรปราการ" },
  { PROVINCE_ID: 3, PROVINCE_NAME: "นนทบุรี" },
  { PROVINCE_ID: 4, PROVINCE_NAME: "ปทุมธานี" },
  { PROVINCE_ID: 5, PROVINCE_NAME: "พระนครศรีอยุธยา" },
  { PROVINCE_ID: 6, PROVINCE_NAME: "อ่างทอง" },
  { PROVINCE_ID: 7, PROVINCE_NAME: "ลพบุรี" },
  { PROVINCE_ID: 8, PROVINCE_NAME: "สิงห์บุรี" },
  { PROVINCE_ID: 9, PROVINCE_NAME: "ชัยนาท" },
  { PROVINCE_ID: 10, PROVINCE_NAME: "สระบุรี" },
  { PROVINCE_ID: 11, PROVINCE_NAME: "ชลบุรี" },
  { PROVINCE_ID: 12, PROVINCE_NAME: "ระยอง" },
  { PROVINCE_ID: 13, PROVINCE_NAME: "จันทบุรี" },
  { PROVINCE_ID: 14, PROVINCE_NAME: "ตราด" },
  { PROVINCE_ID: 15, PROVINCE_NAME: "ฉะเชิงเทรา" },
  { PROVINCE_ID: 16, PROVINCE_NAME: "ปราจีนบุรี" },
  { PROVINCE_ID: 17, PROVINCE_NAME: "นครนายก" },
  { PROVINCE_ID: 18, PROVINCE_NAME: "สระแก้ว" },
  { PROVINCE_ID: 19, PROVINCE_NAME: "นครราชสีมา" },
  { PROVINCE_ID: 20, PROVINCE_NAME: "บุรีรัมย์" },
  { PROVINCE_ID: 21, PROVINCE_NAME: "สุรินทร์" },
  { PROVINCE_ID: 22, PROVINCE_NAME: "ศรีสะเกษ" },
  { PROVINCE_ID: 23, PROVINCE_NAME: "อุบลราชธานี" },
  { PROVINCE_ID: 24, PROVINCE_NAME: "ยโสธร" },
  { PROVINCE_ID: 25, PROVINCE_NAME: "ชัยภูมิ" },
  { PROVINCE_ID: 26, PROVINCE_NAME: "อำนาจเจริญ" },
  { PROVINCE_ID: 27, PROVINCE_NAME: "หนองบัวลำภู" },
  { PROVINCE_ID: 28, PROVINCE_NAME: "ขอนแก่น" },
  { PROVINCE_ID: 29, PROVINCE_NAME: "อุดรธานี" },
  { PROVINCE_ID: 30, PROVINCE_NAME: "เลย" },
  { PROVINCE_ID: 31, PROVINCE_NAME: "หนองคาย" },
  { PROVINCE_ID: 32, PROVINCE_NAME: "มหาสารคาม" },
  { PROVINCE_ID: 33, PROVINCE_NAME: "ร้อยเอ็ด" },
  { PROVINCE_ID: 34, PROVINCE_NAME: "กาฬสินธุ์" },
  { PROVINCE_ID: 35, PROVINCE_NAME: "สกลนคร" },
  { PROVINCE_ID: 36, PROVINCE_NAME: "นครพนม" },
  { PROVINCE_ID: 37, PROVINCE_NAME: "มุกดาหาร" },
  { PROVINCE_ID: 38, PROVINCE_NAME: "เชียงใหม่" },
  { PROVINCE_ID: 39, PROVINCE_NAME: "ลำพูน" },
  { PROVINCE_ID: 40, PROVINCE_NAME: "ลำปาง" },
  { PROVINCE_ID: 41, PROVINCE_NAME: "อุตรดิตถ์" },
  { PROVINCE_ID: 42, PROVINCE_NAME: "แพร่" },
  { PROVINCE_ID: 43, PROVINCE_NAME: "น่าน" },
  { PROVINCE_ID: 44, PROVINCE_NAME: "พะเยา" },
  { PROVINCE_ID: 45, PROVINCE_NAME: "เชียงราย" },
  { PROVINCE_ID: 46, PROVINCE_NAME: "แม่ฮ่องสอน" },
  { PROVINCE_ID: 47, PROVINCE_NAME: "นครสวรรค์" },
  { PROVINCE_ID: 48, PROVINCE_NAME: "อุทัยธานี" },
  { PROVINCE_ID: 49, PROVINCE_NAME: "กำแพงเพชร" },
  { PROVINCE_ID: 50, PROVINCE_NAME: "ตาก" },
  { PROVINCE_ID: 51, PROVINCE_NAME: "สุโขทัย" },
  { PROVINCE_ID: 52, PROVINCE_NAME: "พิษณุโลก" },
  { PROVINCE_ID: 53, PROVINCE_NAME: "พิจิตร" },
  { PROVINCE_ID: 54, PROVINCE_NAME: "เพชรบูรณ์" },
  { PROVINCE_ID: 55, PROVINCE_NAME: "ราชบุรี" },
  { PROVINCE_ID: 56, PROVINCE_NAME: "กาญจนบุรี" },
  { PROVINCE_ID: 57, PROVINCE_NAME: "สุพรรณบุรี" },
  { PROVINCE_ID: 58, PROVINCE_NAME: "นครปฐม" },
  { PROVINCE_ID: 59, PROVINCE_NAME: "สมุทรสาคร" },
  { PROVINCE_ID: 60, PROVINCE_NAME: "สมุทรสงคราม" },
  { PROVINCE_ID: 61, PROVINCE_NAME: "เพชรบุรี" },
  { PROVINCE_ID: 62, PROVINCE_NAME: "ประจวบคีรีขันธ์" },
  { PROVINCE_ID: 63, PROVINCE_NAME: "นครศรีธรรมราช" },
  { PROVINCE_ID: 64, PROVINCE_NAME: "กระบี่" },
  { PROVINCE_ID: 65, PROVINCE_NAME: "พังงา" },
  { PROVINCE_ID: 66, PROVINCE_NAME: "ภูเก็ต" },
  { PROVINCE_ID: 67, PROVINCE_NAME: "สุราษฎร์ธานี" },
  { PROVINCE_ID: 68, PROVINCE_NAME: "ระนอง" },
  { PROVINCE_ID: 69, PROVINCE_NAME: "ชุมพร" },
  { PROVINCE_ID: 70, PROVINCE_NAME: "สงขลา" },
  { PROVINCE_ID: 71, PROVINCE_NAME: "สตูล" },
  { PROVINCE_ID: 72, PROVINCE_NAME: "ตรัง" },
  { PROVINCE_ID: 73, PROVINCE_NAME: "พัทลุง" },
  { PROVINCE_ID: 74, PROVINCE_NAME: "ปัตตานี" },
  { PROVINCE_ID: 75, PROVINCE_NAME: "ยะลา" },
  { PROVINCE_ID: 76, PROVINCE_NAME: "นราธิวาส" },
  { PROVINCE_ID: 77, PROVINCE_NAME: "บึงกาฬ" },
];
```


## EP 18
```tsx
const iconUrl =
  "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png";
const markerIcon = L.icon({
  iconUrl: iconUrl,
  iconSize: [20, 30],
});
```
## EP 19 Image Input

## EP 20 Validate Landmark
```ts
export const landmarkSchema = z.object({
  name: z
    .string()
    .min(2, { message: "ชื่อต้องมากกว่า 2 อักขระ" })
    .max(30, { message: "ชื่อต้องน้อยกว่า 30 อักขระ" }),
  category: z.string(),
  description: z
    .string()
    .min(2, { message: "รายละเอียดต้องมากกว่า 2 อักขระ" })
    .max(200, { message: "รายละเอียดต้องน้อยกว่า 200 อักขระ" }),
  price: z.coerce.number().int().min(0,{ message: 'ราคาต้องมากกว่า 0'}),
  province: z.string(),
  lat: z.coerce.number(),
  lng: z.coerce.number(),
});
```
## EP 21 Upload file to Supabase
```bash
npm install @supabase/supabase-
or
npm install @supabase/supabase-js --legacy-peer-deps
```
```plaintext
https://supabase.com/docs/guides/storage/uploads/standard-uploads
```
## EP 22 Fetch Data
## EP 23 Card
## EP 24 Card Detail
## EP 25 Favorite Button
## EP 26 SignIn Button
```plaintext
https://clerk.com/docs/references/nextjs/auth
```
## สู้ๆ ครับทุกๆ คน
