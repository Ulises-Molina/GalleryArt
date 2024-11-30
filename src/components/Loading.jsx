import { CircularProgress } from "@mui/material"

export const Loading = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen w-screen">
            <CircularProgress size="50px"/>
            <p>Loading...</p>
        </div>
    )
}
