import { Social } from "@/lib/constant";
import { createStore } from "zustand";

export type LinksState = {
  links: Social[];
};

export type LinksActions = {
  addLink: (link: Social) => void;
  removeLink: (link: Social) => void;
  updateLink: (link: Social) => void;
  clearLinks: () => void;
};

export type LinksStore = LinksState & LinksActions;

export const initLinksStore = (): LinksState => {
  return { links: [] };
};

export const defaultInitState: LinksState = {
  links: [],
};

export const createLinksStore = (initState: LinksState = defaultInitState) => {
  return createStore<LinksStore>()((set) => ({
    ...initState,
    addLink: (link: Social) =>
      set((state) => ({ links: [...state.links, link] })),
    removeLink: (link: Social) =>
      set((state) => ({ links: state.links.filter((l) => l !== link) })),
    updateLink: (link: Social) =>
      set((state) => ({
        links: state.links.map((l) => (l === link ? link : l)),
      })),
    clearLinks: () => set(() => ({ links: [] })),
  }));
};
