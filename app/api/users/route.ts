export async function POST(request: Request) {
  const contentType = request.headers.get("Content-Type");
  const url = new URL(request.url);
  const referrer = request.headers.get("Referer");
  const allowedReferrers = ["http://localhost:3000/moatasem-login"];

  var body = null;

  if (referrer && allowedReferrers.includes(referrer)) {
    switch (contentType) {
      case "application/x-www-form-urlencoded":
        const text = await request.text();
        const formData = new URLSearchParams(text);
        body = Object.fromEntries(formData);
        break;

      case "application/json":
        body = await request.json();
        break;

      default:
        body = await request.json();

        break;
    }

    const response = await fetch("http://localhost:4000/checkUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const result = await response.json();
    console.log(result);

    return Response.json({ result });
  }
  return Response.json({ message: "You are not authenticated" });
}
