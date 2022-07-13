import * as React from "react";
import { useState } from "react";

export const Slider: React.FC = () => {
  const test1 = 2;
  const test2 = 2;
  const test3 = test1 == test2;
  const test4 = false;
  const test5 = test3 == test4;
  return (
    <div>
      <div>Slider</div>
      <div>Isso é um Slider</div>
      <div>Imagem</div>
      <span>Texto</span>
      <div>Imagem 2</div>
      <span>Texto 2</span>
    </div>
  );
};
