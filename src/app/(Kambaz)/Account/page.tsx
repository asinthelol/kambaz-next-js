"use client";
import { useSelector } from "react-redux";
import { redirect } from "next/dist/client/components/navigation";

interface User {
  _id: string;
  username: string;
  firstName: string;
  lastName: string;
  role: string;
}

interface RootState {
  accountReducer: { currentUser: User | null };
}

export default function AccountPage() {
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  if (!currentUser) {
    redirect("/Account/Signin");
  } else {
    redirect("/Account/Profile");
  }
}