export default function Info_pet() {
  return (
    <div className="flex flex-col items-center text-center">

      {/* FOTO */}
      <img
        src="/dogs.png"
        alt="Foto mascota"
        className="w-28 h-28 rounded-full object-cover mb-4"
      />

      {/* NOMBRE */}
      <h2 className="text-xl font-semibold !mt-2 !mb-2 break-words text-center max-w-[180px]">
        Felipe
      </h2>

      {/* FILA DE INFORMACIÓN */}
      <div className="flex justify-center gap-10">

        {/* RAZA */}
        <div className="flex flex-col">
          <span className="font-bold text-gray-600 text-lg">Raza</span>
          <span className="font-semibold text-lg">Golden Retriever</span>
          
        </div>

        {/* EDAD */}
        <div className="flex flex-col">
          <span className="font-bold text-gray-600 text-lg">Edad</span>
          <span className="font-semibold text-lg">3 años</span>
        </div>

        {/* PESO */}
        <div className="flex flex-col">
          <span className="font-bold text-gray-600 text-lg">Peso</span>
          <span className="font-semibold text-lg">28 kg</span>
        </div>

      </div>
    </div>
  );
}
