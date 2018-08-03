import React from 'react';
import * as Rules from "./rules";

export default function() {
  if (Rules.Mac.getResult()) {
    return <p>Get a PC</p>
  } else {
    return <p>Don't</p>
  }
}
