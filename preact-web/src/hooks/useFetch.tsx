import { useSignal } from "@preact/signals"
import { useEffect } from "preact/hooks"

export const useFetch = (url: string) => {
    const data = useSignal([])

    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((current) => {
          data.value = current
        })
    },[])

    return data.value
}