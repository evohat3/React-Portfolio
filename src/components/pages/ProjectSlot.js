import React from "react";

export default function ProjectSlot(props) {

    return (
    <a href={props.url}>

<div class="section ">
    <div class="has-background-light border border-2 border-black float-end">
      <div className="has-background-dark has-text-light"> {props.name}</div>
    </div>
  </div>


</a>
    )
}