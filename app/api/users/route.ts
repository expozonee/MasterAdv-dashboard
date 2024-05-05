import jwt from "jsonwebtoken";

type User = {
  email: string;
  role: string;
  iat: number;
  exp: number;
};

// export async function POST(request: Request) {
//   const contentType = request.headers.get("Content-Type");
//   const url = new URL(request.url);
//   const referrer = request.headers.get("Referer");
//   const allowedReferrers = ["http://localhost:3000/moatasem-login"];

//   var body = null;

//   if (referrer && allowedReferrers.includes(referrer)) {
//     switch (contentType) {
//       case "application/x-www-form-urlencoded":
//         const text = await request.text();
//         const formData = new URLSearchParams(text);
//         body = Object.fromEntries(formData);
//         break;

//       case "application/json":
//         body = await request.json();
//         break;

//       default:
//         body = await request.json();

//         break;
//     }

//     const response = await fetch("http://localhost:4000/checkUser", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(body),
//       credentials: "include",
//     });

//     if (response.ok) {
//       const cookie = response.headers.get("set-Cookie");

//       try {
//         if (cookie) {
//           const token = cookie.split(";")[0].split("=")[1];
//           const user: User = await new Promise((resolve, reject) => {
//             jwt.verify(token, process.env.JWT_SECRET!, (err, decoded) => {
//               if (err) reject(err);
//               else resolve(decoded as User);
//             });
//           });

//           return Response.json(user, {
//             status: 200,
//             headers: {
//               "Content-Type": "application/json",
//               "Set-Cookie": `${cookie} path=/; HttpOnly; SameSite=Strict`,
//             },
//           });
//         }
//       } catch (error) {
//         console.log(error);

//         return Response.json(JSON.stringify(error), {
//           status: 502,
//         });
//       }
//     } else {
//       return Response.json(
//         { message: "Invalid email or password" },
//         {
//           status: 401,
//         }
//       );
//     }
//   }
//   return Response.json(
//     { message: "You are not authenticated" },
//     { status: 401 }
//   );
// }
