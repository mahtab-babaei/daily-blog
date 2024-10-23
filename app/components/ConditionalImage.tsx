import Image from "next/image";
import noImage from "@/public/images/main/404.png";

interface Props {
  src: string | null;
  alt: string;
  className?: string;
}
const ConditionalImage = ({ src, alt, className }: Props) => {
  return src ? (
    <img
      src={src}
      alt={alt}
      className={className}
      style={{ maxWidth: "100%", height: "auto" }}
    />
  ) : (
    <Image priority src={noImage} alt={alt} className={className} />
  );
};

export default ConditionalImage;
