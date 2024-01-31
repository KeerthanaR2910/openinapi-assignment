import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'

export type FileInputProps = { file: File | null; onDrop: (file: File | null) => void }

const FileInput = ({ file, onDrop: onFileDrop }: FileInputProps) => {
    const onDrop = (files: File[]) => {
        onFileDrop(files ? files[0] : null)
    }

    const removeFile = () => {
        onFileDrop(null)
    }

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <div className="max-w-md mx-auto p-4 border border-dashed rounded-lg">
            <div {...getRootProps()} className={`cursor-pointer ${isDragActive ? 'bg-gray-200' : ''}`}>
                <input {...getInputProps()} />
                {file === null && <p className="text-center text-black">Drag & drop files here, or click to browse</p>}
            </div>
            {file && (
                <div className="mt-4">
                    <div className="flex items-center justify-between bg-gray-100 p-2 rounded mt-2">
                        <span className="text-black">{file?.name}</span>
                        <button className="text-black" onClick={() => removeFile()}>
                            Remove
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default FileInput
