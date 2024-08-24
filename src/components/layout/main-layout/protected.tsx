"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";

const ProtectedRoutesLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const goToLogIn = useCallback(() => {
    router.push("/login");
  }, [router]);

  useEffect(() => {
    window.addEventListener("unauthorized", goToLogIn);
    return () => {
      window.removeEventListener("unauthorized", goToLogIn);
    };
  }, [goToLogIn]);

  return children;
};

export default ProtectedRoutesLayout;
