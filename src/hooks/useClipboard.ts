import { useState } from 'react';
import { track } from '@vercel/analytics';

type EventName = 'block_copy' | 'block_cli_copy' | 'snippet_copy' | 'block_registry_copy';

interface BlockProps {
    title?: string;
    category?: string;
    code: string;
    eventName: EventName;
}

export const useCopyToClipboard = (block:BlockProps) => {

    const { title, category, code, eventName } = block;

    const [copied, setCopied] = useState(false);

    const copy = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        navigator.clipboard.writeText(code);
        setCopied(true);

        track(eventName, {
            block_title: title,
            block_category: category,
        })
        setTimeout(() => {
            setCopied(false);
        }, 1500);
    };

    return { copied, copy };
};
