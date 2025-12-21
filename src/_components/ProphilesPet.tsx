import { useModalStore } from "@/store/modal-store";
import { SlOptionsVertical } from "react-icons/sl";
import DropDownCustom from "./ui-reusable/DropDownCustom";
import { ActionsColumnsProps } from "@/types/TypesActions";
import Link from "next/link";

const ProphilesPet = ({
  handleEdit: handEdit,
  handleDelete: handDel,
}: ActionsColumnsProps) => {
  
  const animals = [
    { id: 0, img: "/animal.png" },
    { id: 1, img: "/animal.png" },
    { id: 2, img: "/animal.png" },
  ];

  const { openModal } = useModalStore();
  return (
    <div className="flex flex-wrap justify-between max-w-[1000px] mx-auto w-full relative ">
      {animals.map((e) => (
        <Link href="/perfil" key={e.id}>
          <div
            
            className=" hover:scale-100 scale-95  transition-all .3s ease-in-out"
          >
            <div className="absolute top-[3rem] right-[1rem] cursor-pointer">
              <DropDownCustom
                handleEdit={() =>
                  handEdit({
                    entityTypes: "perfil animal",
                    Type: "ver",
                  })
                }
              >
                <SlOptionsVertical className="" />
              </DropDownCustom>
            </div>

            <img className="rounded-3xl z-10" src={e.img} alt="" />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProphilesPet;
