import React, { useState } from "react";
import { Container, Text } from "../components/components";
import {VesselsContainer,VesselRoutesContainer,} from "../components/FirstStep/components";
export default function FirstStep() {
  return (
    <>
      <Container>
        <VesselsContainer />
        <VesselRoutesContainer />
      </Container>
    </>
  );
}
