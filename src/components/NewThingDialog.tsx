import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import Button from './Button'
import Input from './Input'
import { useState } from 'react'
import "../app/globals.css"
import LayoutRadio from './LayoutRadio'
import { ArrowUpRight } from 'lucide-react'

export default function NewThingDialog() {
  let [isOpen, setIsOpen] = useState(false)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  const layoutChoices = ["Board", "List", "Hybrid"]

  const dialogPanelStyle: string =
    "w-full max-w-[50rem] rounded-xl bg-muted/15 p-5 backdrop-blur-lg duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"

  return (
    <>
      <Button onClick={open} intent="primary">
        New Thing
      </Button>

      <Dialog open={isOpen} as="div" className="relative z-10" onClose={close} __demoMode>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center">
            <DialogPanel transition className={dialogPanelStyle}>
              <div className="mb-10 flex-col gap-1">
                <Input placeholder="Title..." style="mknewtitle"/>
                <Input placeholder="Description..." style="mknew" />
              </div>
              <div>
                <h1 className="mb-1">Layout type:</h1>
                <LayoutRadio choices={layoutChoices} />
              </div>
              <div className="mt-7 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Button intent="primary" onClick={close}>
                    Done
                  </Button>
                  <Button intent="secondary" onClick={close}>
                    Go to Project<ArrowUpRight className="h-5 w-5 ml-1" />
                  </Button>
                </div>
                <Button intent="destructive" onClick={close}>
                  Cancel
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}


