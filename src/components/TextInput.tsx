import React, { InputHTMLAttributes, ReactNode } from 'react'
import { clsx } from "clsx";
import { Slot } from '@radix-ui/react-slot';


export interface TextInputRootProps {
  children: ReactNode;
}
function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div className='flex items-center gap-3 py-4 px-3 rounded bg-gray-800   w-full  focus-within:ring-2 ring-red-500'>
      {children}
    </div>
  )
}

export interface TextInputIconProps {
  children: ReactNode;
}
function TextInputIcon({ children }: TextInputIconProps) {
  return (
    <Slot className='w-6 h-6 text-gray-400'>
      {children}
    </Slot>
  )
}

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> { }
function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className="bg-transparent flex-1 outline-none text-gray-100 text-xs placeholder:text-gray-400"
      {...props}
    />
  )
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon
}