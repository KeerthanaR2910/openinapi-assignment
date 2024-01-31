import React, {useEffect, useState} from "react";
import UploadContainer from "./UploadContainer";
import UploadedContent from "./UploadedContent";
import Papa from "papaparse";
import { Row } from "./TableRow";

export type UploadButtonState = "initial" | "loading" | "disabled"

const UploadWrapper = () => {
    const [file, setFile] = useState<File | null>(null)
    const [uploadButtonState, setUploadButtonState] = useState<UploadButtonState>("initial");
    const [parsedData, setParsedData] = useState<Row[]>([]);

    const parseCSVFile = (file:File) => {
        if(file){
            Papa.parse<Row>(file, {
                header: true,
                skipEmptyLines: true,
                complete: function (results:any) {
                    console.log(results.data)
                    setParsedData(results.data);
                },
            });
        }else{
            setParsedData([])
        }
    };

    useEffect(() => {
        if (file) {
            parseCSVFile(file)
            setUploadButtonState("disabled")
        } else {
            setUploadButtonState("initial")
        }
    }, [file])
    return (
        <div className="pt-6 flex justify-center flex-col items-center">
            <UploadContainer uploadFile={(file: File | null) => {
                setUploadButtonState("loading");
                setFile(file)
            }} removeFile={() => {
                setParsedData([])
                setUploadButtonState("initial")
                setFile(null)
            }} uploadButtonState={uploadButtonState}/>
            <UploadedContent data={parsedData}/>
        </div>)
}
export default UploadWrapper;