"use client"
import { Data } from '@/src/schemas';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

export default function Table() {

  // useEffect(()=>{
  //    //fetch
  //  //const token = getToken()
  //  // const url = `${process.env.API_URL}/budgets/${params.budgetId}/expenses/${params.expenseId}`
  //   // const req = await fetch(url,{
  //   //     headers:{
  //   //         'Authorization':`Bearer ${token}`
  //   //     }
  //   // })
    
  //   // const json = await req.json()
  // })
  
  const router =useRouter()

    const usuarios:Data[] = [
    { id: 1, fecha: "10-9-2025", vuelo:2, capacidad:500, vendido: 500 },
      { id: 2,  fecha: "10-9-2024", vuelo:2, capacidad:500, vendido: 500},
  ];
   return (
      <div className="px-4 sm:px-6 lg:px-8 mt-20">
        <div className="mt-8 flow-root ">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 bg-white p-5 ">
              <table className="min-w-full divide-y divide-gray-300 ">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Vuelo
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Capacidad
                    </th>

                      <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Vendido
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                    >
                      <span className="sr-only">Acciones</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {usuarios.map((usuario) => (
                    <tr key={usuario.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">{usuario.fecha}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{usuario.vuelo}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{usuario.capacidad}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{usuario.vendido}</td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      {/* <Link href={`/admin/products/${product.id}/edit`} className="text-red-600 hover:text-red-800">Eliminar <span className="sr-only">, {product.name}</span> </Link> */}
                      <button
                type='button'
                className='block px-3 py-1 text-sm leading-6 text-gg-gold hover:underline'
                onClick={ () => router.push(`?prevView=true&showModal=true`)}
              >
                view
                </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
}
