import Subtree from "./Subtree"

export interface INode {
  name: string,
  subtree?: INode[]
}

interface Props {
  tree: INode[],
  isSorted: boolean
}

export default function Tree({
  tree,
  isSorted
}: Props) {
  function handleSort(current: INode, next: INode) {
    return current.name.localeCompare(next.name);
  }
 
  return (
    <ul className="tree">
      {tree.sort(isSorted ? handleSort : undefined).map(node => {
        return (
          <>
            {Boolean(node.subtree) ? (
              <Subtree 
                node={node} 
                isSorted={isSorted}
              />
            ) : (
              <li>{node.name}</li>
            )}
          </>
        )
      })}
    </ul>
  )
}