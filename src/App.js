import Routes from "./Routes";
import GlobalStyles from "./globalStyles";
import { ScrollToTop } from "./components";

function App() {
  return (
    <>
      <GlobalStyles>
        <ScrollToTop>
          <Routes></Routes>
        </ScrollToTop>
      </GlobalStyles>
    </>
  );
}

export default App;
