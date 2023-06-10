import Articles from "./articles/Articles";
import CallToAction from "./CallToAction";

const Main = ({ is1000, loading }: { is1000: boolean; loading: boolean }) => {
  const mainClass = loading ? "" : "main-enter";

  return (
    <main className={`main-content ${mainClass}`}>
      <Articles is1000={is1000} />
      <CallToAction />
    </main>
  );
};

export default Main;
