'use client';

import { useSelector } from "react-redux";
import Modules from "../Modules/page";
import CourseStatus from "./Status";
export default function Home() {
  const { currentUser } = useSelector((state: { accountReducer: { currentUser: User | null } }) => state.accountReducer);
  interface User {
    _id: string;
    username: string;
    firstName?: string;
    lastName?: string;
    role?: string;
  }


  return (
    <div id="wd-home">
      <div className="d-flex" id="wd-home">
        <div className="flex-fill me-3">
          <Modules />
        </div>

        {currentUser?.role !== "STUDENT" && (
          <div className="d-none d-lg-block">
            <CourseStatus />
          </div>
        )}
      </div>
    </div>
  );
}
