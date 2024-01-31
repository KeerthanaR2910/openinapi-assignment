import Excel from '@/icons/Excel'
import FileInput from '@/components/FileInput'
import React, { useState } from 'react'
import UploadIcon from '@/icons/UploadIcon'
import { twMerge } from 'tailwind-merge'
import { UploadButtonState } from '@/components/UploadWrapper'
import Loading from '@/icons/Loading'

type UploadContainerProps = {
    uploadFile: (file: File | null) => void
    removeFile: () => void
    uploadButtonState: UploadButtonState
}
const UploadContainer = ({ uploadFile, uploadButtonState, removeFile }: UploadContainerProps) => {
    const [file, setFile] = useState<File | null>(null)

    return (
        <div className="w-full bg-white h-96 rounded-xl p-4 lg:w-[40%] md:w-[70%] items-center flex flex-col gap-y-4">
            <div className="border-dashed flex-grow w-full border-2 border-neutral-400 rounded-xl flex flex-col justify-center items-center gap-y-4">
                <Excel />
                <FileInput file={file} onDrop={setFile} removeFile={removeFile} />
            </div>
            <button
                className={twMerge(
                    'w-full h-12 rounded-md bg-purple ',
                    uploadButtonState === 'disabled' ? ' opacity-40 ' : 'cursor-pointer'
                )}
                onClick={() => uploadFile(file)}
                disabled={uploadButtonState !== 'initial' || file === null}
            >
                {uploadButtonState == 'loading' ? (
                    <Loading />
                ) : (
                    <div className="flex justify-center gap-x-2 items-center">
                        <UploadIcon />
                        <span className="text-white">Upload</span>
                    </div>
                )}
            </button>
        </div>
    )
}

export default UploadContainer
