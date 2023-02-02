import { useNavigate } from "react-router-dom";
import React from "react";

import MainPageContent from "../ui/MainPageContent";
import "./FirstPage.css";

function FirstPage(props) {
  const navigate = useNavigate();

  return (
    <div class="container">
      <svg
        viewBox="0 0 1418 116"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <title>@WebDesignerMag</title>
        <g stroke="none" fill="none" fill-rule="evenodd" fill-opacity="0">
          <text
            id="@WebDesignerMag"
            stroke="#fff"
            fill="#645F5A"
            font-weight="normal"
            font-family="PermanentMarker-Regular, Permanent Marker"
            font-size="144"
          >
            <tspan x="3" y="109">
              <tspan>@</tspan>
              <tspan>W</tspan>
              <tspan>e</tspan>
              <tspan>b</tspan>
              <tspan>D</tspan>
              <tspan>e</tspan>
              <tspan>s</tspan>
              <tspan>i</tspan>
              <tspan>g</tspan>
              <tspan>n</tspan>
              <tspan>e</tspan>
              <tspan>r</tspan>
              <tspan>M</tspan>
              <tspan>a</tspan>
              <tspan>g</tspan>
            </tspan>
          </text>
        </g>
      </svg>
      <button
        type="submit"
        variant="outlined"
        onClick={() => {
          navigate("login");
        }}
      >
        Login / Sign Up
      </button>
    </div>
  );
}

export default FirstPage;
