'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod/v4';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Loader2, Send } from 'lucide-react';
import { toast } from 'sonner';
import { InquiryFormData } from '@/types/inquiry';

const inquirySchema = z.object({
  companyName: z.string().min(1, 'Company name is required'),
  contactName: z.string().min(1, 'Contact name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().optional(),
  country: z.string().optional(),
  quantity: z.string().optional(),
  specifications: z.string().optional(),
  message: z.string().optional(),
});

type InquirySchema = z.infer<typeof inquirySchema>;

interface InquiryFormProps {
  productName?: string;
  productId?: number;
}

export default function InquiryForm({ productName, productId }: InquiryFormProps) {
  const t = useTranslations('contact.form');
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InquirySchema>({
    resolver: zodResolver(inquirySchema),
  });

  async function onSubmit(data: InquirySchema) {
    setSubmitting(true);
    try {
      const payload: InquiryFormData = {
        ...data,
        productName,
        productId,
      };

      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Failed to submit');

      toast.success(t('success'));
      reset();
    } catch {
      toast.error(t('error'));
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {productName && (
        <div className="bg-muted/50 rounded-lg p-3 mb-2">
          <p className="text-xs text-muted-foreground mb-1">Product</p>
          <p className="text-sm font-medium">{productName}</p>
        </div>
      )}

      <div>
        <label className="text-sm font-medium mb-1 block">
          {t('companyName')} <span className="text-destructive">*</span>
        </label>
        <Input {...register('companyName')} placeholder={t('companyName')} />
        {errors.companyName && (
          <p className="text-xs text-destructive mt-1">{errors.companyName.message}</p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium mb-1 block">
            {t('contactName')} <span className="text-destructive">*</span>
          </label>
          <Input {...register('contactName')} placeholder={t('contactName')} />
          {errors.contactName && (
            <p className="text-xs text-destructive mt-1">{errors.contactName.message}</p>
          )}
        </div>
        <div>
          <label className="text-sm font-medium mb-1 block">
            {t('email')} <span className="text-destructive">*</span>
          </label>
          <Input {...register('email')} type="email" placeholder={t('email')} />
          {errors.email && (
            <p className="text-xs text-destructive mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium mb-1 block">{t('phone')}</label>
          <Input {...register('phone')} placeholder={t('phone')} />
        </div>
        <div>
          <label className="text-sm font-medium mb-1 block">{t('country')}</label>
          <Input {...register('country')} placeholder={t('country')} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium mb-1 block">{t('quantity')}</label>
          <Input {...register('quantity')} placeholder={t('quantityPlaceholder')} />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium mb-1 block">{t('specifications')}</label>
        <Textarea
          {...register('specifications')}
          placeholder={t('specificationsPlaceholder')}
          rows={2}
        />
      </div>

      <div>
        <label className="text-sm font-medium mb-1 block">{t('message')}</label>
        <Textarea
          {...register('message')}
          placeholder={t('messagePlaceholder')}
          rows={3}
        />
      </div>

      <Button type="submit" disabled={submitting} className="w-full gap-2">
        {submitting ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Send className="h-4 w-4" />
        )}
        {t('submit')}
      </Button>
    </form>
  );
}
