import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserLoginData } from "@/types/UserLoginData";
import { useRef } from "react";

export function LoginForm({ onSubmit }: { onSubmit: (userData: UserLoginData) => void }) {
  console.log(
    "Hi! This is the Demo Page in HR-tech kinda style. You can log in with email: john@mail.com and password: changeme"
  );

  const inputEmailRef: React.RefObject<HTMLInputElement> = useRef(null);
  const inputPasswordRef: React.RefObject<HTMLInputElement> = useRef(null);

  function handleClick() {
    const email = inputEmailRef.current?.value;
    const password = inputPasswordRef.current?.value;
    if (!email || !password) return;
    onSubmit({ email, password });
  }

  return (
    <Card className='w-full max-w-sm'>
      <CardHeader>
        <CardTitle className='text-2xl'>Login</CardTitle>
        <CardDescription>Enter your email below to login to your account.</CardDescription>
      </CardHeader>
      <CardContent className='grid gap-4'>
        <div className='grid gap-2'>
          <Label htmlFor='email'>Email</Label>
          <Input ref={inputEmailRef} id='email' type='email' placeholder='m@example.com' required />
        </div>
        <div className='grid gap-2'>
          <Label htmlFor='password'>Password</Label>
          <Input ref={inputPasswordRef} id='password' type='password' required />
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className='w-full cursor-pointer hover:animate-pulse'>
          <div onClick={handleClick}>Sign in</div>
        </Button>
      </CardFooter>
    </Card>
  );
}
