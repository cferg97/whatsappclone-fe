import { MdComputer } from "react-icons/md";
import { VscKey } from "react-icons/vsc";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { IoNotificationsOutline } from "react-icons/io5";
import { CgDrive } from "react-icons/cg";
import { CiKeyboard } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { SlPencil } from "react-icons/sl";
import { Container, Row, Col } from "react-bootstrap";

const UserProfile = () => {
  return (
    <div>
      <Row>
        <Col lg={2}>
          <div id="profile-leftSideBar">
            <div id="profile-top">
              <div className="profile-sidebarItem d-flex">
                <MdComputer />
                <div className="profile-Option">General</div>
              </div>
              <div className="profile-sidebarItem d-flex">
                <VscKey />
                <div className="profile-Option">Account</div>
              </div>
              <div className="profile-sidebarItem d-flex">
                <HiOutlineChatBubbleLeftRight />
                <div className="profile-Option">Chats</div>
              </div>
              <div className="profile-sidebarItem d-flex">
                <IoNotificationsOutline />
                <div className="profile-Option">Notifications</div>
              </div>
              <div className="profile-sidebarItem d-flex">
                <CgDrive />
                <div className="profile-Option">Storage</div>
              </div>
              <div className="profile-sidebarItem d-flex">
                <CiKeyboard />
                <div className="profile-Option">Shortcuts</div>
              </div>
              <div className="profile-sidebarItem d-flex">
                <IoIosInformationCircleOutline />
                <div className="profile-Option">Help</div>
              </div>
            </div>
            <div className="profile-bottom">
              <div className="profile-sidebarItem d-flex">
                <FaRegUser />
                <div className="profile-Option">Profile</div>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={10}>
          <div id="profile-rightBox d-flex flex-column">
            <div id="profile-userImagePanel">
              <div id="profile-userImageBox">
                <div id="profile-photoCover">
                  <SlPencil size={36} />
                </div>
                <img
                  id="profile-userImage"
                  src="https://cdn.landesa.org/wp-content/uploads/default-user-image.png"
                  alt="user"
                  className="image-fluid"
                />
              </div>
            </div>
            <div className="profile-inputBox">
              <input
                type="text"
                name="Users Name"
                placeholder="userName will go here"
              />
              <div className="profile-svgBox">
                <SlPencil />
              </div>
            </div>
            <div className="mt-3 d-flex flex-column">
              <label for="about">About</label>
              <div className="profile-inputBox">
                <input
                  type="text"
                  name="about"
                  placeholder="Hey there! I am using WhatsApp."
                />
                <div className="profile-svgBox">
                  <SlPencil />
                </div>
              </div>
            </div>
            <div className="mt-3 d-flex flex-column">
              <div>Phone Number</div>
              <div>User Phone number will go here</div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default UserProfile;
