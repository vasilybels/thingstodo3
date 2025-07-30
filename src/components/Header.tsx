"use client"

import * as React from 'react';
import { useState } from 'react';
import "../app/globals.css"
import Button from "./Button";
import Input from "./Input";
import NewThingDialog from './NewThingDialog';
import { ListFilter, User, LayoutList, LayoutGrid } from 'lucide-react';

export default function Header () {

  return (
    <div id="main-header-div" className="px-5 py-5 sticky top-0 z-10">
      <div className=" bg-muted/15 backdrop-blur-lg max-w-[70rem] flex justify-between rounded-xl m-auto px-5 py-3">
        <div className="flex gap-5 items-center">
          <NewThingDialog />
          <div className="flex gap-1 items-center rounded-md">
            <Button intent="secondary">
              <LayoutGrid className="h-5 w-5 mr-1" />Grid
            </Button>
            <Button intent="secondary">
              <LayoutList className="h-5 w-5 mr-1" />List
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Input placeholder="Search projects..." style="search" />
          <Button intent="secondary">
          <ListFilter className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>

  )
}
