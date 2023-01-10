import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import ChatRoom from "./ChatRoom";
import { io } from "socket.io-client";


const webrtcsvc = process.env.REACT_APP_BASE_URL_webRTC_SVC;
const socket = io(webrtcsvc);
const MainScreen = () => {
    const [chatRoom, setChatRoom] = useState("");
    const [me, setMe] = useState("");
    useEffect(() => {
        socket.on("me", (id) => {
            setMe(id);
            console.log("socket.on(me) ran");
        });
    }, []);

    return chatRoom !== "" ? (
        <ChatRoom chatRoom={chatRoom} me={me} socket={socket} />
    ) : (
    <div className="webacamera">
        <Container>
            <ContentContainer>
                <h1>Connect with your friend</h1>
                <ButtonContainer>
                    <Button primary onClick={() => setChatRoom("host")}>
                        Create a Room
                    </Button>
                    <Button onClick={() => setChatRoom("guest")}>Join a Room</Button>
                </ButtonContainer>
            </ContentContainer>
        </Container>
    </div>
    );
};

export default MainScreen;


const Container = styled.div`
  width:100%;
  display: grid;
  place-items: center;
  background-color: #002233;
`;

const ContentContainer = styled.div`
  background-color: #002233;
  border-radius: 0.5rem;
  padding: 5rem 5rem;
  text-align: center;

  > h1 {
    color: #1e92ff;
    font-size: 2.5rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 7rem 0;
  min-width: 15rem;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 0.5rem;
  border: 1px solid gray;
  color: white;
  margin: 0.75rem 1rem;
  padding: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  width: 100%;

  :hover {
    background-color: #535353c3;
  }

  ${(props) =>
        props.primary &&
        css`
      border: 1px solid #0172e4;
      background-color: #0172e4;

      :hover {
        background-color: #0163e4;
      }

      :disabled {
        background-color: #002233;
        border: 1px solid #2e2e2e;
        color: gray;
      }
    `}
`;