import React, { useEffect, useState } from "react";
import { Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from "stream-chat-react";
import { StreamChat } from "stream-chat";
import "stream-chat-react/dist/css/v2/index.css";

const client = StreamChat.getInstance("7nhdjgkdmstq"); // Replace with your actual API Key

const App = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [channel, setChannel] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const setupChat = async () => {
      try {
        // If using a backend token, fetch it from your server
        const validToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoic3R1ZGVudDEyMyJ9.chE5SMvZRoc40gqRPkP5twLfVF8slnnm4fqu4MaYobw"; // Replace with the token from your API Explorer or Backend

        await client.connectUser(
          { id: "student123", name: "Student" },
          validToken
        );

        const chatChannel = client.channel("messaging", "react-chat", { name: "React Chat" });
        await chatChannel.watch();
        
        setChannel(chatChannel);
        setIsConnected(true);
      } catch (err) {
        console.error("Error setting up chat:", err);
        setError(err.message);
      }
    };

    setupChat();

    return () => {
      client.disconnectUser();
    };
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!isConnected || !channel) {
    return <div>Loading chat...</div>;
  }

  return (
    <Chat client={client} theme="team light">
      <Channel channel={channel}>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
};

export default App;
