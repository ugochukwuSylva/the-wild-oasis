import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const { mutate: login, isLoading: isLoggingIn } = useMutation({
    mutationFn: loginApi,
    onSuccess: (user) => {
      toast.success("Logged in successfully");
      navigate("/dashboard", { replace: true });

      // To add other data to the cache, this is not too important tho.
      queryClient.setQueryData(["user"], user.user);
    },
    onError: (error) => toast.error(error.message),
  });

  return { login, isLoggingIn };
}
