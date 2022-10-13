import React, { ReactNode } from 'react'
import { clsx } from "clsx";
import { Slot } from '@radix-ui/react-slot';

export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
}

export const Button = (
  {
    children,
    asChild
  }: ButtonProps) => {
  const Component = asChild ? Slot : "button";
  return (
    <Component
      className={clsx(
        "py-4 px-3 bg-red-600 rounded font-semibold text-white text-sm w-full focus:ring-2 ring-white transition-colors hover:bg-red-500"
      )}>

      {children}
    </Component>
  )
}
