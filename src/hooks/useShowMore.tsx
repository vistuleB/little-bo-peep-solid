import { createSignal, onMount } from 'solid-js'

const useShowMore = () => {
  const [showMore, setShowMore] = createSignal(false)

  onMount(()=>{
    setShowMore(true)
    // setTimeout(()=>{

    // }, 10)
  })
  return showMore
}

export default useShowMore