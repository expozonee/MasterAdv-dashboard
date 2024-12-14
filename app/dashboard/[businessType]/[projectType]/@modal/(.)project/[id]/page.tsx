"use client";
import Image from "next/image";
import Sheet from "@mui/joy/Sheet";
import { useCallback, useEffect, useState } from "react";
import ModalClose from "@mui/joy/ModalClose";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import WhatsappShareButton from "@/components/shareButtons/WhatsappShareButton";
import { useQuery } from "@tanstack/react-query";
import getProjects from "@/utils/getProjects";
import { Project } from "@/types/project/Project";
import { SpinnerLoader } from "@/components/Loaders/SpinnerLoader";

type ProjectModalProps = {
  params: {
    businessType: string;
    projectType: string;
    id: string;
  };
};

export default function ProjectModal({ params }: ProjectModalProps) {
  const router = useRouter();
  const pathname = usePathname();
  pathname.split("/");

  const [desiredHeight, setDesiredHeight] = useState<string>("");
  const [desiredWidth, setDesiredWidth] = useState<string>("");
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>("");

  const [, , ...restPath] = pathname.split("/");
  const [businessType, projectType, id] = restPath;

  const { isError, isLoading, data } = useQuery({
    queryKey: ["project", id],
    queryFn: getProjects,
    enabled: !!params.id, // only fetch when id is available
  });

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick = useCallback(() => {
    if (onDismiss) onDismiss();
  }, [onDismiss]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onDismiss();
    },
    [onDismiss]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  useEffect(() => {
    if (data) {
      const imageUrl = (data as Project[]).find(
        (item) => item.projectId === params.id
      )?.imageUrl;

      setImageUrl(imageUrl!);
    }
  }, [id, isLoading, isError, params.id, data]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1180) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      if (isMobile) {
        setDesiredWidth("85%");
      } else {
        const boxSize = String(windowWidth * 0.85 * 0.6) + "px";
        setDesiredHeight(boxSize);
        setDesiredWidth(boxSize);
      }
    }

    // Set initial width
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  return (
    <Modal
      disableEscapeKeyDown={false}
      open={true}
      aria-labelledby="image-modal"
      sx={{
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 99999,
      }}
      onClose={onClick}
    >
      <Fade in={true}>
        <Sheet
          variant="plain"
          sx={{
            width: `85%`,
            maxWidth: "1600px",
            height: `${isMobile ? "min-content" : "auto"}`,
            borderRadius: "md",
            boxShadow: "lg",
            backgroundColor: "#02061D",
            outline: "none",
            ...(isMobile ? {} : { maxHeight: "960px" }),
          }}
        >
          <div
            className={`flex w-full h-full overflow-auto ${
              isMobile && "flex-col"
            }`}
          >
            <div
              className={`${
                isMobile ? `w-full aspect-square` : "w-3/5 h-full"
              }  m-0 p-0`}
            >
              {!isLoading && !isError && imageUrl ? (
                <Image
                  className={`${
                    isMobile ? "rounded-t-lg" : "rounded-r-md"
                  }  aspect-square`}
                  src={imageUrl}
                  alt={"alt"}
                  width={600}
                  height={600}
                  style={{
                    width: `${isMobile ? "100%" : "80vh"}`,
                    objectFit: "contain",
                  }}
                />
              ) : (
                <div
                  className={`aspect-square w-full flex justify-center items-center`}
                >
                  <SpinnerLoader />
                </div>
              )}
            </div>
            <div
              className={`${
                isMobile ? "w-full h-[200px] overflow-auto" : "w-2/5 h-full"
              } p-3 flex flex-col justify-start relative`}
            >
              <div className={`${isMobile ? "order-1" : "order-3"}`}>
                <WhatsappShareButton
                  categories={{
                    id: id,
                    projectType: projectType,
                    businessType: businessType,
                  }}
                  isMobile
                />
              </div>
            </div>
            <ModalClose
              variant="plain"
              sx={{
                m: 1,
                color: "white",
                position: "absolute",
                top: 0,
                right: 0,
              }}
              onClick={onClick}
            />
          </div>
        </Sheet>
      </Fade>
    </Modal>
  );
}
