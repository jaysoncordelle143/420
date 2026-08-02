import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { signOut } from '@/lib/auth';
import AdminProductManager from '@/components/AdminProductManager';
import AdminOrderManager from '@/components/AdminOrderManager';
import ChangePassword from '@/components/ChangePassword';

export default async function AdminDashboard() {
  const supabase = createClient();
  
  // Check if user is logged in
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    redirect('/login');
  }

  // Fetch data for admin tables
  const { data: products } = await supabase.from('products').select('*');
  const { data: orders } = await supabase.from('orders').select('*').order('created_at', { ascending: false });

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-green-400">Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-400">{user.email}</span>
            <form action={signOut}>
              <button
                type="submit"
                className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-sm font-medium"
              >
                Logout
              </button>
            </form>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <AdminProductManager products={products || []} />
          <AdminOrderManager orders={orders || []} />
        </div>

        <ChangePassword />
      </div>
    </div>
  );
}