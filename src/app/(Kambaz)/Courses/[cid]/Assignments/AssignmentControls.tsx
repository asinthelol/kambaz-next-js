'use client';

import { Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import { useParams, useRouter } from "next/navigation";
import { useSelector } from "react-redux";

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

export default function AssignmentControls() {
  const { cid } = useParams();
  const router = useRouter();
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);

  const handleAddAssignment = () => {
    router.push(`/Courses/${cid}/Assignments/new`);
  };

  return (
    <div>
      {currentUser?.role === "FACULTY" && (
        <>
          <Button 
            variant="danger" 
            size="lg" 
            className="me-1 float-end" 
            id="wd-add-assignment-btn"
            onClick={handleAddAssignment}
          >
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Assignment
          </Button>
          <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-add-group-btn">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Group
          </Button>
        </>
      )}
    </div>
  );
}