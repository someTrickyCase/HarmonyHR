"use client";

import { useSession } from "@/store/store";
import { useRouter } from "next/navigation";

export function redirect() {
  const navigator = useRouter();
  const session = useSession((state) => state.session);

  if (!session.id) {
    navigator.push("/");
  }
}
