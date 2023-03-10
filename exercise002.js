import fetch from "node-fetch";

const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";

const jsonCatAPI = "https://api.thecatapi.com/v1/images/search";

const jsonFacts = "https://catfact.ninja/fact";

const jsonDogFacts = "https://dog.ceo/api/breeds/image/random";

const fetchData = async (apiEndPoint) => {
  try {
    const result = await fetch(apiEndPoint);
    const response = await result.json();
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

const showJSONResponse = async (apiEndPoint) => {
  try {
    const result = await fetch(apiEndPoint);
    console.log(`Response Status Code: ${result.status} , Response Status: ${result.statusText}`);
    const response = await result.json();
    console.log("JSON Response:- ", response);
  } catch (error) {
    console.error(error);
  }
}


fetchData(jsonTypicode);
showJSONResponse(jsonCatAPI);
showJSONResponse(jsonFacts);
showJSONResponse(jsonDogFacts);
