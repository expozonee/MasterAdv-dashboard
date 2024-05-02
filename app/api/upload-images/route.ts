import type { ImageData } from "@/app/dashboard/admin/page";

export async function POST(req: Request) {
  const body: ImageData[] = await req.json();
  //   console.log("FROM THE POST METHOD", body);

  const formData = new FormData();
  //   formData.append("files", body);
  body.forEach((item, index) => {
    formData.append(`images[imageFile]`, item.imageFile);
    formData.append(`images[${index}][imageName]`, item.imageName);
    formData.append(`images[${index}][mainCategory]`, item.mainCategory);
    formData.append(`images[${index}][section]`, item.section);
    formData.append(`images[${index}][subSection]`, item.subSection);
    formData.append(`images[${index}][subCategory]`, item.subCategory);
  });

  const response = await fetch("http://localhost:4000/upload", {
    method: "POST",

    body: formData,
  });

  return new Response("ok", {
    status: 200,
  });
}
