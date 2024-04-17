

import {useQueryClient} from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import {toast} from "react-hot-toast";
import { deleteCabin as deleteCabinApi, getCabins } from "../../services/apiCabin";
export function useDeleteCabin(){
    const queryClient = useQueryClient();

    const { isLoading: isdeleting, mutate:deleteCabin } = useMutation({
      mutationFn: (id) => deleteCabinApi(id),
      onSuccess: () => {
        toast.success("Cabin deleted sucessfully");
        queryClient.invalidateQueries({
          queryKey: ["cabins"],
          queryFn: getCabins,
        });
      },
      onError: (err) => toast.error(err.message),
    });

    return {isdeleting,deleteCabin}
}

