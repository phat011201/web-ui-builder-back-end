// Path: src/interfaces/IHead.ts

// import interfaces
import IComponent from "./IPage";

// Head interface
export default interface IHead extends IComponent {
  name: "head";
  children?: IComponent[];
}

// Title interface
export interface ITitle extends IComponent {
  name: "title";
  props: {
    title?: string;
    class?: string;
  };
}

// Meta interface
export interface IMeta extends IComponent {
  name: "meta";
  props: {
    charset?: string;
    name?: string;
    content?: string;
  };
}

// Link interface
export interface ILink extends IComponent {
  name: "link";
  props: {
    rel?: string;
    href?: string;
  };
}
