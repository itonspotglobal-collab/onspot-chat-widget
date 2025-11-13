import { useEffect } from "react";
import { createRoot } from "react-dom/client";
// Force the React-18 build (this avoids React-19 internals)
//import ConnectyCubeChatWidget from "@connectycube/chat-widget/react18";

export default function ChatWidgetMount() {
  useEffect(() => {
    const host = document.createElement("div");
    host.style.position = "fixed";
    host.style.inset = "auto 16px 16px auto";
    host.style.zIndex = "2147483647";
    document.body.appendChild(host);

    const root = createRoot(host);
    root.render(
      <ConnectyCubeChatWidget
        appId="9938"
        authKey="D8D2ACE9-4C48-40C5-B70B-18AC855486AA"
        userId={45}
        userName="Samuel"
        showOnlineUsersTab={false}
        splitView={true}
      />
    );

    return () => {
      try {
        root.unmount();
      } finally {
        host.remove();
      }
    };
  }, []);

  return null;
}
