"use client";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { RotateCw } from "lucide-react";

type btnSize = "default" | "lg" | "sm";
// const roitai:string = 'tam'
type SubmitButtonProps = {
  className?: string;
  size?: btnSize;
  text?: string;
};

export const SubmitButton = ({ className, size, text }: SubmitButtonProps) => {
  // code
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      type="submit"
      size={size}
      className={`${className} capitalize`}
    >
      {pending ? <RotateCw className="animate-spin" /> : <p>{text}</p>}
    </Button>
  );
};
