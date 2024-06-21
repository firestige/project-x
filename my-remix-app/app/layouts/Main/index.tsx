import { ReactNode } from "react";

const Main = (props: { children: ReactNode }) => {
  return <div className="mt-12">{props.children}</div>;
};

export default Main;
