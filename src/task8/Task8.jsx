 import React from "react";
import "./task8.css";
 
function Step({ title, status, isActive, children }) {
  return (
    <div className={`step-card ${isActive ? "active" : ""}`}>
      <div className="step-header">
        <h3>{title}</h3>
        <span className="status">{status}</span>
      </div>
      {children}
    </div>
  );
}
 
function Child5({ message }) {
  return (
    <Step title="Child 5" status="Completed" isActive={true}>
      <p className="data">{message}</p>
    </Step>
  );
}

function Child4({ message }) {
  return (
    <Step title="Child 4" status="Passing Data">
      <Child5 message={message} />
    </Step>
  );
}

function Child3({ message }) {
  return (
    <Step title="Child 3" status=" Passing Data">
      <Child4 message={message} />
    </Step>
  );
}

function Child2({ message }) {
  return (
    <Step title="Child 2" status=" Passing Data">
      <Child3 message={message} />
    </Step>
  );
}

function Child1({ message }) {
  return (
    <Step title="Child 1" status=" Passing Data">
      <Child2 message={message} />
    </Step>
  );
}
 
function Task8() {
  const data = " Data successfully reached Child 5!";

  return (
    <div className="ultimate-container">
      <h1> Props Data Flow System</h1>
      <div className="progress-bar">
        <div className="progress-fill"></div>
      </div>

      <div className="steps-wrapper">
        <Step title="Parent" status="Sending Data">
          <Child1 message={data} />
        </Step>
      </div>
    </div>
  );
}

export default Task8;