import { Field, Label, Radio, RadioGroup } from '@headlessui/react'
import { useState } from 'react'

const layouts = ['Board', 'List', 'Hybrid']

export default function Example() {
  let [selected, setSelected] = useState(layouts[0])

  return (
    <RadioGroup value={selected} onChange={setSelected} aria-label="Server size">
      {layouts.map((layout) => (
        <Field key={layout} className="flex items-center gap-2">
          <Radio
            value={layout}
            className="group flex size-5 items-center justify-center rounded-full border bg-white data-checked:bg-blue-400"
          >
            <span className="invisible size-2 rounded-full bg-white group-data-checked:visible" />
          </Radio>
          <Label>{layout}</Label>
        </Field>
      ))}
    </RadioGroup>
  )
}