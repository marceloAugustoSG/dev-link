import type { ReactNode } from "react"

interface SocialProps {
    icon: ReactNode
    url: string


}

export function Social({ url, icon }: SocialProps) {
    return (
        <a href={url}
            rel="noopener noreferrer">
            {icon}
        </a>
    )
}