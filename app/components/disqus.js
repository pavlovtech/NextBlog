"use client";
import React, { useState } from 'react'

export const Disqus = ({ slug }) => {
  const [enableLoadComments, setEnabledLoadComments] = useState(true)

  function LoadComments() {
    setEnabledLoadComments(false)

    window.disqus_config = function () {
      this.page.url = window.location.href
      this.page.identifier = slug
    }
    if (window.DISQUS === undefined) {
      const script = document.createElement('script')
      script.src = 'https://alex-pavlov.disqus.com/embed.js'
      script.setAttribute('data-timestamp', +new Date())
      script.setAttribute('crossorigin', 'anonymous')
      script.async = true
      document.body.appendChild(script)
    } else {
      window.DISQUS.reset({ reload: true })
    }
  }

  return (
    <div className="pt-6 pb-6 text-center text-gray-700 dark:text-gray-300">
      {enableLoadComments && <button onClick={LoadComments}>Load Comments</button>}
      <div id="disqus_thread"></div>
    </div>
  )
}