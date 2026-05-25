'use client'

import React from 'react'
import ExpandableBentoGrid from "@/components/ui/expandable-bento-grid"
import { Layout } from 'lucide-react'
import { FaGithub, FaSlack, FaTwitter } from 'react-icons/fa'

const items = [
    {
        id: 1,
        title: "Repository",
        subtitle: "Version Control",
        description: "Secure, scalable, and collaborative code management for modern teams.",
        icon: <FaGithub className="w-6 h-6" />,
        content: (
            <div className="space-y-4">
                <p>Collaborate on code with your team in a secure environment.</p>
                <div className="h-40 bg-zinc-100 dark:bg-zinc-800 rounded-lg w-full flex items-center justify-center text-zinc-400">
                    Repo Visualization
                </div>
            </div>
        )
    },
    {
        id: 2,
        title: "Connect",
        subtitle: "Team Communication",
        description: "Real-time messaging, file sharing, and powerful search for instant collaboration.",
        icon: <FaSlack className="w-6 h-6" />,
        content: (
            <div className="space-y-4">
                <p>Stay connected with your team wherever you are.</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Instant messaging</li>
                    <li>File sharing</li>
                    <li>Video calls</li>
                </ul>
            </div>
        )
    },
    {
        id: 3,
        title: "Reach",
        subtitle: "Audience Engagement",
        description: "Amplify your voice and connect with your community globally in real-time.",
        icon: <FaTwitter className="w-6 h-6" />,
        content: (
            <div className="space-y-4">
                <p>Engage with your audience on social media platforms.</p>
                <div className="grid grid-cols-2 gap-4">
                    <div className="h-20 bg-blue-100 rounded-md"></div>
                    <div className="h-20 bg-blue-100 rounded-md"></div>
                </div>
            </div>
        )
    },
    {
        id: 4,
        title: "Analytics",
        subtitle: "Data Insights",
        description: "Understand your users with powerful analytics tools.",
        icon: <Layout className="w-6 h-6" />,
        content: (
            <div className="space-y-4">
                <p>Track user behavior and optimize your application.</p>
            </div>
        )
    },
];


export function ExpandableBentoGridDemo() {
    return (
        <div className="w-full h-full h-full flex items-center justify-center p-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-black/[0.1] dark:bg-grid-white/[0.1] -z-10" />
            <ExpandableBentoGrid items={items} />
        </div>
    )
}
