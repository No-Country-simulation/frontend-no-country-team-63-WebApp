import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { postRegister } from "../use-cases/register-use-case";
import { RegisterType } from "@/_types/register";

export const GeneralMutations = () => {
  const router = useRouter();
  // const setUserData = useUserStore((state) => state.setUserData);

  const mutationPostRegister = useMutation({
    mutationFn: (data: RegisterType) => {
      return postRegister(data);
    },
    onSuccess: () =>  {
      console.log("exitoso")
    },
  });

  return {
    mutationPostRegister,
  };
};
