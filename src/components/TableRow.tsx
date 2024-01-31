import { useState } from "react"
import DropDown from "./DropDown"
import Tag from "./Tag"

export type Row = {
    "id": string,
    "links":string,
    'prefix': string,
    'select tags':string,
    'selected tags': string
}


const TableRow = ({value}:{value:Row}) => {
    const [selectedTags, setSelectedTags] = useState<string[]>(value['selected tags'].split(","))
    const [selectTags, setSelectTags] = useState<string[]>(value['select tags'].split(","))
    const onTagSelect = (tag: string) => {
        setSelectedTags([...selectedTags,tag]);
        setSelectTags(selectTags.filter((selectTag) => selectTag!==tag));
    }

    const removeSelectedTag = (tag: string) => {
        setSelectTags([...selectTags,tag]);
        setSelectedTags(selectedTags.filter((selectedTag) => selectedTag!==tag));
    }
    console.log(value)
    return (
        <tr className="bg-white">
            <td key="id" className="text-black p-4 border-l-solid text-sm min-w-[100px]">
                {value.id}
            </td>
            <td key="links" className="text-black p-4 border-l-solid text-sm min-w-fit">
                {value.links}
            </td>
            <td key="prefix" className="text-black p-4 border-l-solid text-sm min-w-fit">
                {value.prefix}
            </td>
            <td key="selectTags" className="text-black p-4 border-l-solid text-sm min-w-fit">
                <DropDown options={selectTags} onSelect={onTagSelect}/>
            </td>
            <td key="selectedTags" className="text-black p-4 border-l-solid text-sm ">
                <div className="flex gap-x-2 min-w-fit">
                    {selectedTags.map((selectedTag) => <Tag key={selectedTag} label={selectedTag} onClose={removeSelectedTag}/>)}
                </div>
            </td>
    </tr>
    )
} 

export default TableRow