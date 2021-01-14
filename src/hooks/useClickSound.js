import useSound from "use-sound"

const soundBytes = {
  clickPop: 'click-pop.mp3',
  bloop: 'clink.mp3'
}
const useClickSound = (type = 'click') => {
  const sound = soundBytes[type]
  const [play, {stop}]  = useSound(sound)
  return [play, stop]
}

export default useClickSound
