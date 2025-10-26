"use client";
import { useState } from "react";
import Table from "@/components/Table";
import Table2 from "@/components/Table2";
import ModalContainer from "@/components/ui/ModalContainer";
import { useRouter } from 'next/navigation';


export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("");
    const router =useRouter()

  return (
    <>
      <div className="w-full max-w-6xl mx-auto animate-fade-in ">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 bg-gradient-to-r from-gg-blue to-gg-dark-gold bg-clip-text text-transparent text-center">
          Sistema De Gestion De Pasajeros
        </h2>
        <div className="flex justify-center mb-8">
          <div className="grid w-full max-w-md grid-cols-2 border border-gray-300 bg-gray-50 rounded-xl shadow-sm overflow-hidden">
            <button
              onClick={() => setActiveTab("A")}
              className={`py-3 font-medium transition-colors ${
                activeTab === "A"
                  ? "bg-gg-blue text-white"
                  : "bg-transparent text-gray-700 hover:bg-gray-100"
              }`}>
              Tabla A
            </button>
            <button
              onClick={() => setActiveTab("B")}
              className={`py-3 font-medium transition-colors ${
                activeTab === "B"
                  ? "bg-gg-blue text-white"
                  : "bg-transparent text-gg-gray hover:bg-gray-100"
              }`}>
              Tabla B
            </button>
          </div>
        </div>

        <div className={`items-center justify-center my-8 animate-fade-in ${activeTab != "" ? 'flex' : 'hidden'}`}>
              <button
                type='button'
                className="border border-gg-gold text-gg-gold px-6 py-2 rounded-md font-medium
                        hover:bg-gg-gold hover:text-gg-gray transition-all duration-300"
                onClick={ () => router.push(`?prevView${activeTab}=true&showModal=true`)}>
                Predicción
              </button>
        </div>

        <div className="bg-white rounded-lg shadow p-6 transition-all duration-300 animate-fade-in min-h-[200px]">
          {activeTab === "A" && <Table />}
          {activeTab === "B" && <Table2 />}
          {activeTab === "" && (
            <div className="flex items-center justify-center text-gray-500 h-full">
              Selecciona una tabla
            </div>
          )}
        </div>
      </div>

      <ModalContainer />
    </>
  );
}
