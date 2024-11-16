import { CircularProgress } from "@mui/material"

export const Loading = () => {
    return (
        <div className="flex justify-center items-center h-screen w-screen">
            <CircularProgress size="50px"/>
        </div>
    )
}
