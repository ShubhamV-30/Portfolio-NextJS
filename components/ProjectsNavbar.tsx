import { FunctionComponent } from "react";
import { NavItem } from "./NavItems";

const ProjectsNavbar: FunctionComponent<{
  handlerFilterCategory: Function;
  active: string;
}> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem value="all" {...props} />
      <NavItem value="react" {...props} />
      <NavItem value="mongo" {...props} />
      <NavItem value="node" {...props} />
    </div>
  );
};

export default ProjectsNavbar;
