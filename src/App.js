import { routes } from "./routes";
import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./components/Layout/DefaultLayout";

function App() {
  return (
    <div className="App">
      <Routes>
        {routes.map((route, index) => {
          const Page = route.component;
          let Layout = DefaultLayout;

          if (route.layout) {
            Layout = route.layout;
          }
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            ></Route>
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
