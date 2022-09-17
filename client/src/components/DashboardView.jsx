import { useState, useEffect } from "react";
import axios from "axios";

import BasicCard from "./BasicCard";
import LoadingComponent from "./LoadingComponent"

export default function DashboardView() {
    const [data, setData] = useState([{"id": 0, "title": "Son Goku x Naruto", "authors": "John Doe", "recent_editors": "Jane Doe" }, {"id": 1, "title": "The great gatsby abridged", "authors": "Billy Bob", "recent_editors": "Queen Elizabeth ii" }]);

    useEffect(() => {
        // axios({
        //     method: 'get',
        //     url: ''
        //   })
        //     .then((res) => {
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
                        id={data_point["id"]}
                        title={data_point["title"]}
                        authors={data_point["authors"]}
                        recent_editors={data_point["recent_editors"]}
                    />
                );
            })}
        </>
    );
}
