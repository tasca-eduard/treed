import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Tree, { INode } from "./Tree";

interface Props {
  node: INode
}

export default function Subtree({
  node
}: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const icon = isExpanded ? faMinus : faPlus;

  function handleExpanded() {
    setIsExpanded(prev => !prev)
  }

  return (
    <>
      <button
        onClick={handleExpanded}
      >
        <FontAwesomeIcon icon={icon}
        />
        <span>{node.name}</span>
      </button>
      {isExpanded && (
        // subtree exists because we are validating outside the component
        <Tree tree={node.subtree!} />
      )}
    </>
  )
}