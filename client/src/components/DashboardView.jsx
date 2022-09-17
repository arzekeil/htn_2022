import { useState, useEffect } from "react";
import axios from "axios";

import BasicCard from "./BasicCard";
import LoadingComponent from "./LoadingComponent"

export default function DashboardView() {
    const [data, setData] = useState([{ "title": "Document", "authors": "John Doe", "recent_editors": "Jane Doe" }]);

    useEffect(() => {
        // axios({
        //     method: 'get',
        //     url: ''
        //   })
        //     .then(function (res) {
        //         setData(res.data);
        //     });
    }, []);

    if (data.length === 0) return <LoadingComponent />;
    return (
        <>
            {data.map((data_point) => {
                return (
                    <BasicCard
                        key={data_point["title"]}
                        id={id}
                        title={data_point["title"]}
                        authors={data_point["authors"]}
                        recent_editors={data_point["recent_editors"]}
                    />
                );
            })}
        </>
    );
}
