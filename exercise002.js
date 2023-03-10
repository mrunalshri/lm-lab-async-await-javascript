import fetch from "node-fetch";

const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";

const fetchData = async (apiEndPoint) => {
  try {
    const result = await fetch(apiEndPoint);
    const response = await result.json();
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

fetchData(jsonTypicode);
