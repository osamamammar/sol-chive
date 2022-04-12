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
  (response) => {
    // Add configurations here
    if (response.status === 200) {
      console.log("Done Successfully");
    }
    return response;
  },
  (error) => {
    if (error.response.status === 404) {
      error.response.data.message = "something went wrong";
    }
    return Promise.reject(error);
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
