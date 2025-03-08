import { recipesRoutes } from "./routes/recipesRoutes";
import { Routes, Route } from "react-router-dom";

const AppRouter = () => {
  return (
    <div className="content">
      <div style={{ flex: 1 }}>
        <Routes>
          {recipesRoutes.map((route, key) => (
            <Route key={key} path={route.path} element={<route.component />} />
          ))}
        </Routes>
      </div>
    </div>
  );
};

export default AppRouter;
