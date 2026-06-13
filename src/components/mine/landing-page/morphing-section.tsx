import { MoriphingDisclosure } from "@/components/ui/morphing-disclosure"
import { UndoIcon } from "lucide-react"




const morphingData = [
    {
        title: 'What is design enginnering ?',
        description: "A curated collection of beautifully crafted React components.",
        icon : <UndoIcon size={16}/>
    },
    {
        title: 'it is responsive',
        description: "A curated collection of beautifully crafted React components."
    },
    {
        title: 'UI',
        description: "A curated collection of beautifully crafted React components."
    },
    {
        title: 'What is design enginnering ?',
        description: "A curated collection of beautifully crafted React components."
    },

]

export const MoriphingSection = () => {
    return (
        <div className="w-full h-full m-auto">

            {
                morphingData.map((el, id) => {
                    return (
                       
                            <MoriphingDisclosure title={el.title} description={el.description} icon={el.icon} key={id} id={id} />
                        
                    )
                })
            }



          


        </div>
    )
}