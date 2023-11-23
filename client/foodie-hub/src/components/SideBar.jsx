import { useSelector, useDispatch } from "react-redux";
import { fetchUserGroups } from "../store/usergroups";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert";

export default function SideBar() {
  const navigate = useNavigate();
  const { data, loading, error } = useSelector((state) => state.userGroups);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserGroups());
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="sideBar">
      <div className="srcollBar">
        {loading ? (
          <p>....</p>
        ) : (
          data.map((userGroup, idx) => (
            <div key={idx} className="imageContainer">
              <img
                src={userGroup.Group.groupPicture}
                className="rounded-circle groupImage"
              />
            </div>
          ))
        )}
      </div>
      <div className="logoOuter btn cusBtn">
        <Link to="/new-group">
          <box-icon className="logoSize" name="message-square-add" />
        </Link>
      </div>

      <div className="logoOuter btn cusBtn">
        <Link to="/">
          <box-icon className="logoSize" name="home-alt" />
        </Link>
      </div>
      <div className="logoOuter btn cusBtn">
        <a onClick={(event) => {
          event.preventDefault()
          handleLogout()
        }}>
          <box-icon
            className="logoSize"
            name="log-out-circle"
            color="#000000"
          />
        </a>
      </div>
    </div>
  );
}
