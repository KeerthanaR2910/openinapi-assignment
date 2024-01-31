import React from 'react';
import {useDropzone} from 'react-dropzone';
import {twMerge} from "tailwind-merge";

export type FileInputProps = {
    file: File | null,
    removeFile: () => void,
    onDrop: (file: File | null) => void
}

const FileInput = ({file,removeFile, onDrop: onFileDrop}: FileInputProps) => {
    const onDrop = (files: File[] | null) => {
        onFileDrop(files ? files[0] : null)
    }

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

    return (
        <div className="w-full flex flex-col items-center">
            <div {...getRootProps()}
                 className={twMerge("font-normal text-base cursor-pointer", isDragActive && 'bg-gray-200')}>
                <input {...getInputProps()} accept=".csv"/>
                {file === null &&
                    <div className="font-normal text-base cursor-pointer">
                        <span className=" text-light-gray">Drag your excel sheet here or </span>
                        <span className=" text-purple">browse</span>
                    </div>
                }
            </div>
            {file && <div className="flex flex-col justify-center items-center gap-y-4">
                <p className=" text-light-gray text-base">{file?.name}</p>
                <p onClick={() => {
                    console.log("jhsdhjbcdhbj")
                    onDrop(null);
                    removeFile()
                }} className="cursor-pointer text-sm text-red">Remove</p>
            </div>
            }

        </div>
    );
};

export default FileInput;