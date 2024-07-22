import Menu from "../../components/Menu";

function RootLayout({ children }) {
  return (
    <div className="root-layout">
      <Menu />
      <div className="root-content"> {children}</div>
    </div>
  );
}

export default RootLayout;
