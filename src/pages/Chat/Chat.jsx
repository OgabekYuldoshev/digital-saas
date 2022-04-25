import { PageHeader } from 'antd';
import React from 'react'
import classes from './Chat.module.scss';
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  Sidebar,
  Search,
  ConversationList,
  Conversation,
  Avatar,
  ConversationHeader
} from "@chatscope/chat-ui-kit-react";
import { conversationList } from "./data"
import { useQueryParams } from "react-router-query-hooks"

const Chat = () => {
  const [query, { pushQuery }] = useQueryParams()
  return (
    <div className={classes.wrapper}>
      <PageHeader
        className="site-page-header"
        onBack={() => window.history.back()}
        title="Chat"
      />
      <div>
        <MainContainer className={classes.MainContainer}>
          <Sidebar className={classes.heigth} position="left" scrollable={false}>
            <Search placeholder="Search..." />
            <ConversationList>
              {
                conversationList.map(item => (
                  <Conversation
                    onClick={() => pushQuery({ id: item.id })}
                    name={item.user}
                    lastSenderName={item.user}
                    info={item.lastMessage}>
                    <Avatar src={item.avatar} name={item.user} status="available" />
                  </Conversation>
                ))
              }

            </ConversationList>
          </Sidebar>
          <ChatContainer className={classes.heigth}>
            <ConversationHeader>
              <ConversationHeader.Back />
              <Avatar src="https://joeschmoe.io/api/v1/random" name="Emily" />
              <ConversationHeader.Content userName="Emily" info="Active 10 mins ago" />
            </ConversationHeader>
            <MessageList>
              <Message model={{
                message: "Hello my friend",
                sentTime: "just now",
                sender: "Joe"
              }}>
                <Avatar src="https://joeschmoe.io/api/v1/random" name="Joe" />
              </Message>
            </MessageList>
            <MessageInput placeholder="Type message here" />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  )
}

export default Chat