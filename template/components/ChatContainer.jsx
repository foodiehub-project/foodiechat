export const ChatContainer = () => {
  return (
    <>
      {/* ChatContainer */}
      <div className="chatContainer">
        <div className="groupNameContainer">
          <p className="groupName">Food Lovers</p>
        </div>
        <div className="containerChat">
          {/* UserList */}
          <div className="userContext">
            <p className="userList">Chat Participant's</p>
            <div className="containerUList">
              <img
                src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                className="rounded-circle user_img_msg"
              />
              <p className="userByList">Andy</p>
            </div>
            <div className="containerUList">
              <img
                src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                className="rounded-circle user_img_msg"
              />
              <p className="userByList">Lisa</p>
            </div>
            <div className="containerUList">
              <img
                src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                className="rounded-circle user_img_msg"
              />
              <p className="userByList">Ito</p>
            </div>
            <div className="containerUList">
              <img
                src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                className="rounded-circle user_img_msg"
              />
              <p className="userByList">Uvuweveosas</p>
            </div>
          </div>
          {/* UserList */}
          {/* ChatBubble */}
          <div className="chatContext">
            <div className="chatBubbleContainer">
              <div className="message-container scrollBubble">
                <div className="leftBubble">
                  <div className="name-container">
                    <img
                      src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                      className="rounded-circle user_img_msg"
                    />
                    <p>Lisa</p>
                  </div>
                  <p className="message-content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Deserunt cum eveniet, enim debitis neque soluta sint amet,
                    quod illum velit corrupti quam doloribus harum labore
                    numquam voluptas unde dignissimos commodi?
                    <span className="message-time">11:30</span>
                  </p>
                </div>
                <div className="rightBubble">
                  <div className="name-containerR rightName">
                    <img
                      src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                      className="rounded-circle user_img_msg"
                    />
                    <p>You</p>
                  </div>
                  <p className="message-content rightMessage">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Deserunt cum eveniet, enim debitis neque soluta sint amet,
                    quod illum velit corrupti quam doloribus harum labore
                    numquam voluptas unde dignissimos commodi?
                    <span className="message-time">11:30</span>
                  </p>
                </div>
                <div className="leftBubble">
                  <div className="name-container">
                    <img
                      src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                      className="rounded-circle user_img_msg"
                    />
                    <p>Ito</p>
                  </div>
                  <p className="message-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus nulla commodi nemo nostrum nam ratione blanditiis
                    nobis! Cum porro voluptatem molestiae autem sit illum?
                    Facere maiores libero porro quam deleniti? Lorem ipsum dolor
                    sit amet, consectetur adipisicing elit. Deserunt cum
                    eveniet, enim debitis neque soluta sint amet, quod illum
                    velit corrupti quam doloribus harum labore numquam voluptas
                    unde dignissimos commodi?
                    <span className="message-time">11:30</span>
                  </p>
                </div>
                <div className="rightBubble">
                  <div className="name-containerR rightName">
                    <img
                      src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                      className="rounded-circle user_img_msg"
                    />
                    <p>You</p>
                  </div>
                  <p className="message-content rightMessage">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Deserunt cum eveniet, enim debitis neque soluta sint amet,
                    quod illum velit corrupti quam doloribus harum labore
                    numquam voluptas unde dignissimos commodi?
                    <span className="message-time">11:30</span>
                  </p>
                </div>
                <div className="rightBubble">
                  <div className="name-containerR rightName">
                    <img
                      src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                      className="rounded-circle user_img_msg"
                    />
                    <p>You</p>
                  </div>
                  <p className="message-content rightMessage">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Deserunt cum eveniet, enim debitis neque soluta sint amet,
                    quod illum velit corrupti quam doloribus harum labore
                    numquam voluptas unde dignissimos commodi?
                    <span className="message-time">11:30</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* ChatBubble */}
        </div>
        {/* SendBar */}
        <div className="sendBar">
          <div className="card-footer">
            <div className="input-group">
              <div className="input-group-append" />
              <textarea
                name=""
                className="form-control type_msg"
                placeholder="Type your message..."
                defaultValue={""}
              />
              <a
                href=""
                className="input-group-append link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0"
              >
                <span className="input-group-text send_btn">
                  Send
                  <i className="fas fa-location-arrow" />
                </span>
              </a>
            </div>
          </div>
        </div>
        {/* SendBar */}
      </div>
      {/* ChatContainer */}
    </>
  );
};
