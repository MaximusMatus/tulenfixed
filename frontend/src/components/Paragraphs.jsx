import { useEffect, useState } from "react"

function Paragraphs({ rawText }) {
  const paragraphArr = rawText.split("/")

  return (
    <>
      <div>
        {paragraphArr.map((par, i) => (
          <p className="paragraph" key={i}>
            {par}
          </p>
        ))}
      </div>
    </>
  )
}

export default Paragraphs
