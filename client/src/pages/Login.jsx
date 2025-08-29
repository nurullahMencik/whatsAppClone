import React from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/userSlice";

const Login = () => {
  const dispatch = useDispatch();

  const handleSignInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch(login(user));
      })
      .catch((error) => {
        console.error("Login Error:", error);
      });
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-200">
      <div className="flex w-11/12 max-w-sm flex-col items-center justify-center gap-6 rounded-lg bg-white p-6 md:w-1/3 md:p-8">
        <img
          className="w-32"
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp Logo"
        />
        <div className="text-center text-xl font-bold md:text-2xl">
          WHATSAPP GİRİŞ SAYFASI
        </div>
        <button
          className="mt-5 cursor-pointer rounded-lg border bg-green-600 px-4 py-2 text-white transition-all duration-300 hover:opacity-90 md:px-6 md:py-3"
          onClick={handleSignInWithGoogle}
        >
          Google ile Giriş Yap
        </button>
      </div>
    </div>
  );
};

export default Login;