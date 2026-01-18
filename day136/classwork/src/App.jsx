import Comp1 from "./Components/comp1";
import ErrorBoundary from './Error Boundary/ErrorBoundary.jsx'

function App() {

  
  return (
    <>
      <ErrorBoundary Fa>
        <Comp1 />
      </ErrorBoundary>
    </>
  );
}

export default App;