import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  return (
    <main className="main">
      <div className="container neutral">
        <h1>TreEd</h1>
        <p>An approach for creating system trees.</p>
      </div>
      <div className="container">
        <h2>Basic directory tree</h2>
        <ul className="tree">
          <li>
            First file
          </li>
          <li>
            Second file
          </li>
          <li>
            <button>
              <FontAwesomeIcon icon={faMinus} />
              <span>First directory</span>
            </button>
            <ul>
              <li>
                First file of directory
              </li>
              <li>
                <button>
                  <FontAwesomeIcon icon={faPlus} />
                  <span>First subdirectory</span>
                </button>
              </li>
            </ul>
          </li>
          <li>
            Third file
          </li>
          <li>
            Fourth file
          </li>
        </ul>
      </div>
    </main>
  );
}

export default App;
