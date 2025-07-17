import { login, signup } from "@/api/auth";
import { useStore } from "@/store";
import { useMutation } from "@tanstack/react-query";

export const useLoginMutation = () => {
  const { setUser, setToken } = useStore.getState();

  return useMutation({
    mutationFn: (credentials: { email: string; password: string }) =>
      login(credentials),
    onSuccess: (data) => {
      console.log("Success: ", data);
      if (data.user && data.token) {
        setUser(data.user);
        setToken(data.token);
      }
    },

    onError: () => {
        console.log("Error")
    }
  });
};

export const useSignupMutation = () => {
    const { setUser, setToken } = useStore.getState();

    return useMutation({
        mutationFn: (credentials: { email: string; password: string }) =>  signup(credentials),
        onSuccess: (data) => {
            console.log('SUccess sign up: ', data);
            if (data.user && data.token) {
              setUser(data.user);
              setToken(data.token);
            }
          },
          onError: (error) => {
            console.log('Error: ', error);
          },
    })   
}
