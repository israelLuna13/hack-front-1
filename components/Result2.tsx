import { useState } from "react";

export default function Result2({closeModal}:{closeModal:()=>void}) {
  const [day, setDay] = useState<string>('');
    const [day2, setDay2] = useState<string>('');
    const [res, setRes] = useState<Array<any>>();
  
    const calcularFechaMax = (fecha: string) => {
      if (!fecha) return "";
      const base = new Date(fecha);
      base.setDate(base.getDate() + 14);
      return base.toISOString().split("T")[0];
    };
  
    const fetchData = async () => {
      if(!day) return;
      if(!day2) return;
      console.log("dia " + day);
      console.log("dia2 " + day2);
      setRes([]);
      // Hacer consulta para el result2
      // let url = `${process.env.NEXT_PUBLIC_URL}/api/date`;
      // if (day) {
      //   const formattedDay = day.replaceAll('-', ''); // convierte YYYY-MM-DD a YYYYMMDD
      //   url += `/${formattedDay}`;
      // }
      // console.log(url);
      
      // const result = await fetch(url)
      // console.log(res);
      
      // const json = await res.json()
      // console.log(json);
      
      // setData(json)
    }
  
    return (
      <div className="flex flex-col text-center">
        <h2 className="mb-10 text-xl">Seleccione las fechas a consultar</h2>
        <div className="flex justify-evenly">
          <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">Fecha inicial</label>
              <input
                type="date"
                className="border px-3 py-2 rounded"
                value={day}
                onChange={(e) => {
                  const selected = e.target.value // "YYYY-MM-DD"
                  setDay(selected)
                }}
              />
          </div>
          <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">Fecha de cierre</label>
              <input
                type="date"
                min={day}
                max={calcularFechaMax(day)}
                className="border px-3 py-2 rounded"
                value={day2}
                onChange={(e) => {
                  const selected2 = e.target.value // "YYYY-MM-DD"
                  setDay2(selected2)
                }}
              />
          </div>
        </div>
        <div className="flex justify-center items-center">
        <button type="button" className="py-2 px-6 font-medium bg-gg-gold text-gg-gray rounded-md hover:border-gg-gold hover:border hover:bg-transparent hover:text-gg-gold" onClick={() => fetchData()}>Consultar</button>
        </div>
  
        {/* Tabla resultados */}
        {res &&
        <div className="px-4 sm:px-6 lg:px-8">
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
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {/* {res && (
                      res.map((usuario) => (
                      <tr key={usuario.day}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">{usuario.day}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{usuario.flights}</td>
                      </tr>
                    ))
                    )} */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>}
  
      </div>
    )
  }