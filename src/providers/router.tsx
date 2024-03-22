import { checkIsPublicRoute } from "@/@utils/check-is-public-route";
import { PrivateRoute } from "@/components/PrivateRoute";
import { usePathname } from "next/navigation";

export const RouterProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const isPublicPage = checkIsPublicRoute(pathname);

  return (
    <>
      {isPublicPage && children}

      {!isPublicPage && <PrivateRoute>{children}</PrivateRoute>}
    </>
  );
};
