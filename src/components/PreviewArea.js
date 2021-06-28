import React from "react";
import CatSprite from "./CatSprite";
import styled from "styled-components"
import "tailwindcss/tailwind.css";
export default function PreviewArea() {
  return (
    <div className="flex-none h-full w-full overflow-y-auto p-2">
      <Move>
        <CatSprite />
      </Move>
    </div>
  );
}

const Move =styled.div`
  position: relative;
  left: 250px;
  top: 400px;
`