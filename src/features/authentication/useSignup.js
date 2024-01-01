import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading: isSigningUp } = useMutation({
    mutationFn: signupApi,
    onSuccess: () =>
      toast.success(
        "Account was created successfully. Please verify the provided email address"
      ),
    onError: (error) => toast.error(error.message),
  });

  return { signup, isSigningUp };
}
