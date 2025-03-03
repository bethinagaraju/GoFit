import React, { useState, useRef, useEffect } from "react";
import './pages/ChatUI.css';
import {
  Box,
  Card,
  CardContent,
  TextField,
  IconButton,
  Typography,
  Avatar,
  Paper,
  Fade,
  CircularProgress
} from "@mui/material";
import { styled } from "@mui/system";
import { IoSend } from "react-icons/io5";
import { FaRobot } from "react-icons/fa";
import fetchAnswer from '../fetchAnswer';
import { useBodyPart } from './BodyPartContext';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ChatContainer = styled(Card)({
  maxWidth: "400px",
  margin: "20px auto",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  borderRadius: "16px",
  height: "600px",
  display: "flex",
  flexDirection: "column"
});

const MessageContainer = styled(Box)({
  flex: 1,
  overflowY: "auto",
  padding: "20px",
  "&::-webkit-scrollbar": {
    width: "6px"
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#e0e0e0",
    borderRadius: "3px"
  }
});

const Message = styled(Paper)(({ isUser }) => ({
  padding: "10px 16px",
  borderRadius: isUser ? "16px 16px 0 16px" : "16px 16px 16px 0",
  backgroundColor: isUser ? "#2196f3" : "#f5f5f5",
  color: isUser ? "#fff" : "#333",
  maxWidth: "80%",
  marginBottom: "12px",
  marginLeft: isUser ? "auto" : "0",
  marginRight: isUser ? "0" : "auto"
}));

const InputContainer = styled(Box)({
  padding: "16px",
  borderTop: "1px solid #eee",
  display: "flex",
  alignItems: "center",
  gap: "8px"
});

const formatMessage = (text) => {
  const boldRegex = /\*\*(.*?)\*\*/g;
  const listRegex = /^\d+\.\s(.*)$/gm;

  let formattedText = text.replace(boldRegex, "<strong>$1</strong>");
  formattedText = formattedText.replace(listRegex, "<li>$1</li>");

  if (text.match(listRegex)) {
    formattedText = `<ul>${formattedText}</ul>`;
  }

  return { __html: formattedText };
};

const ChatUI = () => {
  const { name } = useBodyPart();
  const [messages, setMessages] = useState([
    { text: `Hello ${name}! How can I help you today?`, isUser: false }
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, isUser: true }]);
      setNewMessage("");
      setIsTyping(true);

      const answer = await fetchAnswer(newMessage);
      setIsTyping(false);
      setMessages(prev => [...prev, { text: answer, isUser: false }]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div style={{ backgroundColor: "#3C3D37", height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <ArrowBackIcon style={{ color: "white", borderRadius: "50%", position: "absolute", top: "10px", left: "10px", cursor: "pointer" }} onClick={() => window.history.back()} />
      <ChatContainer style={{ height: "90vh" }} role="region" aria-label="Chat interface">
        <MessageContainer>
          {messages.map((message, index) => (
            <Fade in={true} key={index} timeout={500}>
              <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
                {!message.isUser && (
                  <Avatar sx={{ mr: 1, bgcolor: "#2196f3" }}>
                    <FaRobot />
                  </Avatar>
                )}
                <Message isUser={message.isUser}>
                  <Typography variant="body1" dangerouslySetInnerHTML={formatMessage(message.text)} />
                </Message>
              </Box>
            </Fade>
          ))}
          {isTyping && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, ml: 5 }}>
              <CircularProgress size={20} />
              <Typography variant="caption">Bot is typing...</Typography>
            </Box>
          )}
          <div ref={messagesEndRef} />
        </MessageContainer>
        <InputContainer>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            size="small"
            aria-label="Message input"
            multiline
            maxRows={3}
          />
          <IconButton
            color="primary"
            onClick={handleSend}
            disabled={!newMessage.trim()}
            aria-label="Send message"
            sx={{
              backgroundColor: "#2196f3",
              color: "white",
              "&:hover": { backgroundColor: "#1976d2" },
              "&.Mui-disabled": { backgroundColor: "#e0e0e0", color: "#9e9e9e" }
            }}
          >
            <IoSend />
          </IconButton>
        </InputContainer>
      </ChatContainer>
    </div>
  );
};

export default ChatUI;
