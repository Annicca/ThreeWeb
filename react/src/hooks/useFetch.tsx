import { useEffect, useState } from "react"

export const useFetch = (url: string) => {
    const [data, setData] = useState()

    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data))
    },[])

    return data
}