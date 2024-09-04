import React from "react";
import { Label, Input } from "./components";
export default function FormInput ({onFocus, id, name, label, variant = 'primary', ...props }){
    return (
      <div className="flex flex-col ">
        <Label reference={id} variant={variant}>
          {label}
        </Label>
        <Input name={name} id={id} {...props} variant={variant}/>
      </div>
    );
  };