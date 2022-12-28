import Subtree from "./Subtree"

export interface INode {
  name: string,
  subtree?: INode[]
}

interface Props {
  tree: INode[]
}

export default function Tree({
  tree
}: Props) {
  return (
    <ul className="tree">
      {tree.map(node => {
        return (
          <>
            {node.subtree ? (
              <Subtree node={node} />
            ) : (
              <li>{node.name}</li>
            )}
          </>
        )
      })}
    </ul>
  )
}