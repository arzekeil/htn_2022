import DashboardView from "./DashboardView";
import DocumentView from "./DocumentView";

export default function ContentView ({ viewID }) {

    return (
        <>
        { viewID === 0 ? <DashboardView /> : <DocumentView /> }
        </>
    )
}
