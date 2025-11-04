import { useState } from "react";

interface EventCopy {
  [key: string]: unknown;
}

export default function EventObject() {
  const [event, setEvent] = useState<EventCopy | null>(null);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const eventCopy: EventCopy = { ...e };
    eventCopy.target = (e.target as HTMLElement).outerHTML;
    delete eventCopy.view;
    setEvent(eventCopy);
  };
  return (
    <div>
      <h2>Event Object</h2>
      <button onClick={(e) => handleClick(e)}
        className="btn btn-primary"
        id="wd-display-event-obj-click">
        Display Event Object
      </button>
      <pre>{JSON.stringify(event, null, 2)}</pre>
      <hr/>
    </div>
);}
