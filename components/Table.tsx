"use client"
import {  DataSet } from '@/src/schemas';
// import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function Table() {
  const [data,setData]=useState<DataSet[]>()
    const [day, setDay] = useState<string>('') // formato YYYY-MM-DD

const fetchData = async (selectedDay?: string) => {
    let url = `${process.env.NEXT_PUBLIC_URL}/api/date`;
    if (selectedDay) {
      const formattedDay = selectedDay.replaceAll('-', ''); // convierte YYYY-MM-DD a YYYYMMDD
      url += `/${formattedDay}`;
    }
    console.log(url);
    
    const res = await fetch(url)
    console.log(res);
    
    const json = await res.json()
    console.log(json);
    
    setData(json)
  }

  useEffect(()=>{

    const url = `${process.env.NEXT_PUBLIC_URL}/api/data`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  },[])
  
  //const router =useRouter()
   return (
          <div className="px-4 sm:px-6 lg:px-8 mt-8">
      {/* Date picker para filtrar por día */}
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-700">Filtrar por fecha</label>
        <input
          type="date"
          className="border px-3 py-2 rounded"
          value={day}
          onChange={(e) => {
            const selected = e.target.value // "YYYY-MM-DD"
            setDay(selected)
            fetchData(selected)
          }}
        />
      </div>
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
                  {data && 
                  
                  (
                    data.map((usuario) => (
                    <tr key={usuario.day}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">{usuario.day}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{usuario.flights}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{usuario.max_capacity}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{usuario.passengers}</td>
                      {/* <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0"> */}
                      {/* <Link href={`/admin/products/${product.id}/edit`} className="text-red-600 hover:text-red-800">Eliminar <span className="sr-only">, {product.name}</span> </Link> */}
                      {/* <button
                type='button'
                className='block px-3 py-1 text-sm leading-6 text-gg-gold hover:underline'
                onClick={ () => router.push(`?prevView=true&showModal=true`)}
              >
                view
                </button>
                      </td> */}
                    </tr>
                  ))


                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
}
