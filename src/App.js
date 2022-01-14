import Home from "./routes/Home";
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
  useParams,
} from "react-router-dom"; //import 해주기
import Detail from "./routes/Detail";

//router : 페이지를 이동하는데 도와주는 역할
//states 따로 없음.

function App() {
  const id = useParams();
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
