import React from "react";
import { Label, Input, Text } from "./components";
import { useForm } from "react-hook-form";
export default function FormInput ({error, onFocus, id, name, label, variant = 'primary', ...props }){

    return (
      <div className="flex flex-col">
        <Label reference={id} className="text-xs font-medium" variant={variant}>
          {label}
        </Label>
        <Input  name={name} id={id} {...props} variant={variant} onFocus={onFocus}/>
        <Text variant={variant} className={`text-xs`}>{error}</Text>
      </div>
    );
  };