import { Field, Label, Radio, RadioGroup } from '@headlessui/react'
import { useState } from 'react'
import "../app/globals.css"

interface LayoutRadioProps {
  choices: string[];
}

export default function LayoutRadio({ choices }: LayoutRadioProps) {
  let [selected, setSelected] = useState(choices[0])

  return (
    <RadioGroup value={selected} onChange={setSelected} aria-label="Server size">
      <div className="flex gap-4">
      {choices.map((choice) => (
        <Field key={choice} className="flex items-center gap-1">
          <Radio
            value={choice}
            className="flex size-5 items-center justify-center rounded-full border bg-white data-checked:bg-primary/20 transition-colors duration-300"
          >
          </Radio>
          <Label>{choice}</Label>
        </Field>
      ))}
      </div>
    </RadioGroup>
  )
}