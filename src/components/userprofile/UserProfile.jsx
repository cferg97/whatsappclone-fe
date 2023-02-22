import { MdComputer } from "react-icons/md";
import { VscKey } from "react-icons/vsc";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { IoNotificationsOutline } from "react-icons/io5";
import { CgDrive } from "react-icons/cg";
import { CiKeyboard } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { SlPencil } from "react-icons/sl";
import { Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import { Container } from "react-bootstrap";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import NameInput from "./NameInput";
import AboutInput from "./AboutInput";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeProfileAction } from "../redux/actions";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSelected, setSelected] = useState("Profile");
  const [edit, setEdit] = useState(null);

  const currentUser = useSelector((state) => state.currentUser);

  const [username, setUsername] = useState(currentUser.userName);
  const [about, setAbout] = useState(currentUser.about);
  const [phone, setPhone] = useState(currentUser.phone);

  const detailsToEdit = {
    userName: username,
    about: about,
    phone: phone,
  };

  const onSubmitHandler = () => {
    dispatch(changeProfileAction(detailsToEdit));
  };

  const onLogOut = () => {
    localStorage.removeItem("UserAccessToken");
    navigate("/");
  };

  return (
    <Container fluid>
      <Row>
        <Col lg={4} md={4}>
          <div id="profile-leftSideBar">
            <div id="profile-top">
              <div
                className={
                  isSelected === "General"
                    ? "selected d-flex profile-sidebarItem"
                    : "profile-sidebarItem d-flex"
                }
                onClick={() => setSelected("General")}
              >
                <MdComputer />
                <div className="profile-Option">General</div>
              </div>
              <div
                className={
                  isSelected === "Account"
                    ? "selected d-flex profile-sidebarItem"
                    : "profile-sidebarItem d-flex"
                }
                onClick={() => setSelected("Account")}
              >
                <VscKey />
                <div className="profile-Option">Account</div>
              </div>
              <div
                className={
                  isSelected === "Chats"
                    ? "selected d-flex profile-sidebarItem"
                    : "profile-sidebarItem d-flex"
                }
                onClick={() => setSelected("Chats")}
              >
                <HiOutlineChatBubbleLeftRight />
                <div className="profile-Option">Chats</div>
              </div>
              <div
                className={
                  isSelected === "Notifications"
                    ? "selected d-flex profile-sidebarItem"
                    : "profile-sidebarItem d-flex"
                }
                onClick={() => setSelected("Notifications")}
              >
                <IoNotificationsOutline />
                <div className="profile-Option">Notifications</div>
              </div>
              <div
                className={
                  isSelected === "Storage"
                    ? "selected d-flex profile-sidebarItem"
                    : "profile-sidebarItem d-flex"
                }
                onClick={() => setSelected("Storage")}
              >
                <CgDrive />
                <div className="profile-Option">Storage</div>
              </div>
              <div
                className={
                  isSelected === "Shortcuts"
                    ? "selected d-flex profile-sidebarItem"
                    : "profile-sidebarItem d-flex"
                }
                onClick={() => setSelected("Shortcuts")}
              >
                <CiKeyboard />
                <div className="profile-Option">Shortcuts</div>
              </div>
              <div
                className={
                  isSelected === "Help"
                    ? "selected d-flex profile-sidebarItem"
                    : "profile-sidebarItem d-flex"
                }
                onClick={() => setSelected("Help")}
              >
                <IoIosInformationCircleOutline />
                <div className="profile-Option">Help</div>
              </div>
            </div>
            <div className="profile-bottom">
              <div
                className={
                  isSelected === "Profile"
                    ? "selected d-flex profile-sidebarItem"
                    : "profile-sidebarItem d-flex"
                }
                onClick={() => setSelected("Profile")}
              >
                <FaRegUser />
                <div className="profile-Option">Profile</div>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={8}>
          <div id="profile-rightBox d-flex flex-column">
            <div id="profile-userImagePanel">
              <div id="profile-userImageBox">
                <div id="profile-photoCover">
                  <SlPencil size={36} />
                </div>
                <img
                  id="profile-userImage"
                  src={currentUser.avatar}
                  alt="user"
                  className="image-fluid"
                />
              </div>
            </div>
            <div className="profile-inputBox">
              {edit === null ? (
                <>
                  <p className="my-0">{username}</p>
                  <div
                    className="profile-svgBox"
                    onClick={() => setEdit("nameChange")}
                  >
                    <SlPencil />
                  </div>
                </>
              ) : (
                <ClickAwayListener onClickAway={() => setEdit(null)}>
                  <>
                    <NameInput value={username} setName={setUsername} />
                  </>
                </ClickAwayListener>
              )}
            </div>
            <div className="mt-3 d-flex flex-column">
              <label for="about">About</label>
              <div className="profile-inputBox">
                {edit !== "aboutChange" && (
                  <>
                    <p>{about}</p>
                    <div
                      className="profile-svgBox"
                      onClick={() => setEdit("aboutChange")}
                    >
                      <SlPencil />
                    </div>
                  </>
                )}
                {edit === "aboutChange" && (
                  <AboutInput value={about} setAbout={setAbout} />
                )}
              </div>
            </div>
            <div className="mt-3 d-flex flex-column">
              <div>Phone Number</div>
              <div>{phone}</div>
            </div>
          </div>
          <Button className="mt-3" onClick={() => onSubmitHandler()}>
            Submit Changes
          </Button>
          <br />
          <Button variant="danger" onClick={() => onLogOut()} className="mt-3 ml-4">
            Log Out
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
export default UserProfile;
