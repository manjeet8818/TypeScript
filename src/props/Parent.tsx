import { ChildAsFC } from "./Child";
import React from "react";

// Your component code here

const Parent = () => {
  return (
    <ChildAsFC color="blue" onClick={() => console.log("Clicked")}>
      YoYOYo
    </ChildAsFC>
  );
};
export default Parent;
