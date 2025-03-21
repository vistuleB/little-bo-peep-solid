import { MOBILE_MAX_WIDTH, DESKTOP_COLUMN_WIDTH } from "~/constants";
import { ParentProps } from "solid-js";
import SharedProps from "./types/SharedProps";
import { twJoin } from "tailwind-merge";
import { useGlobalContext } from "../store/StoreProvider";

export const List = (props: ParentProps & SharedProps) => {
  const { store } = useGlobalContext();
  return (
    <div
      class={twJoin("slice", props.class)}
      style={`width:${store.innerWidth > MOBILE_MAX_WIDTH ? DESKTOP_COLUMN_WIDTH : store.innerWidth}px;${props.style}`}>
      <ol class="list-decimal px-4 ml-6">{props.children}</ol>
    </div>
  );
};

export const Item = (props: ParentProps & SharedProps) => {
  return (
    <li class={props.class} style={props.style}>
      {props.children}
    </li>
  );
};
