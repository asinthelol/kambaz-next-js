'use client';

import { FormControl, ListGroup, ListGroupItem } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import styles from '../../../styles.module.css';
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { useParams } from "next/navigation";
import * as db from "@/app/(Kambaz)/Database";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, editModule, updateModule } from "./reducer";
import { v4 as uuidv4 } from "uuid";

type Module = {
  _id: string;
  name: string;
  description: string;
  course: string;
  lessons?: Lesson[];
  editing?: boolean;
};

type Lesson = {
  _id: string;
  name: string;
  description: string;
  module: string;
}

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <ModulesControls setModuleName={setModuleName} moduleName={moduleName} addModule={() => dispatch(addModule({ _id: uuidv4(), name: moduleName, course: cid, lessons: [] }))} /><br /><br /><br /><br />
      <ListGroup className="rounded-0" id="wd-modules">
        {modules.filter((module: Module) => module.course === cid).map((module: Module) => (
          <ListGroupItem key={module._id} className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className={`${styles["bg-secondary"]} wd-title p-3 ps-2 bg-secondary`}>
              <BsGripVertical className="me-2 fs-3" /> {module.name}
              {!module.editing && module.name}
              { module.editing && (
                <FormControl className="w-50 d-inline-block"
                      onChange={(e) => updateModule({ ...module, name: e.target.value })}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          updateModule({ ...module, editing: false });
                        }
                      }}
                      defaultValue={module.name}/>
              )}

              <ModuleControlButtons
                moduleId={module._id}
                deleteModule={deleteModule}
                editModule={editModule} />
            </div>
            {module.lessons && 
            (<ListGroup className="wd-lessons rounded-0">
              {module.lessons.map((lesson: Lesson) => (
                <ListGroupItem key={lesson._id} className="wd-lesson p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons />
                </ListGroupItem>
              ))}
            </ListGroup>)}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>

);}

