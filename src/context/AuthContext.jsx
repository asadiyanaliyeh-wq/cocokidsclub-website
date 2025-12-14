// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (email, password) => {
    if (!email || !password) {
      return { success: false, message: "لطفاً ایمیل و رمز را وارد کنید" };
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const foundUser = users.find(u => u.email === email && u.password === password);

    if (!foundUser) {
      return { success: false, message: "ایمیل یا رمز عبور اشتباه است" };
    }

    const loggedInUser = {
      id: foundUser.id,
      email: foundUser.email,
    };

    localStorage.setItem("user", JSON.stringify(loggedInUser));
    setUser(loggedInUser);
    return { success: true };
  };

  const register = (email, password) => {
    if (!email || !password) {
      return { success: false, message: "لطفاً همه فیلدها را پر کنید" };
    }
    if (password.length < 6) {
      return { success: false, message: "رمز عبور باید حداقل ۶ کاراکتر باشد" };
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (users.find(u => u.email === email)) {
      return { success: false, message: "این ایمیل قبلاً ثبت شده!" };
    }

    const newUser = {
      id: Date.now(),
      email,
      password, 
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    const loggedInUser = { id: newUser.id, email: newUser.email };
    localStorage.setItem("user", JSON.stringify(loggedInUser));
    setUser(loggedInUser);

    return { success: true };
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};