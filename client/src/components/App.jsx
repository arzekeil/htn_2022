import { useState } from "react";

import ResponsiveAppBar from "./ResponsiveAppBar";
import ContentView from "./ContentView";

export default function App() {
  const [view, setView] = useState(0);

  const handleViewChange = (viewID) => {
    setView(viewID);
  };

  return (
    <div>
      <ResponsiveAppBar handleViewChange={handleViewChange} />
      <ContentView viewID={view} handleViewChange={handleViewChange} />
    </div>
  )
}
