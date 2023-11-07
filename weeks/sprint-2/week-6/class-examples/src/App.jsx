import { Example } from "./components/Examples/Example";
import { DogFactOne} from "./components/DogFact/DogFactOne"

export const App = () => {
  return (
    <>
      <h1>⚛ Learning the useEffect() Hook in React ⚛</h1>
      <div className="card">
        {/* <Example /> */}
         <DogFactOne /> 
        {/*   <ExampleFour /> */}
      </div>
    </>
  );
};
