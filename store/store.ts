import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { State, Session, Action, Navigation } from "@/types/storeTypes";

export const useSession = create<State & Action>()(
  persist(
    (set, get) => ({
      session: {
        id: null,
        name: "",
        avatar: "",
        creationAt: "",
        email: "",
        role: "",
        updatedAt: "",
      },
      updateSession: (newSession: Session) => set(() => ({ session: newSession })),
    }),
    {
      name: "user-session",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export const useNavigation = create<Navigation>()(
  persist(
    (set, get) => ({
      link: "My Info",
      changeLink: (newLink: string) => set(() => ({ link: newLink })),
    }),
    {
      name: "navigator-link",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
