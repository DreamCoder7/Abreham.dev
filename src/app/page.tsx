import Intro from "./_components/Intro/Intro";
import About from "./_components/About/About";
import ModeContextProvider from "./_context/modeContext";

export default function Home() {
  return (
    <ModeContextProvider>
      <Intro />
      <About />
    </ModeContextProvider>
  );
}
