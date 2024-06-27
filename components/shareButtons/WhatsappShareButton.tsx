import Link from "next/link";
import Image from "next/image";
import WhatsappButton from "@/assets/WhatsAppButtonGreenLarge.svg";
import { Divider } from "@mui/material";

type WhatsappShareButtonProps = {
  categories: {
    id: string;
    mainCategory: string;
    section: string;
    subSection: string;
    subCategories: string;
  };
  isMobile?: boolean;
};

const BASE_URL = "https://masteradv.vip/";

export default function WhatsappShareButton({
  isMobile,
  categories: { mainCategory, section, subSection, subCategories, id },
}: WhatsappShareButtonProps) {
  return isMobile ? (
    <>
      <Divider
        variant="middle"
        sx={{
          color: "#BD9B53",
          opacity: 1,
          "&.MuiDivider-root": {
            "&:before, &:after": {
              borderTop: "thin solid #BD9B53",
            },
          },
        }}
        className={`${isMobile ? "order-1" : "order-3"} `}
      >
        Contact us
      </Divider>
      <div
        className={`flex justify-center py-4 ${
          isMobile ? "order-1 items-end" : "order-4"
        }`}
      >
        <Link
          href={`https://wa.me/972526453088?text=${BASE_URL}/dashboard/${mainCategory}/${section}/${subSection}/${subCategories}/project/${id}`}
          target="_blank"
        >
          <Image
            src={WhatsappButton}
            alt="Whatsapp share button"
            width={isMobile ? 250 : 320}
          />
        </Link>
      </div>
      <Divider
        component={"div"}
        className={`${isMobile ? "order-1 pb-5" : "order-4"}`}
        variant="middle"
        sx={{ borderTop: "thin solid #BD9B53", marginTop: "12px" }}
      />
    </>
  ) : (
    <>
      <Divider
        variant="middle"
        sx={{
          color: "#BD9B53",
          opacity: 1,
          "&.MuiDivider-root": {
            "&:before, &:after": {
              borderTop: "thin solid #BD9B53",
            },
          },
        }}
      >
        Contact us
      </Divider>
      <div className={`flex justify-center py-4 `}>
        <Link
          href={`https://wa.me/972526453088?text=${BASE_URL}${mainCategory}/${section}/${subSection}/${subCategories}/project/${id}`}
          target="_blank"
        >
          <Image src={WhatsappButton} alt="Whatsapp share button" width={350} />
        </Link>
      </div>
      <Divider
        component={"div"}
        variant="middle"
        sx={{ borderTop: "thin solid #BD9B53", marginTop: "12px" }}
      />
    </>
  );
}
