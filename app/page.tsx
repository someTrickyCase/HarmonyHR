"use client";

import { LoginForm } from "@/components/LoginForm";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSession } from "@/store/store";

import { UserLoginData } from "@/types/UserLoginData";
import { login } from "@/api/login";
import { auth } from "@/api/auth";
import { refreshToken } from "@/api/refresh";
import { Alert, AlertTitle } from "@/shared/Allert";
import { Terminal } from "lucide-react";

export default function Login() {
  const [authMessage, setAuthMessage] = useState(false);
  const navigator = useRouter();
  const updateUserSession = useSession((state) => state.updateSession);

  async function handleLogin(userData: UserLoginData) {
    const isAuth = await login(userData);
    if (isAuth) {
      const session = await auth();
      updateUserSession(session);
      refreshToken();
      if (session) {
        navigator.push("/myinfo");
      }
    } else {
      setAuthMessage(true);
      setTimeout(() => {
        setAuthMessage(false);
      }, 2e3);
    }
  }
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <LoginForm onSubmit={handleLogin} />
      <Alert className={`fixed top-20 w-fit py-2 px-5 ${authMessage ? undefined : "hidden"}`}>
        <Terminal className='h-4 w-4' />
        <AlertTitle className=''>Unauthorized!</AlertTitle>
      </Alert>
    </div>
  );
}
