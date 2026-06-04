import Typewriter from 'typewriter-effect'

export default function TypewriterText({ path }: { path: string }) {
  return (
    <Typewriter
      options={{
        strings: [`~${path} `],
        autoStart: true,
        loop: false,
        deleteSpeed: 100000,
        delay: 0,
      }}
    />
  )
}
