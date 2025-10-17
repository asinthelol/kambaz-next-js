'use client';

import { Form, Row, Col, FormControl, FormLabel, FormCheck, FormSelect } from 'react-bootstrap';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import * as db from '@/app/(Kambaz)/Database';

export default function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid: string; aid: string }>();
  const assignment = db.assignments.find(a => a._id === aid && a.course === cid);

  // Fallbacks for missing assignment
  const title = assignment?.title || '';
  const description = assignment?.description || '';
  const points = assignment?.points || 100;
  const dueDate = assignment?.dueDate || '';
  const availableDate = assignment?.availableDate || '';

  return (
    <div id="wd-assignments-editor">
      <Form>
        <Row className="mb-3">
          <Col sm={6}>
            <FormLabel htmlFor="wd-name">Assignment Name</FormLabel>
            <FormControl id="wd-name" type="text" defaultValue={title} />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col sm={6}>
            <FormControl
              id="wd-description"
              as="textarea"
              rows={6}
              defaultValue={description}
            />
          </Col>
        </Row>

        <Row className="mb-3">
          <FormLabel column sm={1} htmlFor="wd-points">
            Points
          </FormLabel>
          <Col sm={5}>
            <FormControl id="wd-points" type="number" defaultValue={points} />
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
              <FormControl id="wd-due" type="datetime-local" defaultValue={dueDate ? dueDate + 'T23:59' : ''} className="mb-3" />
              <Row className="align-items-end">
                <Col>
                  <FormLabel htmlFor="wd-available-from" className="mb-1">Available from</FormLabel>
                  <FormControl id="wd-available-from" type="datetime-local" defaultValue={availableDate ? availableDate + 'T00:00' : ''} />
                </Col>
                <Col>
                  <FormLabel htmlFor="wd-until" className="mb-1">Until</FormLabel>
                  <FormControl id="wd-until" type="datetime-local" defaultValue={dueDate ? dueDate + 'T23:59' : ''} />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <div className="d-flex justify-content-end">
          <Link
            href={`/Courses/${cid}/Assignments`}
            className="btn btn-secondary me-2"
          >
            Cancel
          </Link>
          <Link
            href={`/Courses/${cid}/Assignments`}
            className="btn btn-primary"
          >
            Save
          </Link>
        </div>
      </Form>
    </div>
  );
}
