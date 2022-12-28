import Tree, { INode } from './components/Tree/Tree';

function App() {
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
      name: "Third file"
    },
    {
      name: "Fourth file"
    },
  ]

  return (
    <main className="main">
      <div className="container neutral">
        <h1>TreEd</h1>
        <p>An approach for creating system trees.</p>
      </div>
      <div className="container">
        <h2>Basic directory tree</h2>
        <Tree tree={tree} />
      </div>
    </main>
  );
}

export default App;
