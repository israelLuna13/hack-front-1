"use client";
import { useState } from "react";
import Table from "@/components/Table";
import Table2 from "@/components/Table2";
import ModalContainer from "@/components/ui/ModalContainer";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("");

  return (
    <>
      <div className="w-full max-w-6xl mx-auto animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 bg-gradient-to-r from-gg-gold to-gg-dark-blue/20 bg-clip-text text-transparent text-center">
          Sistema de Gestión de Vuelos
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

        <div className="bg-white rounded-lg shadow p-6 transition-all duration-300 animate-fade-in min-h-[200px]">
          {activeTab === "A" && <Table />}
          {activeTab === "B" && <Table2 />}
          {activeTab === "" && (
            <div className="flex items-center justify-center text-gray-500 h-full">
              Select a table
            </div>
          )}
        </div>
      </div>

      <ModalContainer />
    </>
  );
}
