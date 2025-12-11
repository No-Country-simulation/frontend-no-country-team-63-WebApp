"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

export default function EventosModule() {

  // Ejemplo de eventos
  const eventos = [
    {
      title: "Evento Terminado",
      date: "2025-01-10",
      status: "done",
    },
    {
      title: "Evento Pendiente",
      date: "2025-01-15",
      status: "pending",
    }
  ];

  // Convertimos los eventos al formato que usa FullCalendar
  const calendarEvents = eventos.map(ev => ({
    title: ev.title,
    date: ev.date,
    backgroundColor: ev.status === "done" ? "#22c55e" : "#facc15",
    borderColor: ev.status === "done" ? "#22c55e" : "#facc15",
    textColor: "#000"
  }));

  return (
    <div className="flex flex-col md:flex-row flex-wrap gap-3 w-full max-w-[600px] mx-auto p-4 rounded-2xl ">
      


        {/* PANEL IZQUIERDO */}
        <div className="flex flex-col w-full md:w-[45%] min-w-[250px]">


            <h2 className="text-2xl font-bold !mb-4">Mis eventos</h2>

            <div className="flex flex-col gap-3">
                {/* Tarjeta de evento terminado */}
                <div className="p-4 rounded-xl shadow border-l-4 border-green-500 bg-green-100">
                    <h3 className="font-semibold">Evento Terminado</h3>
                    <p className="text-sm">10 Enero 2025</p>
                </div>

                {/* Tarjeta de evento pendiente */}
                <div className="p-4 rounded-xl shadow border-l-4 border-yellow-400 bg-yellow-100">
                    <h3 className="font-semibold">Evento Pendiente</h3>
                    <p className="text-sm">15 Enero 2025</p>
                </div>

            </div>
        </div>



        {/* CALENDARIO */}
        <div className="w-full md:w-[55%] min-w-[280px]">


          <div className="rounded-lg border p-3 bg-white">

            <FullCalendar

              plugins={[dayGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              events={calendarEvents}
              height="auto"
              fixedWeekCount={false}
              dayMaxEventRows={1}
              eventDisplay="block"
              aspectRatio={1.2}
            />
          </div>
        </div>

    </div>
  );
}
