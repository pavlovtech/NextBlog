import { RoughNotation } from 'react-rough-notation'

export default function RoughNotationText({ text }: { text: string }) {
  return (
    <RoughNotation
      animate={true}
      type="box"
      show={true}
      color="#DE1D8D"
      animationDelay={1000}
      animationDuration={2500}
    >
      {text}
    </RoughNotation>
  )
}
