import React from 'react';
import { Navigate } from "react-router-dom";
import { useUser } from "../../hooks";

interface RequireAuthProps {
  children: JSX.Element;
}

export function RequireAuth({ children }: RequireAuthProps): JSX.Element | null {
  const { login } = useUser();

  if (login === "") {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}