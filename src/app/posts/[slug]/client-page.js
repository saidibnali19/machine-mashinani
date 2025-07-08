"use client"
import { useTina } from "tinacms/dist/react";

export default function Post(props) {
    const data = useTina({
        query: props.query,
        variables: props.variables,
        data: props.data
    })

    return (
        <>
            <code>
                <pre style={{ backgroundColor: "lightgray" }}>
                    {JSON.stringify(data.post, null, 2)}
                </pre>
            </code>
        </>
    )
}