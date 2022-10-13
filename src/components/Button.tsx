import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import { clsx } from "clsx";
import { Slot } from '@radix-ui/react-slot';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export const Button = (
  {
    children,
    asChild,
    className,
    ...props
  }: ButtonProps) => {
  const Component = asChild ? Slot : "button";
  return (
    <Component
      {...props}
      className={clsx(
        "py-3 px-4 bg-red-600 rounded font-semibold text-white text-sm w-full focus:ring-2 ring-white transition-colors hover:bg-red-500"
        , className)}>

      {children}
    </Component>
  )
}
