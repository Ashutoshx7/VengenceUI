"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface PropDef {
    prop: string
    type: string
    defaultValue?: string
    description: string
}

interface PropsTableProps {
    data: PropDef[]
    title?: string
    className?: string
}

export function PropsTable({ data, title, className }: PropsTableProps) {
    return (
        <div className={cn("my-6 flex flex-col space-y-4", className)}>
            {title && (
                <h4 className="font-heading text-lg font-bold tracking-tight mt-6 mb-2">{title}</h4>
            )}
            <div className="relative w-full overflow-hidden rounded-xl !border-[1px] !border-neutral-200 dark:!border-neutral-700 bg-neutral-100 dark:bg-[#121212]">
                <table className="w-full text-left text-sm">
                    <thead className="bg-white dark:bg-black">
                        <tr className="!border-b-[1px] !border-neutral-200 dark:!border-neutral-700">
                            <th className="h-10 px-4 text-left align-middle font-medium text-foreground whitespace-nowrap w-[150px] !border-r-[1px] !border-neutral-200 dark:!border-neutral-700 last:border-0">Prop Name</th>
                            <th className="h-10 px-4 text-left align-middle font-medium text-foreground whitespace-nowrap w-[150px] !border-r-[1px] !border-neutral-200 dark:!border-neutral-700 last:border-0">Type</th>
                            <th className="h-10 px-4 text-left align-middle font-medium text-foreground whitespace-nowrap w-[150px] !border-r-[1px] !border-neutral-200 dark:!border-neutral-700 last:border-0">Default</th>
                            <th className="h-10 px-4 text-left align-middle font-medium text-foreground whitespace-nowrap">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index} className="transition-colors hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50 odd:bg-white dark:odd:bg-black even:bg-neutral-50 dark:even:bg-[#121212] !border-b-[1px] !border-neutral-200 dark:!border-neutral-700 last:!border-b-0">
                                <td className="p-4 align-middle font-mono text-xs font-semibold whitespace-nowrap text-primary !border-r-[1px] !border-neutral-200 dark:!border-neutral-700 last:border-0">
                                    {item.prop}
                                </td>
                                <td className="p-4 align-middle !border-r-[1px] !border-neutral-200 dark:!border-neutral-700 last:border-0">
                                    <code className="relative rounded-md bg-neutral-100 dark:bg-neutral-900 px-[0.5rem] py-[0.2rem] font-mono text-xs text-muted-foreground border border-neutral-200 dark:border-neutral-700 whitespace-nowrap">
                                        {item.type}
                                    </code>
                                </td>
                                <td className="p-4 align-middle !border-r-[1px] !border-neutral-200 dark:!border-neutral-700 last:border-0">
                                    {item.defaultValue ? (
                                        <code className="relative rounded-md bg-neutral-100 dark:bg-neutral-900 px-[0.5rem] py-[0.2rem] font-mono text-xs text-muted-foreground border border-neutral-200 dark:border-neutral-700 whitespace-nowrap">
                                            {item.defaultValue}
                                        </code>
                                    ) : (
                                        <span className="text-muted-foreground text-xs">-</span>
                                    )}
                                </td>
                                <td className="p-4 align-middle text-muted-foreground text-sm leading-relaxed">
                                    {item.description}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
