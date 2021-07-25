import { createContext } from "react";
import { Categories } from "../model/categories";

interface IContext {
  categories?: Categories[];
  filter?: string;
}

const context = createContext({} as IContext);

export default context;
