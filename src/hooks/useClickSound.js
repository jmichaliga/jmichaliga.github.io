import useSound from "use-sound"

const soundBytes = {
  click: `http://soundbible.com/mp3/Click On-SoundBible.com-1697535117.mp3`,
  bloop: `http://soundbible.com/mp3/Computer Error-SoundBible.com-399240903.mp3`
}
const useClickSound = (type = 'click') => {
  const sound = soundBytes[type]
  const [play, {stop}]  = useSound(sound)
  return [play, stop]
}

export default useClickSound
