import { z } from 'zod';
import MonetiseSettingsForm from '@/src/components/MonetiseSettingsForm';

export const NewAssetsSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  metadata: z
    .array(z.object({}))
    .min(1, 'At least one tag is required')
    .default([]),
  thumbnail: z
    .instanceof(File)
    .optional()
    .nullable(),
  content: z.string().url('Must be a valid URL'),
  description: z
    .string()
    .max(500, 'Description must be less than 500 characters')
    .optional()
    .nullable(),
  document: z
    .union([
      z.string().url('Must be a valid URL'),
      z.instanceof(File),
      z.null(),
    ])
    .nullable(),
});

export type NewAssetsFormValues = z.infer<typeof NewAssetsSchema>;

export const MonetiseSettingsSchema = z.object({});

export type MonetiseSettingsFormValues = z.infer<typeof MonetiseSettingsSchema>;
