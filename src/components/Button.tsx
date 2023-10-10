import React from "react";
import "@/styles/components/_button.scss";

export default function Button(props: {
  text: string;
  onClick: () => void;
  class: string;
}) {
  return (
    <button
      type="button"
      onClick={props.onClick}
      className={"button " + props.class}
    >
      {props.text}
    </button>
  );
}
