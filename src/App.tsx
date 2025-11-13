import "./App.css";
import ChatWidgetMount from "./ChatWidgetMount";

export default function App() {
  return (
    <>
      {/* Main App Layout */}
      <div className="app-container">
        <h1>Welcome to ConnectyCube Chat Demo</h1>
        <p>
          This demo shows how to safely mount the ConnectyCube Chat Widget in a
          React app without triggering the infinite render loop.
        </p>
      </div>

      {/* The isolated chat widget mount */}
      <ChatWidgetMount />
    </>
  );
}
