export async function getUserFromDb(email: string, password: string) {
  const response = await fetch(
    `https://masteradv-backend.vercel.app/api/getUser?email=${email}&password=${password}`,
    {
      headers: {
        "Cache-Control": "no-cache",
      },
    }
  );

  if (response.status === 401) {
    const errorResponse = await response.json();
    throw new Error(JSON.stringify(errorResponse));
  }

  return response.json();
}
