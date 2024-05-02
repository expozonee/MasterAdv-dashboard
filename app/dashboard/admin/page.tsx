"use client";
import React, { useState, useTransition, useEffect } from "react";
import UploadedImage from "@/components/UploadedImage/UploadedImage";
import ErrorAlert from "./ErrorAlert";
import { useSession } from "next-auth/react";
import { OptionsType } from "@/components/UploadedImage/UploadOptions";

type UploadedImages = {
  name: string;
  size: number;
  type: string;
  lastModified: number;
  lastModifiedDate: Date;
  webkitRelativePath: string;
};

export type ImageData = {
  imageFile: File;
  imageName: string;
  mainCategory: string;
  section: string;
  subSection: string;
  subCategory: string;
};

const AdminPage = () => {
  const { data: session, status } = useSession();
  console.log("session", session);

  const [submittedImages, setSubmittedImages] = useState<ImageData[]>([]);
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);
  const [alerts, setAlerts] = useState<string[]>([]);
  const [isError, setIsError] = useState(false);
  const maxHeight = 1500;
  const maxWidth = 1500;

  function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const images = e.target.files;
    const acceptedImageTypes = "image/webp";
    const acceptedImages: File[] = [];
    const sizeError = `Image must be ${maxHeight} X ${maxWidth}px or less`;
    const typeError = "Image must be a WEBP file";

    if (images) {
      let loadedImagesCount = 0;
      const totalImagesCount = images.length;
      console.log("uploading images");

      new Promise((resolve, reject) => {
        Array.from(images).forEach((image) => {
          if (image.type === acceptedImageTypes) {
            const newImage = new Image();
            newImage.src = URL.createObjectURL(image);
            newImage.onload = () => {
              if (newImage.width <= maxWidth && newImage.height <= maxHeight) {
                acceptedImages.push(image);
                loadedImagesCount++;
                if (loadedImagesCount === totalImagesCount) {
                  resolve(null);
                }
              } else {
                reject(new Error("Image must be 1200 X 1200px or less"));
                setIsError(true);
                setAlerts((prevAlerts) => [...prevAlerts, sizeError]);
              }
            };
          } else {
            reject(new Error("Image must be a WEBP file"));
            setIsError(true);
            setAlerts((prevAlerts) => [...prevAlerts, typeError]);
          }
        });
      })
        .then(() => {
          if (uploadedImages.length !== 0) {
            setUploadedImages((prevImages) =>
              [...prevImages, ...acceptedImages].reverse()
            );
          } else {
            setUploadedImages(acceptedImages.reverse());
          }
        })
        .catch((error) => console.error(error));
    }
    e.target.value = "";
  }

  useEffect(() => {
    if (alerts.length > 0) {
      const timer = setTimeout(() => {
        setAlerts([]);
        setIsError(false);
      }, 3000);

      // Clear the timer when the component unmounts or when alerts change
      return () => clearTimeout(timer);
    }
  }, [alerts]);

  const handleRemove = (imageName: string) => {
    setUploadedImages((prevImages) => {
      return prevImages.filter((image) => image.name !== imageName);
    });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    let imageDataToSubmit: ImageData[] = [];
    for (let image of uploadedImages) {
      const data = {
        imageFile: image,
        imageName: image.name,
        mainCategory: (
          form.elements.namedItem(
            `${image.name}_${OptionsType.MAIN_CATEGORY}`
          ) as HTMLSelectElement
        ).value,
        section: (
          form.elements.namedItem(
            `${image.name}_${OptionsType.SECTION}`
          ) as HTMLSelectElement
        ).value,
        subSection: (
          form.elements.namedItem(
            `${image.name}_${OptionsType.SUB_SECTION}`
          ) as HTMLSelectElement
        ).value,
        subCategory: (
          form.elements.namedItem(
            `${image.name}_${OptionsType.SUB_CATEGORY}`
          ) as HTMLSelectElement
        ).value,
      };
      imageDataToSubmit.push(data);
    }
    setSubmittedImages(imageDataToSubmit);
    const uploadImages = await fetch("/api/upload-images", {
      method: "POST",
      body: JSON.stringify(submittedImages),
    });
    console.log("submittedImages", submittedImages);
  };

  return (
    <>
      <div className="text-center my-3 text-4xl font-black">
        Admin Dashboard
        <h1>{`welcome ${session?.user?.email?.split("@")[0]}`}</h1>
      </div>

      <form onSubmit={onSubmit} encType="multipart/form-data">
        <div
          id="FileUpload"
          className="relative mb-5.5 block w-1/2 mx-auto max-w-[1200px] cursor-pointer appearance-none rounded border-2 border-dashed border-primary bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5"
        >
          <input
            type="file"
            accept="image/webp"
            onChange={handleImageUpload}
            className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
            multiple
          />
          <div className="flex flex-col items-center justify-center space-y-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.99967 9.33337C2.36786 9.33337 2.66634 9.63185 2.66634 10V12.6667C2.66634 12.8435 2.73658 13.0131 2.8616 13.1381C2.98663 13.2631 3.1562 13.3334 3.33301 13.3334H12.6663C12.8431 13.3334 13.0127 13.2631 13.1377 13.1381C13.2628 13.0131 13.333 12.8435 13.333 12.6667V10C13.333 9.63185 13.6315 9.33337 13.9997 9.33337C14.3679 9.33337 14.6663 9.63185 14.6663 10V12.6667C14.6663 13.1971 14.4556 13.7058 14.0806 14.0809C13.7055 14.456 13.1968 14.6667 12.6663 14.6667H3.33301C2.80257 14.6667 2.29387 14.456 1.91879 14.0809C1.54372 13.7058 1.33301 13.1971 1.33301 12.6667V10C1.33301 9.63185 1.63148 9.33337 1.99967 9.33337Z"
                  fill="#3C50E0"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.5286 1.52864C7.78894 1.26829 8.21106 1.26829 8.4714 1.52864L11.8047 4.86197C12.0651 5.12232 12.0651 5.54443 11.8047 5.80478C11.5444 6.06513 11.1223 6.06513 10.8619 5.80478L8 2.94285L5.13807 5.80478C4.87772 6.06513 4.45561 6.06513 4.19526 5.80478C3.93491 5.54443 3.93491 5.12232 4.19526 4.86197L7.5286 1.52864Z"
                  fill="#3C50E0"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.99967 1.33337C8.36786 1.33337 8.66634 1.63185 8.66634 2.00004V10C8.66634 10.3682 8.36786 10.6667 7.99967 10.6667C7.63148 10.6667 7.33301 10.3682 7.33301 10V2.00004C7.33301 1.63185 7.63148 1.33337 7.99967 1.33337Z"
                  fill="#3C50E0"
                />
              </svg>
            </span>
            <p>
              <span className="text-primary">Click to upload</span> or drag and
              drop
            </p>
            <p className="mt-1.5">WEBP Only</p>
            <p>
              (max, {maxHeight} X {maxWidth}px)
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-4.5">
          <button
            className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
            type="submit"
          >
            Cancel
          </button>
          <button
            className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-95"
            type="submit"
          >
            Upload
          </button>
        </div>
        <div className="mt-12">
          {/* <h2 className="text-3xl pb-6">Recently Uploaded</h2> */}
          <h2 className="text-3xl pb-6">
            Images to upload {`(${uploadedImages.length})`}
          </h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3">
            {!isError &&
              uploadedImages.map((image, index) => (
                <UploadedImage
                  key={image.name}
                  name={image.name}
                  imageUrl={URL.createObjectURL(image)}
                  handleRemove={handleRemove}
                />
              ))}
          </div>
          {uploadedImages.length === 0 && (
            <h4 className="text-center mt-12">
              Uploaded images will appear here
            </h4>
          )}
        </div>
      </form>
      {isError && (
        <>
          <ErrorAlert key={Math.floor(Math.random() * 100)} alerts={alerts} />
        </>
      )}
    </>
  );
};

export default AdminPage;
