import {useSelector, useDispatch} from "react-redux";
import { fetchUserGroups } from "../store/usergroups";
import { useEffect } from "react";


export default function SideBar() {
  const { data, loading, error } = useSelector(state => state.userGroups);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserGroups());
  },[]);

  return (
        <div className="sideBar">
    <div className="srcollBar">
      {loading ? (
        <p>....</p>
      ) : (
        data.map((group) => (
        <div className="imageContainer">
          <img
            src={group.Group.groupPicture}
            className="rounded-circle groupImage"
          />
        </div>
        ))
      )
      }
    </div>
    <div className="logoOuter btn cusBtn">
      <box-icon className="logoSize" name="message-square-add" />
    </div>
    <div className="logoOuter btn cusBtn">
      <box-icon className="logoSize" name="home-alt" />
    </div>
    <div className="logoOuter btn cusBtn">
      <box-icon className="logoSize" name="log-out-circle" color="#000000" />
    </div>
  </div>
  );
};
