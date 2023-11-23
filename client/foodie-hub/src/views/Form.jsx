import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import url from "../constants";

export const Form = () => {
  const { userId } = useParams();
  const editMode = userId;
  const navigate = useNavigate();

  const [loggedUser, setLoggedUser] = useState(null);
  async function getUser() {
    try {
      const { data } = await axios.get(url + "/users/" + userId, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      setLoggedUser(data);
      localStorage.setItem("loggedUser", JSON.stringify(data));
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedUser");
    if (storedUser) {
      setLoggedUser(JSON.parse(storedUser));
    } else {
      getUser();
    }
  }, []);

  const [fullName, setFullName] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);

  const handleNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleImageChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    
    formData.append("fullName", fullName);
    formData.append("profilePicture", profilePicture);

    try {
      if (!userId) {
        const group = await axios.post(url + `/groups`, formData, {
          headers: {
            Authorization: `Bearer ${localStorage.access_token}`,
            "Content-Type": "multipart/form-data",
          },
        });
        console.log(group.data);
      } else {
        const response = await axios.put(url + `/users/${userId}`, formData, {
          headers: {
            Authorization: `Bearer ${localStorage.access_token}`,
            "Content-Type": "multipart/form-data",
          },
        });
        console.log(response.data);
      }
      navigate("/");
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <>
      <section className="groupSection">
        <div className="groupContent">
          <div className="imageOuter">
            <img
              src={
                editMode
                  ? loggedUser?.profilePicture
                  : "https://img.freepik.com/free-vector/community-social_24877-63444.jpg?w=1380&t=st=1700673667~exp=1700674267~hmac=bab951e032ede5de3df86e448ce53cc3e703ecaccba17abfa84b7c3d684163da"
              }
              className="rounded-4 groupImageForm"
            />
          </div>
          <div className="formOuter">
            <form onSubmit={handleSubmit}>
              <div className="mb-3 custPosition">
                <label className="form-label labelForm">
                  {editMode ? "User Name" : "Group Name"}
                </label>
                <input
                  defaultValue={editMode ? loggedUser?.fullName : ""}
                  onChange={handleNameChange}
                  name="fullName"
                  type="text"
                  className="form-control customForm"
                />
              </div>
              <div className="mb-3 custPosition">
                <label className="form-label labelForm">
                  {editMode ? "User Image" : "Group Image"}
                </label>
                <input
                  onChange={handleImageChange}
                  className="form-control customForm"
                  type="file"
                  id="formFile"
                />
              </div>
              <button type="submit" className="btn btn-light customBtn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
