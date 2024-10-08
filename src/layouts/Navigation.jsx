import React from "react";
import { Container, Text } from "../components/components";
import { GoGear } from "react-icons/go";
import Logo from "../components/Logo";
export default function Navigation({name = 'Randy Rizzler Barurot'}) {
  return (
    <Container className="w-full h-20 flex items-center justify-between px-20">
      <Logo />
      <div className="flex items-center gap-4">
        <Text variant="small">{name}</Text>
        <GoGear size={`22`} className="cursor-pointer" />
      </div>
    </Container>
  );
} 
