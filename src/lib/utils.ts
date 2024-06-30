import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { fileToBase64 } from './image'
const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export { cn, fileToBase64 }
