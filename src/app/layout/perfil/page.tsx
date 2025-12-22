"use client";

import { motion } from "framer-motion";
import NavBar_logged from "@/_components/NavBar_logged";
import Info_pet from "@/_components/Info_pet";
import Next_events from "@/_components/Next_Events";
import {  nav_data_pet } from "@/mock/mock";

export default function Dashboard() {
  return (
    <div className="">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Contenedor completo que ocupa todo el ancho */}
        <div className="w-full flex justify-center !mt-2">

          {/* Grid centrado */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1250px]  items-start">

            {/* Celda 1 */}
            <div className="flex justify-center">
              <div className="card-container !w-fit">
                <Info_pet />
              </div>
            </div>

            {/* Celda 2 */}
            <div className="flex justify-center">
              <div className="card-container w-[90vw] ">
                <Next_events />
              </div>
            </div>

            {/* Celda 3 */}
            <div className="flex justify-center">
              <div className="card-container w-fit">
                Componente de Recordatorio diario
              </div>
            </div>

            {/* Celda 4 */}
            <div className="flex justify-center">
              <div className="card-container w-fit">
                Componente de Tareas completadas
              </div>
            </div>
          </div>
        </div>
        
      </motion.div>
    </div>
  );
}
