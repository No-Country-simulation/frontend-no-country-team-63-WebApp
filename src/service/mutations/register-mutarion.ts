import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { postRegisterPerson } from "../use-cases/register-use-case";
import { RegisterPerson } from "@/types/register";

export const GeneralMutations = () => {
  // const router = useRouter();
  // const setUserData = useUserStore((state) => state.setUserData);

  const mutationPostRegisterPerson = useMutation({
    mutationFn: (data: RegisterPerson) => {
      return postRegisterPerson(data);
    },
    onSuccess: () =>  {
      console.log("exitoso")
    },
  });

  return {
    mutationPostRegisterPerson,
  };
};
