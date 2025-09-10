import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function copyToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    console.log('Content copied to clipboard!');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}
