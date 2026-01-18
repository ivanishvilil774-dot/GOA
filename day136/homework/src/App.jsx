import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./Components/ErrorFallback";
import BuggyComponent from "./Components/BuggyComponent";
import Comp1 from "./Components/Comp1";


function App() {
  return (
    <>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          console.log("Error reset");
        }}
      >
        <BuggyComponent />
      </ErrorBoundary>
      <Comp1 />
    </>
);
}

export default App;
