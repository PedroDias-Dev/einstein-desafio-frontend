import {
  BrowserRouter,
  Routes as DOMRoutes,
  Navigate,
  Route,
} from "react-router-dom";
import React from "react";
import CommonRoutes from "./Common/Common";
import CommonLayout from "Layouts/Common";
import NotFound from "Pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <DOMRoutes>
        {Object.entries(CommonRoutes).map(([key, value]) => (
          <Route
            key={key}
            path={value.path}
            element={
              <CommonLayout
                displayName={value.displayName}
                showBreadcrumbTitle={value.showBreadcrumbTitle || false}
              >
                {React.createElement(value.element, value)}
              </CommonLayout>
            }
          />
        ))}

        <Route path="/" element={<Navigate to="/marketplace" />} />

        <Route path="*" element={<NotFound />} />
      </DOMRoutes>
    </BrowserRouter>
  );
};

export default Routes;
