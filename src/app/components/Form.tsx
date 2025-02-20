"use client";
import { TextField } from "@mui/material";
import { useEffect, useRef } from "react";
import { useFormState } from "react-dom";
import { addComment } from "../actions";
import { Submit } from "./Submit";

export default function Form(props: { id: string }) {
  const [statusMessage, formAction] = useFormState(addComment, null);
  const formElement = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (statusMessage?.severity !== "error" && formElement.current) {
      formElement.current.reset();
    }
  }, [statusMessage]);

  return (
    <form
      action={formAction}
      ref={formElement}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        maxWidth: "500px",
        placeSelf: "center",
        width: "100%",
      }}
    >
      <input type="hidden" name="id" value={props.id} />
      {/*     <input type="hidden" name="name" value={user?.user?.name || ""} />
      <input type="hidden" name="email" value={user?.user?.email || ""} /> */}
      <TextField
        name="comment"
        id="outlined-multiline-flexible"
        label="Lägg till en kommentar"
        multiline
        maxRows={4}
      />
      {/* <Submit disabled={!user}>Skicka</Submit> */}
    </form>
  );
}
