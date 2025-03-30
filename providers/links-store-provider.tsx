"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

import {
  type LinksStore,
  createLinksStore,
  initLinksStore,
} from "@/stores/links-store";

export type LinksStoreApi = ReturnType<typeof createLinksStore>;

export const LinksStoreContext = createContext<LinksStoreApi | undefined>(
  undefined,
);

export interface LinksStoreProviderProps {
  children: ReactNode;
}

export const LinksStoreProvider = ({ children }: LinksStoreProviderProps) => {
  const storeRef = useRef<LinksStoreApi | null>(null);
  if (storeRef.current === null) {
    storeRef.current = createLinksStore(initLinksStore());
  }

  return (
    <LinksStoreContext.Provider value={storeRef.current}>
      {children}
    </LinksStoreContext.Provider>
  );
};

export const useLinksStore = <T,>(selector: (store: LinksStore) => T): T => {
  const linksStoreContext = useContext(LinksStoreContext);

  if (!linksStoreContext) {
    throw new Error(`useLinksStore must be used within LinksStoreProvider`);
  }

  return useStore(linksStoreContext, selector);
};
