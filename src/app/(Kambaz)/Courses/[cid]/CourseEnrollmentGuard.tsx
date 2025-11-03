'use client';

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export default function CourseEnrollmentGuard({ children }: { children: React.ReactNode }) {
  const { cid } = useParams();
  const router = useRouter();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);

  useEffect(() => {
    if (cid && currentUser) {
      const isEnrolled = enrollments.some(
        (enrollment: any) =>
          enrollment.user === currentUser._id && enrollment.course === cid
      );

      if (!isEnrolled) {
        router.push("/Dashboard");
      }
    }
  }, [cid, currentUser, enrollments, router]);

  return <>{children}</>;
}
