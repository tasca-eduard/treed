import Tree, { INode } from './components/Tree/Tree';
import { useState } from "react";

function App() {
  const [isSorted, setIsSorted] = useState(false)
  const tree: INode[] = [
    {
      name: "First file"
    },
    {
      name: "Second file"
    },
    {
      name: "First Directory",
      subtree: [
        {
          name: "First file of directory"
        },
        {
          name: "First subdirectory",
          subtree: [
            {
              name: "First file of subdirectory"
            }
          ]
        }
      ]
    },
    {
      name: "Third file",
      subtree: [
        {
          name: "First file of directory"
        },
        {
          name: "First subdirectory",
          subtree: [
            {
              name: "First file of subdirectory",
              subtree: [
                {
                  name: "First file of directory"
                },
                {
                  name: "First subdirectory",
                  subtree: [
                    {
                      name: "First file of subdirectory"
                    },
                    {
                      name: "First file"
                    },
                    {
                      name: "Second file"
                    },
                  ]
                },
                {
                  name: "First file"
                },
                {
                  name: "Second file"
                },
              ]
            },
            {
              name: "First file"
            },
            {
              name: "Second file"
            },
          ]
        }
      ]
    },
    {
      name: "Fourth file"
    },
  ]

  function handleSort() {
    setIsSorted(prev => !prev);
  }

  return (
    <main className="main">
      <div className="container neutral">
        <h1>TreEd</h1>
        <p>An approach for creating system trees.</p>
      </div>
      <div className="container">
        <h2>Basic <em title="allegedly">system tree</em></h2>
        <button 
          className={[
            "btn",
            isSorted ? "active" : ""
          ].join(" ")}
          onClick={handleSort}
        >
          Sort by name
        </button>
        <br />
        <h3>System Summary</h3>
        <Tree 
          tree={tree} 
          isSorted={isSorted}
        />
      </div>
    </main>
  );
}

export default App;
