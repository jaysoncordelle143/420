import { createBrowserClient } from '@supabase/ssr';

export const createClient = () => {
  return createBrowserClient(
    'https://obqpewvughxnyijnijdv.supabase.co',
    'sb_publishable_uSqgjMWrFNnlzykDzDQmIQ_pXjTyWDA'
  );
};

