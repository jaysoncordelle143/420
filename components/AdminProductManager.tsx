'use client'
import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function AdminProductManager({ products }: { products: any[] }) {
  const supabase = createClient()
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  const addProduct = async () => {
    await supabase.from('products').insert({ 
      name, 
      price_usdt: parseFloat(price), 
      is_active: true 
    })
    window.location.reload() // Simple reload for MVP
  }

  const toggleStock = async (id: string, currentStock: number) => {
    await supabase.from('products').update({ stock: currentStock + 1 }).eq('id', id)
    window.location.reload()
  }

  return (
    <div className="bg-gray-900 p-6 rounded-xl border border-green-900">
      <h2 className="text-2xl font-bold mb-4">Manage Products</h2>
      
      {/* Add Product Form */}
      <div className="flex gap-2 mb-6">
        <input className="p-2 bg-black rounded text-white flex-1" placeholder="Strain Name" onChange={e => setName(e.target.value)} />
        <input className="p-2 bg-black rounded text-white w-32" placeholder="USDT" type="number" onChange={e => setPrice(e.target.value)} />
        <button onClick={addProduct} className="bg-green-600 px-4 rounded hover:bg-green-700">Add</button>
      </div>

      {/* Products List */}
      <ul className="space-y-2">
        {products.map(p => (
          <li key={p.id} className="flex justify-between items-center bg-black p-3 rounded border border-gray-800">
            <span>{p.name} - {p.price_usdt} USDT (Stock: {p.stock})</span>
            <button onClick={() => toggleStock(p.id, p.stock)} className="text-blue-400 hover:underline">+ Restock</button>
          </li>
        ))}
      </ul>
    </div>
  )
}