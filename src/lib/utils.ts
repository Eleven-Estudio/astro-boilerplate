import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cls11 (...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
