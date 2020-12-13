import { auth, firestore, serverTimestamp } from "./../../Firebase/Firebase";
import { REMOVE_USER, SET_USER } from "./authConstants";

//functions move to reducer
export var setUser = (user) => ({
  type: SET_USER,
  payload: {
    user,
  },
});
export var removerUser = () => ({
  type: REMOVE_USER,
});

// third party work
export var signup = ({ email, password, fullName }) => async (dispatch) => {
  try {
    var {
      user: { uid },
    } = await auth.createUserWithEmailAndPassword(email, password);
    console.log(uid);
    var userInfo = {
      fullName,
      email,
      createdAt: serverTimestamp(),
    };
    // console.log(userInfo)
    await firestore.collection("users").doc(uid).set(userInfo);

    var userData = {
      fullName,
      email,
      uid,
    };
    dispatch(setUser(userData));
  } catch (error) {
    console.log(error);
  }
};

export var signin = ({ email, password }) => async (dispatch) => {
  try {
    //sign in user
    var {
      user: { uid },
    } = await auth.signInWithEmailAndPassword(email, password);

    //fetch data from firestore
    //we changed email name because variable 'email' initialized again and the upper one got null
    var loggedUser = await firestore.collection("users").doc(uid).get();
    var { fullName, email: userEmail } = loggedUser.data();

    //set to redux store
    var userData = {
      fullName,
      email: userEmail,
      uid,
    };
    dispatch(setUser(userData));
    console.log(userData);
  } catch (error) {
    console.log(error);
  }
};

export var signout = () => async (dispatch) => {
  try {
    await auth.signOut();
    dispatch(removerUser());
  } catch (error) {
    console.log(error);
  }
};
