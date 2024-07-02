import React from "react";
import { Button } from "./ui/button";

export default function ActionBar() {
  return (
    <div className="flex justify-center items-center space-x-5 p-5">
      <Button>Add New List</Button>
      <Button>Add New Task</Button>
      <Button>Delete List</Button>
    </div>
  );
}
