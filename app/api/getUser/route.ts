export async function GET(req: Request, res: Response) {
  const email = new URL(req.url).searchParams.get("email");
  const password = new URL(req.url).searchParams.get("password");

  const response = await fetch(
    `https://masteradv-backend.vercel.app/getUser?email=${email}&password=${password}`,
    {
      headers: {
        "Cache-Control": "no-cache",
      },
    }
  );

  if (response.status === 401) {
    const errorResponse = await response.json();
    return new Response(JSON.stringify(errorResponse), {
      status: 401,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store, max-age=0",
      },
    });
  }
  const user = await response.json();

  return new Response(JSON.stringify(user), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store, max-age=0",
    },
  });
}
