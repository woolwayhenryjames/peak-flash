import type { User } from ".prisma/main/client";
import { useOutletContext } from "react-router";

export type ContextType = { user: User | null };

export function useUser() {
  return useOutletContext<ContextType>();
}
