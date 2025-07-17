import { API_URL } from "@/config/env.config";

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw Error("Failed to login");
  }

  return data;
};

export const signup = async ({email, password}: {email: string, password: string}) => {
    const res = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
         headers: {
            "Content-Type": "application/json"
         },
          body: JSON.stringify({email, password})
    })

    const data = await res.json()

    if(!res.ok) {
        throw Error("Failed to login")
    }

    return data

}
