import { FC } from "preact/compat"
import { Link } from "react-router-dom"
import { TImageLink } from "../../types/TImageLink"

interface ImageLinkItemProps {
    img: TImageLink,
    className?: string
}
export const ImageLinkItem: FC<ImageLinkItemProps> = ({img, className}) => {
    return (
        <Link to = {img.link} className={className}>
            {img.icon}
        </Link> 
    )
}