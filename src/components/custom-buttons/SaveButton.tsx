import * as React from 'react';
import { Button, ButtonProps } from '@components/Button';
import { Check } from 'lucide-react';

export default function SaveButton(props: ButtonProps) {
    return (
        <Button intent="edit" {...props}>
            <Check className="h-5 w-5 mr-1"/>Save
        </Button>
    );
}