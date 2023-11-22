export default function Home() {
  return (
    <>
      {/* TopBar */}
      <section className="wholeOuterProfile">
        <div className="topBar">
          <div className="titleContainer container-fluid">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginLeft: 15,
                alignItems: "center",
              }}
            >
              <box-icon name="cookie" type="solid" animation="tada" />
              <div className="" style={{ fontSize: 30, marginLeft: 5 }}>
                FoodieHub
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div
                className=""
                style={{ display: "flex", alignItems: "center" }}
              >
                <box-icon type="solid" name="message-square-add" />
                <a
                  style={{ marginRight: 20, marginLeft: 5 }}
                  className="link-dark link-offset-2 link-underline link-underline-opacity-0"
                  href=""
                >
                  New Group
                </a>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <box-icon name="log-in-circle" type="solid" />
                <a
                  style={{ marginRight: 20, marginLeft: 5 }}
                  className="link-dark link-offset-2 link-underline link-underline-opacity-0"
                  href=""
                >
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* TopBar */}
        {/* GroupContainer */}
        <div className="profileContainer">
          <div className="cardContent">
            {/* BannerCarrousel */}
            <div
              id="carouselExampleAutoplaying"
              className="carousel"
              data-bs-ride=""
            >
              <div id="teksOverlay" className="card-img-overlay">
                <h2 className="card-title">Welcome to FoodieHub!</h2>
                <p style={{ color: "rgba(255, 255, 255, 0.756)" }}>
                  "Foodie Hub—where flavors unite! Join us for the latest
                  recipes, top dining spots, and all things delicious. Let's
                  embark on an unforgettable taste journey together!"
                </p>
              </div>
              <div className="carousel-inner carousel">
                <div className="carousel-item active imageCarrousel">
                  <img
                    src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item imageCarrousel">
                  <img
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item imageCarrousel">
                  <img
                    src="https://images.unsplash.com/photo-1460306855393-0410f61241c7?q=80&w=2295&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
            </div>
            {/* BannerCarrousel */}
            <div>
              {/* GroupList */}
              <h3 className="groupList">Group List</h3>
              <div className="srcollBarHome">
                <div className="animate-slide">
                  <div className="imageContainerHome-slide">
                    <div className="groupListHome">
                      <img
                        src="https://images.unsplash.com/photo-1638643391904-9b551ba91eaa?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="rounded-circle groupImageHome"
                      />
                      <p className="groupNameCard">Food Hunter</p>
                      <button className="btn">Join</button>
                    </div>
                    <div className="groupListHome">
                      <img
                        src="https://images.unsplash.com/photo-1638643391904-9b551ba91eaa?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="rounded-circle groupImageHome"
                      />
                      <p className="groupNameCard">Food Hunter Too Long</p>
                      <button className="btn">Join</button>
                    </div>
                    <div className="groupListHome">
                      <img
                        src="https://images.unsplash.com/photo-1638643391904-9b551ba91eaa?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="rounded-circle groupImageHome"
                      />
                      <p className="groupNameCard">Food Hunter</p>
                      <button className="btn">Join</button>
                    </div>
                    <div className="groupListHome">
                      <img
                        src="https://images.unsplash.com/photo-1638643391904-9b551ba91eaa?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="rounded-circle groupImageHome"
                      />
                      <p className="groupNameCard">Food Hunter</p>
                      <button className="btn">Join</button>
                    </div>
                    <div className="groupListHome">
                      <img
                        src="https://images.unsplash.com/photo-1638643391904-9b551ba91eaa?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="rounded-circle groupImageHome"
                      />
                      <p className="groupNameCard">Food Hunter</p>
                      <button className="btn">Join</button>
                    </div>
                    <div className="groupListHome">
                      <img
                        src="https://images.unsplash.com/photo-1638643391904-9b551ba91eaa?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="rounded-circle groupImageHome"
                      />
                      <p className="groupNameCard">Food Hunter</p>
                      <button className="btn">Join</button>
                    </div>
                    <div className="groupListHome">
                      <img
                        src="https://images.unsplash.com/photo-1638643391904-9b551ba91eaa?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="rounded-circle groupImageHome"
                      />
                      <p className="groupNameCard">Food Hunter</p>
                      <button className="btn">Join</button>
                    </div>
                    <div className="groupListHome">
                      <img
                        src="https://images.unsplash.com/photo-1638643391904-9b551ba91eaa?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="rounded-circle groupImageHome"
                      />
                      <p className="groupNameCard">Food Hunter</p>
                      <button className="btn">Join</button>
                    </div>
                    <div className="groupListHome">
                      <img
                        src="https://images.unsplash.com/photo-1638643391904-9b551ba91eaa?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="rounded-circle groupImageHome"
                      />
                      <p className="groupNameCard">Food Hunter</p>
                      <button className="btn">Join</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* GroupList */}
            </div>
          </div>
          {/* Profile Card */}
          <div className="profileContent">
            <div className="dataUSer">
              <div className="profileOuter">
                <div className="cardProfile">
                  <img
                    src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="profileImage"
                  />
                  <div className="infoWrap">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p className="profleData">User Name:</p>
                      <p className="profleData">Andy</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p className="profleData">Email:</p>
                      <p className="profleData">andy@mail.com</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p className="profleData">Member since:</p>
                      <p className="profleData">17 August 2021</p>
                    </div>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <a
                      href=""
                      style={{ width: 320, textAlign: "center" }}
                      className="link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 editButton"
                    >
                      Edit Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Profile Card */}
        </div>
        {/* GroupContainer */}
      </section>
    </>
  );
}
