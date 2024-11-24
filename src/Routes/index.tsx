import { BrowserRouter, Routes as DOMRoutes, Route } from "react-router-dom";
import React from "react";
import CommonRoutes from "./Common/Common";
import CommonLayout from "Layouts/Common";

const Routes = () => {
  return (
    <BrowserRouter>
      <DOMRoutes>
        {Object.entries(CommonRoutes).map(([key, value]) => (
          <Route
            key={key}
            path={value.path}
            element={
              <CommonLayout>
                {React.createElement(value.element, value)}
              </CommonLayout>
            }
          />
        ))}

        {/* <Route path="*" element={<PageNotFound />} /> */}
      </DOMRoutes>
    </BrowserRouter>
  );
};

export default Routes;
