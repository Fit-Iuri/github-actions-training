import * as React from "react";
import { useState } from "react";

export const Card: React.FC = () => {
  const test1 = 3;
  const test2 = 3;
  const test3 = test1 == test2;
  const test4 = false;
  const test5 = test3 == test4;
  return (
    <div>
      <div>Card</div>
      <div className="simples-header">Isso é um card</div>
      <span>Imagem</span>
      <span>Texto</span>
    </div>
  );
};
