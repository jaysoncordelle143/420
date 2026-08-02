
'use client'
import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';

export default function AdminOrderManager() {
  const supabase = createClient();

  return (
    <div className="bg-gray-900 p-6 rounded-xl border border-green-900">
      <h2 className="text-2xl font-bold mb-4">Order Management</h2>
    </div>
  );
}
