import React from 'react'
import { useParams } from "react-router-dom";

const LearnDetails = () => {
    const { learn } = useParams();

    return (
        <>
        <h1>{learn}</h1>
        </>
    )
}

export default LearnDetails