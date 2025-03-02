"use client";
import { Provider } from "react-redux";
import store from "./store";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ReduxProvider: FC<Props> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
