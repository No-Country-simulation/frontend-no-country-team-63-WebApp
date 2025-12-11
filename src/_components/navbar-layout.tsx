// "use client";


export default function NavbarLayout() {
  return (
    <nav
      className="flex w-full justify-between items-center  p-[2rem] bg-navbardashboard-gradient    "    >
      <div className="flex justify-around w-full  ">
        <div className="flex flex-col justify-center items-center ">
          <img
            className="h-auto w-[5rem] p-[1rem]"
            src={"/logo-vet-white.svg"}
          ></img>
          <h1 className="text-white text-[15px]">Pet Health Tracker</h1>
        </div>

        <ul className=" flex items-center" id="navLinks">
          <img
            className="h-[3rem] w-[3rem]"
            src={"/photo-profile-vet.png"}
          ></img>
         
        </ul>
      </div>
    </nav>
  );
}
