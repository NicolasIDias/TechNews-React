import { create } from "zustand";

export const useSearch = create((setter) => ({
  Posts: [],

  fetchPosts: async () => {
    const response = await fetch("/api/posts");
    const data = await response.json();
    setter({ Posts: data.data });
  },
                                                                                                                                                                        
}));
