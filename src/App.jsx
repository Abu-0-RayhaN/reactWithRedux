import Coin from "./features/coin/Coin";
import Counter from "./features/counter/Counter";
import Theme from "./features/theme/Theme";

const App = () => {
  return (
    <div className="app">
      <Counter />
      <Coin />
      <Theme />
    </div>
  );
};

export default App;
