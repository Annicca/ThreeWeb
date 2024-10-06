import { FC } from "preact/compat"
import { TypeLink } from "../../types/TypeLink"

interface LinkItemProps {
    item: TypeLink,
    className?: string
}

export const LinkItem: FC<LinkItemProps> = ({item, className}) => {
    return(
        <a key = {item.title} href = {item.link} className={className}>
            {item.title}
        </a>
    )
}    