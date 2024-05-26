export async function getCategories() {
  const response = await fetch(
    "https://masteradv-backend.vercel.app/categories",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
      },
    }
  );
  const data = await response.json();
  return data;
}

export async function getTitles(slugs) {
  const stringSlugs = JSON.stringify(slugs);
  try {
    const response = await fetch(
      `https://masteradv-backend.vercel.app/getTitles?slugs=${stringSlugs}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    // console.log(error);
  }
}

export function getPortfolioSections() {
  return [
    {
      id: 1,
      title: "Cat",
      imageUrl:
        "https://img.freepik.com/free-photo/adorable-black-white-kitty-with-monochrome-wall-her_23-2148955183.jpg?t=st=1709469369~exp=1709472969~hmac=6c23ccc6e48a2cf591de7976a546130de6d1b610f7761a17429e62e3abbaa2f8&w=2000",
    },
    {
      id: 2,
      title: "Another cat",
      imageUrl:
        "https://img.freepik.com/free-photo/overhead-closeup-shot-black-domestic-furry-cat-pillow_181624-1922.jpg?t=st=1709471805~exp=1709475405~hmac=35afb1874168f4694f4c1e2f1c948ab1b9cf8ff93681cbbcf33276b51191f7b8&w=2000",
    },
    {
      id: 3,
      title: "Cat",
      imageUrl:
        "https://img.freepik.com/free-photo/adorable-black-white-kitty-with-monochrome-wall-her_23-2148955183.jpg?t=st=1709469369~exp=1709472969~hmac=6c23ccc6e48a2cf591de7976a546130de6d1b610f7761a17429e62e3abbaa2f8&w=2000",
    },
    {
      id: 4,
      title: "Another cat",
      imageUrl:
        "https://img.freepik.com/free-photo/overhead-closeup-shot-black-domestic-furry-cat-pillow_181624-1922.jpg?t=st=1709471805~exp=1709475405~hmac=35afb1874168f4694f4c1e2f1c948ab1b9cf8ff93681cbbcf33276b51191f7b8&w=2000",
    },
    {
      id: 5,
      title: "Cat",
      imageUrl:
        "https://img.freepik.com/free-photo/adorable-black-white-kitty-with-monochrome-wall-her_23-2148955183.jpg?t=st=1709469369~exp=1709472969~hmac=6c23ccc6e48a2cf591de7976a546130de6d1b610f7761a17429e62e3abbaa2f8&w=2000",
    },
    {
      id: 6,
      title: "Another cat",
      imageUrl:
        "https://img.freepik.com/free-photo/overhead-closeup-shot-black-domestic-furry-cat-pillow_181624-1922.jpg?t=st=1709471805~exp=1709475405~hmac=35afb1874168f4694f4c1e2f1c948ab1b9cf8ff93681cbbcf33276b51191f7b8&w=2000",
    },
    {
      id: 7,
      title: "Cat",
      imageUrl:
        "https://img.freepik.com/free-photo/adorable-black-white-kitty-with-monochrome-wall-her_23-2148955183.jpg?t=st=1709469369~exp=1709472969~hmac=6c23ccc6e48a2cf591de7976a546130de6d1b610f7761a17429e62e3abbaa2f8&w=2000",
    },
    {
      id: 8,
      title: "Another cat",
      imageUrl:
        "https://img.freepik.com/free-photo/overhead-closeup-shot-black-domestic-furry-cat-pillow_181624-1922.jpg?t=st=1709471805~exp=1709475405~hmac=35afb1874168f4694f4c1e2f1c948ab1b9cf8ff93681cbbcf33276b51191f7b8&w=2000",
    },
  ];
}
