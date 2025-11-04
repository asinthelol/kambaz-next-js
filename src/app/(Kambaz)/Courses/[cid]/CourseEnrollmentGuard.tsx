'use client';

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useSelector } from "react-redux";

interface User {
  _id: string;
  username: string;
  firstName: string;
  lastName: string;
  role: string;
}

interface Enrollment {
  _id: string;
  user: string;
  course: string;
}

interface RootState {
  accountReducer: { currentUser: User | null };
  enrollmentsReducer: { enrollments: Enrollment[] };
}

export default function CourseEnrollmentGuard({ children }: { children: React.ReactNode }) {
  const { cid } = useParams();
  const router = useRouter();
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const { enrollments } = useSelector((state: RootState) => state.enrollmentsReducer);

  useEffect(() => {
    if (cid && currentUser) {
      const isEnrolled = enrollments.some(
        (enrollment) =>
          enrollment.user === currentUser._id && enrollment.course === cid
      );

      if (!isEnrolled) {
        router.push("/Dashboard");
      }
    }
  }, [cid, currentUser, enrollments, router]);

  return <>{children}</>;
}
