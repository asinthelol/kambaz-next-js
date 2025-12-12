'use client';

import { FormControl, ListGroup, ListGroupItem } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import styles from '../../../styles.module.css';
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { useParams } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, editModule, updateModule, setModules } from "./reducer";
import { useSelector as useRootSelector } from "react-redux";
import * as client from "../../client";
import * as modulesClient from "./client";

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

interface User {
  _id: string;
  username: string;
  firstName?: string;
  lastName?: string;
  role?: string;
}

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: { modulesReducer: { modules: Module[] } }) => state.modulesReducer);
  const { currentUser } = useRootSelector((state: { accountReducer: { currentUser: User | null } }) => state.accountReducer);
  const dispatch = useDispatch();
  const fetchModules = async () => {
    const modules = await client.findModulesForCourse(cid as string);
    // Only update if we got data back from the API
    if (modules && modules.length > 0) {
      dispatch(setModules(modules));
    }
  };
  useEffect(() => {
    fetchModules();
  }, []);

  const createModuleForCourse = async () => {
    if (!cid) return;
    const courseId = Array.isArray(cid) ? cid[0] : cid;
    const newModule = { name: moduleName, course: courseId };
    const createdModule = await client.createModuleForCourse(courseId, newModule);
    dispatch(addModule(createdModule));
  };
  const removeModule = async (moduleId: string) => {
    await modulesClient.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };
  const saveModule = async (module: Module) => {
    await modulesClient.updateModule(module);
    dispatch(updateModule(module));
  };
   const onRemoveModule = async (moduleId: string) => {
   const courseId = Array.isArray(cid) ? cid[0] : cid;
   const moduleToDelete = modules.find((m: Module) => m._id === moduleId);
   if (moduleToDelete) {
     await client.deleteModule(courseId as string, moduleToDelete);
     dispatch(setModules(modules.filter((m: Module) => m._id !== moduleId)));
   }
 };
  const onCreateModuleForCourse = async () => {
    if (!cid) return;
    const courseId = Array.isArray(cid) ? cid[0] : cid;
    const newModule = { name: moduleName, course: courseId };
    const createdModule = await client.createModuleForCourse(courseId, newModule);
    dispatch(setModules([...modules, createdModule]));
  };
   const onUpdateModule = async (module: Module) => {
   const courseId = Array.isArray(cid) ? cid[0] : cid;
   await client.updateModule(courseId as string, module);
   const newModules = modules.map((m: Module) =>
     m._id === module._id ? module : m
   );
   dispatch(setModules(newModules));
 };






  return (
    <div>
      {currentUser?.role !== "STUDENT" && (
        <>
          <ModulesControls setModuleName={setModuleName} moduleName={moduleName} addModule={onCreateModuleForCourse} />
          <br /><br /><br /><br />
        </>
      )}
      <ListGroup className="rounded-0" id="wd-modules">
        {modules.map((module: Module) => (
          <ListGroupItem key={module._id} className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className={`${styles["bg-secondary"]} wd-title p-3 ps-2 bg-secondary`}>
              <BsGripVertical className="me-2 fs-3" />
              {!module.editing && module.name}
              { module.editing && (
                <FormControl className="w-50 d-inline-block"
                      onChange={(e) => updateModule({ ...module, name: e.target.value })}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          onUpdateModule({ ...module, editing: false });
                        }
                      }}
                      defaultValue={module.name}/>
              )}

              {currentUser?.role !== "STUDENT" && (
                <ModuleControlButtons
                  moduleId={module._id}
                  deleteModule={(moduleId) => onRemoveModule(moduleId)}
                  editModule={editModule} />
              )}
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

