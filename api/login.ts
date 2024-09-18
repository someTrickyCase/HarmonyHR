import { UserLoginData } from "@/types/UserLoginData";

export async function login(userData: UserLoginData) {
  try {
    const resJSON = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    if (resJSON.status === 401) {
      return;
    }

    const res = await resJSON.json();
    localStorage.setItem("act", JSON.stringify(res.access_token));
    document.cookie = `refreshToken=${res.refresh_token}`;
    return res;
  } catch (error) {
    console.error(error);
  }
}
