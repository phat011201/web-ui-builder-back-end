// Path: src/services/pageService.ts

// import libraries

// import interfaces
import IComponent from "../interfaces/IPage";

// class PageService
export default class PageService {
  public page: string;

  // constructor
  constructor() {
    this.page = "";
  }

  // get page
  public getPage(): string {
    return this.page;
  }

  // set page
  public setPage(data: IComponent): void {
    this.page = `${this.createElement(data)}`;
  }

  // create element
  public createElement({ name, props, children }: IComponent): string {
    // create element
    const element = `<${name}${this.setProps(props)}>${this.setChildren(
      children
    )}</${name}>`;

    // return element
    return element;
  }

  // set props
  private setProps(props?: { [key: string]: any }): string {
    if (!props) return "";
    // props
    let propsString = "";

    // set props
    Object.keys(props).forEach((key) => {
      propsString += ` ${key}="${props[key]}"`;
    });

    // return props
    return propsString;
  }

  // set children
  private setChildren(children?: IComponent[] | string): string {
    if (!children) return "";
    // children
    let childrenString = "";

    // set children
    if (typeof children === "string") {
      childrenString = children;
    }

    if (Array.isArray(children)) {
      children.forEach((child) => {
        childrenString += this.createElement(child);
      });
    }

    // return children
    return childrenString;
  }
}
