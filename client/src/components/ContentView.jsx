import DashboardView from "./DashboardView";
import DocumentView from "./DocumentView";

export default function ContentView ({ viewID, handleViewChange }) {

    return (
        <>
        { viewID === 0 ? <DashboardView handleViewChange={handleViewChange} /> : <DocumentView handleViewChange={handleViewChange} /> }
        </>
    )
}
