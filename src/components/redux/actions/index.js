export const FETCH_PROFILE_ME = "FETCH_PROFILE_ME";
export const FETCH_PROFILE_OTHER = "FETCH_PROFILE_OTHER";
export const SAVE_USER_TOKEN = "SAVE_USER_TOKEN";
export const SAVE_CURRENT_USER = "SAVE_CURRENT_USER";
export const SAVE_ALL_CONVERSATIONS = "SAVE_ALL_CONVERSATIONS";
export const SAVE_CURRENT_CONVERSATION = "SAVE_CURRENT_CONVERSATION"
export const SAVE_SEARCH = "SAVE_SEARCH";
export const SAVE_CONTACTS = "SAVE_CONTACTS";
//the above are exporting action names, so you do not have to type out the quotes ""
//each time you want to use one

export const fetchCurrentUser = () => {
  return async (dispatch) => {
    try {
      const accessToken = localStorage.getItem("UserAccessToken");
      const token = accessToken.split('"').join("");
      let response = await fetch("http://localhost:3001/users/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        let fetchedData = await response.json();
        dispatch({
          type: SAVE_CURRENT_USER,
          payload: fetchedData,
        });
      } else {
        console.log("There was an issue fetching ");
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const changeProfileAction = (userInfo) => {
  return async (dispatch) => {
    try {
      const accessToken = localStorage.getItem("UserAccessToken");
      const token = accessToken.split('"').join("");
      let response = await fetch("http://localhost:3001/users/me", {
        method: "PUT",
        body: JSON.stringify(userInfo),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        dispatch(fetchCurrentUser());
      } else {
        console.log("There was an error submitting your profile");
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const logInAction = (userInfo) => {
  return async (dispatch) => {
    try {
      let response = await fetch("http://localhost:3001/users/session", {
        method: "POST",
        body: JSON.stringify(userInfo),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        let fetchedData = await response.json();
        let accessToken = fetchedData.accessToken;
        let username = fetchedData.userName;
        localStorage.setItem("UserAccessToken", accessToken);
        localStorage.setItem("Username", username);
        window.location.assign("http://localhost:3000/dashboard");
        dispatch(fetchCurrentUser());
      } else {
        console.log("There was a problem logging into your account");
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const registerUserAction = (userForm) => {
  return async () => {
    try {
      let response = await fetch("http://localhost:3001/users/account", {
        method: "POST",
        body: JSON.stringify(userForm),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        window.location.assign("http://localhost:3000/");
      } else {
        console.log("There was an error submitting your request");
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const uploadAvatarAction = (image) => {
  return async (dispatch) => {
    try {
      const accessToken = localStorage.getItem("UserAccessToken");
      const token = accessToken.split('"').join("");
      let response = await fetch("http://localhost:3001/users/me/avatar", {
        method: "POST",
        body: image,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        dispatch(fetchCurrentUser());
      } else {
        console.log("There was a problem submitting the image");
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const getAllUsersAction = () => {
  return async (dispatch) => {
    try {
      const accessToken = localStorage.getItem("UserAccessToken");
      const token = accessToken.split('"').join("");
      let response = await fetch("http://localhost:3001/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        let fetchedData = await response.json();
        dispatch({
          type: SAVE_SEARCH,
          payload: fetchedData,
        });
      } else {
        console.log("There was an error fetching users");
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const saveContactsAction = (contacts) => {
  return async (dispatch) => {
    try {
      const accessToken = localStorage.getItem("UserAccessToken");
      const token = accessToken.split('"').join("");
      let response = await fetch("http://localhost:3001/users/contacts", {
        method: "POST",
        body: JSON.stringify(contacts),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        console.log("Contacts saved");
        dispatch(fetchCurrentUser());
      } else {
        console.log("Couldn't save contacts - check BE");
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const getUserConversations = () => {
  return async (dispatch) => {
    try {
      const accessToken = localStorage.getItem("UserAccessToken");
      const token = accessToken.split('"').join("");
      let response = await fetch("http://localhost:3001/chats", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        let fetchedData = await response.json();
        dispatch({
          type: SAVE_ALL_CONVERSATIONS,
          payload: fetchedData.reverse(),
        });
      } else {
        console.log("Couldn't fetch conversations");
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const getCurrentConversation = () => {
  return async (dispatch) => {
    try {
      const accessToken = localStorage.getItem("UserAccessToken");
      const token = accessToken.split('"').join("");
      let response = await fetch("");
    } catch (err) {}
  };
};

export const newChatAction = (info) => {
  return async (dispatch) => {
    try {
      const accessToken = localStorage.getItem("UserAccessToken");
      const token = accessToken.split('"').join("");
      let response = await fetch("http://localhost:3001/chats", {
        method: "POST",
        body: JSON.stringify(info),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        console.log("Created chat successfully");
        dispatch(getUserConversations());
      } else {
        console.log("There was a problem submitting chat");
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchSelectedChat = (id) => {
  return async (dispatch) => {
    try {
      const accessToken = localStorage.getItem("UserAccessToken");
      const token = accessToken.split('"').join("");
      let response = await fetch(`http://localhost:3001/chats/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if(response.ok){
        console.log("Chat fetched")
        let fetchedData = await response.json()
        dispatch({
          type: SAVE_CURRENT_CONVERSATION,
          payload: fetchedData
        })
      }
      else{
        console.log("There was a problem fetching this chat")
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteChatAction = (id) => {
  return async (dispatch) => {
    try {
      const accessToken = localStorage.getItem("UserAccessToken");
      const token = accessToken.split('"').join("");
      let response = await fetch(`http://localhost:3001/chats/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        dispatch(getUserConversations());
        console.log("Chat successfully deleted");
      } else {
        console.log("Couldn't delete conversation");
      }
    } catch (err) {
      console.log(err);
    }
  };
};
