const randomInt = () => {
  return Math.round(Math.random() * 100000);
};

const createListRange = (n) => {
  return [...Array(n).keys()];
};
// const port = "103.74.255.77:3006";
const port = "localhost:3001";

async function loginUser(credentials) {
  return fetch(`http://${port}/api/v1/auth`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(credentials),
  })
    .then((data) => {
      if (!data.ok) {
        return data.text().then((txt) => {
          alert(txt);
          return undefined;
        });
      } else {
        return data.json();
      }
    })
    .catch((e) => {
      console.log("Catch Error", e);
    });
}
async function registerUser(credentials) {
  var txt = "";
  return fetch(`http://${port}/api/v1/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  })
    .then((data) => {
      if (!data.ok) {
        return data.text().then((txt) => {
          alert(txt);
          return undefined;
        });
      } else {
        return data.json();
      }
    })
    .catch((e) => {
      console.log("Catch Error", e);
    });
}
async function getAllContent(token) {
  return fetch(`http://${port}/api/v1/allcontent/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": JSON.parse(token)._id,
    },
  }).then((data) => data.json());
}

async function deleteCourse(token, _id) {
  return fetch(`http://${port}/api/v1/allcontent/delete`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
    body: JSON.stringify({
      _id,
    }),
  });
}
async function createCourse(token, body) {
  return fetch(`http://${port}/api/v1/allcontent/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
    body,
  })
    .then((data) => {
      if (!data.ok) {
        return data.text().then((txt) => {
          alert(txt);
          return undefined;
        });
      } else {
        return data.json();
      }
    })
    .catch((e) => {
      console.log("Catch Error", e);
    });
}
async function editCourse(token, body) {
  return fetch(`http://${port}/api/v1/allcontent/edit`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
      Accept: "application/json",
    },
    body,
  }).then((data) => data.json());
}

const checkUndefined = (checkThis) => {
  return checkThis === undefined;
};

export {
  randomInt,
  createListRange,
  port,
  loginUser,
  registerUser,
  checkUndefined,
  getAllContent,
  deleteCourse,
  createCourse,
  editCourse,
};
