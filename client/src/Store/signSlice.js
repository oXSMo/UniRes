import { create } from "zustand";

//////!  SIGN INFO STORE  !//////
export const useSignSlice = create((set) => ({
  signupInfo: {
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  },
  setSignupInfo: (fn) =>
    set((state) => ({
      signupInfo: typeof fn === "function" ? fn(state.signupInfo) : fn,
    })),
  loginInfo: { email: "", password: "" },
  setLoginupInfo: (fn) =>
    set((state) => ({
      loginInfo: typeof fn === "function" ? fn(state.loginInfo) : fn,
    })),
}));

//////!  AUTH STORE  !//////
export const authSlice = create((set) => ({
  auth: localStorage.getItem("auth") || "",
  isAdmin: false,
  setAuth: (auth) =>
    set(() => {
      if (auth) {
        localStorage.setItem("auth", auth);
      } else {
        localStorage.removeItem("auth"); // Professional touch: clean up on logout
      }
      return { auth };
    }),
  setAdmin: (value) => set(() => ({ isAdmin: value })),
}));

//////!  OWN PROFILE STORE  !//////
export const profileSlice = create((set) => ({
  profile: { _id: "", fullName: "", phoneNumber: "", email: "" },
  setProfile: (fn) =>
    set((state) => ({
      profile: typeof fn === "function" ? fn(state.profile) : fn,
    })),
}));

//////!  CLIENT/OTHER USER STORE  !//////
export const clientSlice = create((set) => ({
  client: { _id: "", fullName: "", phoneNumber: "", email: "" },
  setClient: (fn) =>
    set((state) => ({
      client: typeof fn === "function" ? fn(state.client) : fn,
    })),
}));