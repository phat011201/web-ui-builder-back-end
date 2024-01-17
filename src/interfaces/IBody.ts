// Path: src/interfaces/IBody.ts

// import interfaces
import IComponent, { IProps } from "./IPage";

// Body interface
export default interface IBody extends IComponent {
  name: "body";
  props: IProps;
  children?: IComponent[];
}

// Header interface
export interface IHeader extends IComponent {
  name: "header";
  props?: IProps;
  children?: IComponent[];
}

// Main interface
export interface IMain extends IComponent {
  name: "main";
  props?: IProps;
  children?: IComponent[];
}

// Footer interface
export interface IFooter extends IComponent {
  name: "footer";
  props?: IProps;
  children?: IComponent[];
}
