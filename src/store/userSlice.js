// userStore.js

export const UserSlice = (set) => ({
  user: null,

  login: (userData) => set({ user: userData }),

  logout: () => set({ user: null }),

  addUser: (user) => set(() => ({ user })),

  removeUser: () =>
    set(() => ({
      user: null,
    })),
});
