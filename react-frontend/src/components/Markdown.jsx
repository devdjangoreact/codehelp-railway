import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";

interface Props {
  value_str?: string;
  edit?: boolean;
  className?: string;
  onChange?: FormEvent<HTMLInputElement>;
}

export default function App(props: Props) {
  const [value, setValue] = useState(props.value_str);
  // props.description = value;
  props.onChange(value);

  return (
    <div className={props.className}>
      {props.edit && props.edit ? (
        <MDEditor value={value} onChange={setValue} />
      ) : (
        <MDEditor.Markdown source={value} style={{ whiteSpace: "pre-wrap" }} />
      )}
    </div>
  );
}
