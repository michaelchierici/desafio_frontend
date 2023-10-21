import ReactDOM from "react-dom";
import { PortalProps } from "../../types/Portal";

export default function ReactPortal({ containerId, children }: PortalProps) {
  let container = document.getElementById(containerId);

  if (!container) {
    container = document.createElement("div");
    container.setAttribute("id", containerId);
    document.body.appendChild(container);
  }
  return ReactDOM.createPortal(children, container);
}
