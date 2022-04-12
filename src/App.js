import Routes from "./Routes";
import GlobalStyles from "./globalStyles";
import { ScrollToTop } from "./components";
import axios from "axios";

// For GET requests
axios.interceptors.request.use(
  (req) => {
    // Add configurations here
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// For POST requests
axios.interceptors.response.use(
  (res) => {
    // Add configurations here
    if (res.status === 200) {
      console.log("Posted Successfully");
    }
    return res;
  },
  (err) => {
    if (err.response.status === 404) {
      err.response.data.message = "something went wrong";
    }
    return Promise.reject(err);
  }
);

function App() {
  return (
    <>
      <GlobalStyles></GlobalStyles>
      <ScrollToTop></ScrollToTop>
      <Routes></Routes>
    </>
  );
}

export default App;
