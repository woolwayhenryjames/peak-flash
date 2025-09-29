import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div
      className="mx-auto flex min-h-screen max-w-[720px] flex-col"
      style={{
        background:
          "linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(11, 11, 33, 1) 55%, rgba(65, 65, 116, 1) 100%)",
      }}
    >
      <Outlet />
    </div>
  );
}
