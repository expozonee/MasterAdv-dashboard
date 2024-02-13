export async function getCategories() {
  const response = await fetch("http://localhost:4000/categories", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
}

export function getPortfolioSections() {
  return [
    {
      id: 1,
      title: "Cat",
      imageUrl:
        "https://img.freepik.com/free-photo/close-up-cute-cat-indoors_23-2148882585.jpg?w=826&t=st=1707040350~exp=1707040950~hmac=c462d2a57cd383e22cd4d53e83e3851f5a48deaf3b96c4d18be15e607f4b7444",
    },
    {
      id: 2,
      title: "Another cat",
      imageUrl:
        "https://img.freepik.com/free-photo/vertical-shot-white-cat-ground-sunlight_181624-30667.jpg?w=826&t=st=1707040403~exp=1707041003~hmac=66b75d77bdc1ed1bcca0617db373f483f1ba82c78c8ab752062f202a84c44e70",
    },
    {
      id: 3,
      title: "Cat",
      imageUrl:
        "https://img.freepik.com/free-photo/close-up-cute-cat-indoors_23-2148882585.jpg?w=826&t=st=1707040350~exp=1707040950~hmac=c462d2a57cd383e22cd4d53e83e3851f5a48deaf3b96c4d18be15e607f4b7444",
    },
    {
      id: 4,
      title: "Another cat",
      imageUrl:
        "https://img.freepik.com/free-photo/vertical-shot-white-cat-ground-sunlight_181624-30667.jpg?w=826&t=st=1707040403~exp=1707041003~hmac=66b75d77bdc1ed1bcca0617db373f483f1ba82c78c8ab752062f202a84c44e70",
    },
    {
      id: 5,
      title: "Cat",
      imageUrl:
        "https://img.freepik.com/free-photo/close-up-cute-cat-indoors_23-2148882585.jpg?w=826&t=st=1707040350~exp=1707040950~hmac=c462d2a57cd383e22cd4d53e83e3851f5a48deaf3b96c4d18be15e607f4b7444",
    },
    {
      id: 6,
      title: "Another cat",
      imageUrl:
        "https://img.freepik.com/free-photo/vertical-shot-white-cat-ground-sunlight_181624-30667.jpg?w=826&t=st=1707040403~exp=1707041003~hmac=66b75d77bdc1ed1bcca0617db373f483f1ba82c78c8ab752062f202a84c44e70",
    },
    {
      id: 7,
      title: "Cat",
      imageUrl:
        "https://img.freepik.com/free-photo/close-up-cute-cat-indoors_23-2148882585.jpg?w=826&t=st=1707040350~exp=1707040950~hmac=c462d2a57cd383e22cd4d53e83e3851f5a48deaf3b96c4d18be15e607f4b7444",
    },
    {
      id: 8,
      title: "Another cat",
      imageUrl:
        "https://img.freepik.com/free-photo/vertical-shot-white-cat-ground-sunlight_181624-30667.jpg?w=826&t=st=1707040403~exp=1707041003~hmac=66b75d77bdc1ed1bcca0617db373f483f1ba82c78c8ab752062f202a84c44e70",
    },
  ];
}
