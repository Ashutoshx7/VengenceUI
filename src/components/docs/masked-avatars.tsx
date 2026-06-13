"use client";

import { MaskedAvatars } from "@/components/ui/masked-avatars";

export function MaskedAvatarsDemo() {
    const avatars = [
        { avatar: "/Avatar11.jpg", name: "Tyler" },
        { avatar: "/Avatar6.jpg", name: "Dora" },
        { avatar: "/186330c41b3d12d96bdaa03e0c0db30d.jpg", name: "Johan" },
        { avatar: "/f318d62afa39731a0a371388d400a773.jpg", name: "Vegeta" },
        { avatar: "/Avatar4.svg", name: "Robin" },
    ];

    return (
        <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden bg-white dark:bg-black rounded-lg border border-neutral-200 dark:border-neutral-800">
            <MaskedAvatars avatars={avatars} />
        </div>
    );
}
