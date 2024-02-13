import "./App.css";
import "./style/reset.css";
import "./style/styleguide.css";
import { Layout } from "./pages/layout";
import { Home } from "./pages/home";

function App() {
  return (
    <>
      {/* 로그인 폼은 형태가 다르므로 따로 구분해둔다. */}
      {window.location.pathname.includes("sign") ? <Layout /> : <Home />}
    </>
  );
}

export default App;
