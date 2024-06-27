import axios from "axios";
import { useMutation } from "@tanstack/react-query";

export function useMutateUpload() {
  const { isError, isSuccess, isPending, mutate, mutateAsync } = useMutation({
    mutationKey: ["uploadImages"],
    mutationFn: async (formData: FormData) => {
      return await axios.post("/api/upload-images", formData);
    },
  });

  return { isError, isSuccess, isPending, mutate, mutateAsync };
}
