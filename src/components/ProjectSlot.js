import React from "react";

export default function ProjectSlot(props) {

    return (
    <a href={props.url}>

<div className="section ">
    <div className="border border-2 border-black float-end">
      <div className="has-background-dark has-text-light project-label"> {props.name}</div>
    </div>
  </div>
</a>
    )
}