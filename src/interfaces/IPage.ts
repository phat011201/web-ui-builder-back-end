// Path: src/interfaces/IPage.ts

// import interfaces
import IHead from "./IHead";
import IBody from "./IBody";

// global interface
// component interface
// main interface
export default interface IComponent {
  name: string;
  props?: IProps;
  children?: IComponent[] | string;
}

// Props interface
export interface IProps {
  id?: string;
  class?: string;
  style?: string;
  [key: string]: any;
}

// Page interface
export interface IPage extends IComponent {
  name: "page";
  props?: IProps;
  children?: IHtml[];
}

// Html interface
export interface IHtml extends IComponent {
  name: "html";
  props?: IProps;
  children?: (IHead | IBody)[];
}

// Script interface
export interface IScript extends IComponent {
  name: "script";
  props: {
    src?: string;
    type?: string;
  };
}
