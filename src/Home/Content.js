import "../index.css";
import Header from "../Header";
import Guide from "./Guide";
import Kitchen from "./Kitchen";
import Season from "./Season";

const Content = () => {
  return (
    <main className="main">
      <Header />
      <Guide />
      <Kitchen />
      <Season />
    </main>
  );
};

export default Content;
