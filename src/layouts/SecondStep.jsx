import React from "react";
import { Container } from "../components/components";
import { TransactionType, TransactionFillup} from "../components/SecondStep/components";

export default function SecondStep() {
  return (
    <>
      <Container>
        <TransactionType />
        <TransactionFillup />
      </Container>
    </>
  );
}
