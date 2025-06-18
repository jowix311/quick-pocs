import { clsx, type ClassValue } from "clsx"
import { PropsWithChildren } from "react"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export type CommonProps = PropsWithChildren & {
  className?: string
}