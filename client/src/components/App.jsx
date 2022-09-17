import { useState } from "react";

import ResponsiveAppBar from "./ResponsiveAppBar";
import ContentView from "./ContentView";

export default function App() {
  const [view, setView] = useState(0);

  const handleView = (viewID) => {
    setView(viewID);
  };

  return (
    <div>
      <ResponsiveAppBar handleView={handleView} />
      <ContentView viewID={view} />
    </div>
  )
}
