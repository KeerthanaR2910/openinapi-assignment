import TableRow, { Row } from './TableRow'

const rows = {
    id: 'SI No.',
    links: 'Links',
    prefix: 'Prefix',
    'select tags': 'Add Tags',
    'selected tags': 'Selected tags',
}

const UploadedContent = ({ data }: { data: Row[] }) => {
    if (data.length === 0) {
        return null
    }
    return (
        <div className="w-full p-5 lg:p-25 flex flex-col gap-y-6 ">
            {/* Figtree */}
            <span className=" text-2xl font-semibold text-black">Uploads</span>
            <div className=" bg-darker-gray p-4 pt-0 pb-0 rounded-2xl overflow-auto">
                <table className="w-screen lg:w-full table-auto border-separate border-spacing-y-4">
                    <thead className="text-left">
                        <tr>
                            {Object.values(rows).map((rows, index) => {
                                return (
                                    <th key={index} className="text-black p-4 min-w-fit">
                                        {rows}
                                    </th>
                                )
                            })}
                        </tr>
                    </thead>
                    <tbody className="m-2 bg-darker-gray">
                        {data.map((value, index) => {
                            return <TableRow key={index} value={value} />
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
    //
    //'darker-gray':'#F5F5F5',
}

export default UploadedContent
