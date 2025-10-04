import { Form, Button, Row, Col, FormControl, FormLabel, FormCheck, FormSelect } from 'react-bootstrap';

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <Form>
        <Row className="mb-3">
          <Col sm={6}>
            <FormLabel htmlFor="wd-name">Assignment Name</FormLabel>
            <FormControl id="wd-name" type="text" defaultValue="A1" />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col sm={6}>
            <FormControl
              id="wd-description"
              as="textarea"
              rows={6}
              defaultValue="The assignment is available online Submit a link to the landing page of"
            />
          </Col>
        </Row>

        <Row className="mb-3">
          <FormLabel column sm={1} htmlFor="wd-points">
            Points
          </FormLabel>
          <Col sm={5}>
            <FormControl id="wd-points" type="number" defaultValue={100} />
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

        <Row className="mb-3">
          <FormLabel column sm={1} htmlFor="wd-assign-to">
            Assign To
          </FormLabel>
          <Col sm={5}>
            <FormControl id="wd-assign-to" type="text" defaultValue="Everyone" />
          </Col>
        </Row>

        <Row className="mb-3">
          <FormLabel column sm={1} htmlFor="wd-due">
            Due
          </FormLabel>
          <Col sm={5}>
            <FormControl id="wd-due" type="date" defaultValue="2024-05-13" />
          </Col>
        </Row>

        <Row className="mb-3">
          <FormLabel column sm={1} htmlFor="wd-available-from">
            Available from
          </FormLabel>
          <Col sm={2}>
            <FormControl id="wd-available-from" type="date" defaultValue="2024-05-06" />
          </Col>
          <FormLabel column sm={1} htmlFor="wd-until">
            Until
          </FormLabel>
          <Col sm={2}>
            <FormControl id="wd-until" type="date" defaultValue="2024-05-20" />
          </Col>
        </Row>

        <div className="d-flex justify-content-end">
          <Button variant="secondary" className="me-2">
            Cancel
          </Button>
          <Button variant="primary">Save</Button>
        </div>
      </Form>
    </div>
  );
}
