import { useState, useEffect } from "react";
import { CustomCursor } from "@/components/CustomCursor";
import { LoadingScreen } from "@/components/LoadingScreen";
import Portfolio from "@/pages/Portfolio";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const shouldUseDark = savedTheme ? savedTheme === "dark" : true;
    document.documentElement.classList.toggle("dark", shouldUseDark);

    // Simulate loading time for the loading screen
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <CustomCursor />
      <Portfolio />
    </>
  );
}

export default App;
