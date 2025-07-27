import * as React from 'react';
import "../app/globals.css"
import Button from "./Button";
import Input from "./Input";

export default function Header () {
  return (
    <div id="main-header-div" className="flex justify-between items-center p-5">
      <Button intent="primary">
        New Thing
      </Button>
      <Input placeholder="Search things" style="flex justify-between items-center border-2 border-primary px-5 py-3 font-medium focus:outline-none focus:ring-2 focus:ring-primary" />

      <Button intent="secondary">
        New Thing
      </Button>
      <Button intent="destructive">
        New Thing
      </Button>
    </div>

  )
}
