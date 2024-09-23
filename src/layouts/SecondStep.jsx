import React from "react";
import { Container } from "../components/components";
import { TransactionType, TransactionFillup} from "../components/SecondStep/components";

export default function SecondStep({shipType, first, last}) {
  return (
    <>
      <Container>
        <TransactionType />
        <TransactionFillup shipType={shipType} first={first} last={last}/>
      </Container>
    </>
  );
}
