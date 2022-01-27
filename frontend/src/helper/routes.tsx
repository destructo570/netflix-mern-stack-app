import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { SIGN_IN } from "../constants/routes";
import { User } from "firebase/auth";

const RequireAuth: React.FC<{ user: User | null }> = ({
  children,
  user,
  ...restProps
}) => {
  const location = useLocation();

  if (user) {
    return <>{children}</>;
  } else {
    return <Navigate to={SIGN_IN} state={{ from: location }} replace />;
  }
};

export default RequireAuth;
