import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Tree, { INode } from "./Tree";

interface Props {
  node: INode,
  isSorted: boolean
}

export default function Subtree({
  node,
  isSorted
}: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const icon = isExpanded ? faMinus : faPlus;

  function handleExpanded() {
    setIsExpanded(prev => !prev)
  }

  return (
    <li>
      <button
        onClick={handleExpanded}
      >
        <FontAwesomeIcon icon={icon}
        />
        <span>{node.name}</span>
      </button>
      {isExpanded && (
        // subtree exists because we are validating outside the component
        <Tree 
          tree={node.subtree!} 
          isSorted={isSorted}
        />
      )}
    </li>
  )
}