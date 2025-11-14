'use client';

import { Form, Row, Col, FormControl, FormLabel, FormCheck, FormSelect } from 'react-bootstrap';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { addAssignment, updateAssignment as updateAssignmentAction } from '../reducer';
import { useState, useEffect } from 'react';
import * as assignmentsClient from '../client';

interface Assignment {
  _id: string;
  title: string;
  course: string;
  description: string;
  points: number;
  dueDate?: string;
  availableFromDate?: string;
  availableUntilDate?: string;
}

interface RootState {
  assignmentsReducer: { assignments: Assignment[] };
}

export default function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid: string; aid: string }>();
  const router = useRouter();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: RootState) => state.assignmentsReducer);
  
  const existingAssignment = assignments.find((a) => a._id === aid && a.course === cid);
  const isNewAssignment = aid === 'new';

  const [assignment, setAssignment] = useState<Assignment>({
    _id: aid,
    title: '',
    description: '',
    points: 100,
    dueDate: '',
    availableFromDate: '',
    availableUntilDate: '',
    course: cid,
  });

  useEffect(() => {
    if (existingAssignment && !isNewAssignment) {
      setAssignment({
        ...existingAssignment,
        dueDate: existingAssignment.dueDate || '',
        availableFromDate: existingAssignment.availableFromDate || '',
        availableUntilDate: existingAssignment.availableUntilDate || '',
      });
    }
  }, [existingAssignment, isNewAssignment]);

  const handleSave = async () => {
    if (isNewAssignment) {
      const newAssignment = await assignmentsClient.createAssignment(cid, assignment);
      dispatch(addAssignment(newAssignment));
    } else {
      const updatedAssignment = await assignmentsClient.updateAssignment(assignment);
      dispatch(updateAssignmentAction(updatedAssignment));
    }
    router.push(`/Courses/${cid}/Assignments`);
  };

  const handleCancel = () => {
    router.push(`/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor">
      <Form>
        <Row className="mb-3">
          <Col sm={6}>
            <FormLabel htmlFor="wd-name">Assignment Name</FormLabel>
            <FormControl 
              id="wd-name" 
              type="text"
              placeholder='New Assignment'
              value={assignment.title}
              onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
            />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col sm={6}>
            <FormControl
              id="wd-description"
              as="textarea"
              placeholder='Enter description here...'
              rows={6}
              value={assignment.description}
              onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
            />
          </Col>
        </Row>

        <Row className="mb-3">
          <FormLabel column sm={1} htmlFor="wd-points">
            Points
          </FormLabel>
          <Col sm={5}>
            <FormControl 
              id="wd-points" 
              type="number" 
              value={assignment.points}
              onChange={(e) => setAssignment({ ...assignment, points: parseInt(e.target.value) })}
            />
          </Col>
        </Row>

        <Row className="mb-3">
          <FormLabel column sm={1} htmlFor="wd-availability">
            Assignment Group
          </FormLabel>
          <Col sm={5}>
            <FormSelect id="wd-availability">
              <option>ASSIGNMENTS</option>
            </FormSelect>
          </Col>
        </Row>

        <Row className="mb-3">
          <FormLabel column sm={1} htmlFor="wd-display-grade">
            Display Grade as
          </FormLabel>
          <Col sm={5}>
            <FormSelect id="wd-display-grade" defaultValue="Percentage">
              <option>Percentage</option>
              <option>Points</option>
            </FormSelect>
          </Col>
        </Row>

        <Row className="mb-3">
          <FormLabel column sm={1} htmlFor="wd-submission-type">
            Submission Type
          </FormLabel>
          <Col sm={5}>
            <FormSelect id="wd-submission-type" defaultValue="Online">
              <option>Online</option>
              <option>In-Person</option>
            </FormSelect>
          </Col>
        </Row>

        <fieldset className="mb-3">
          <FormLabel as="legend">Online Entry Options</FormLabel>
          <Row>
            <Col sm={{ span: 10 }}>
              <FormCheck type="checkbox" id="wd-text-entry" label="Text Entry" />
              <FormCheck type="checkbox" id="wd-website-url" label="Website URL" defaultChecked />
              <FormCheck type="checkbox" id="wd-media-recordings" label="Media Recordings" />
              <FormCheck type="checkbox" id="wd-student-annotation" label="Student Annotation" />
              <FormCheck type="checkbox" id="wd-file-uploads" label="File Uploads" />
            </Col>
          </Row>
        </fieldset>

        {/* Assign Area Card as Row */}
        <Row className="mb-4 align-items-start">
          <FormLabel column sm={1} className="fw-bold">Assign</FormLabel>
          <Col sm={5}>
            <div className="p-3 border rounded bg-white">
              <FormLabel htmlFor="wd-assign-to" className="mb-1">Assign to</FormLabel>
              <FormControl id="wd-assign-to" type="text" defaultValue="Everyone" className="mb-3" />
              <FormLabel htmlFor="wd-due" className="mb-1">Due</FormLabel>
              <FormControl 
                id="wd-due" 
                type="date"
                value={assignment.dueDate}
                onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })}
                className="mb-3" 
              />
              <Row className="align-items-end">
                <Col>
                  <FormLabel htmlFor="wd-available-from" className="mb-1">Available from</FormLabel>
                  <FormControl 
                    id="wd-available-from" 
                    type="date"
                    value={assignment.availableFromDate}
                    onChange={(e) => setAssignment({ ...assignment, availableFromDate: e.target.value })}
                  />
                </Col>
                <Col>
                  <FormLabel htmlFor="wd-until" className="mb-1">Until</FormLabel>
                  <FormControl 
                    id="wd-until" 
                    type="date"
                    value={assignment.availableUntilDate}
                    onChange={(e) => setAssignment({ ...assignment, availableUntilDate: e.target.value })}
                  />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <div className="d-flex justify-content-end">
          <button
            type="button"
            onClick={handleCancel}
            className="btn btn-secondary me-2"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="btn btn-primary"
          >
            Save
          </button>
        </div>
      </Form>
    </div>
  );
}
