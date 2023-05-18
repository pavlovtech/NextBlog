"use client";

import React, { useState, useEffect, useCallback } from 'react'
import { useTheme } from 'next-themes'

const giscusConfig = {
  // Visit the link below, and follow the steps in the 'configuration' section
  // https://giscus.app/
  repo: 'pavlovtech/NextBlog',
  repositoryId: 'R_kgDOJhljgQ',
  category: 'General',
  categoryId: "DIC_kwDOJhljgc4CWlXX",
  mapping: 'pathname', // supported options: pathname, url, title
  reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
  // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
  metadata: '0',
  // theme example: light, dark, dark_dimmed, dark_high_contrast
  // transparent_dark, preferred_color_scheme, custom
  theme: 'dark',
  // Place the comment box above the comments. options: bottom, top
  inputPosition: 'bottom',
  // Choose the language giscus will be displayed in. options: en, es, zh-CN, zh-TW, ko, ja etc
  lang: 'en',
  // theme when dark mode
  darkTheme: 'transparent_dark',
  // If the theme option above is set to 'custom`
  // please provide a link below to your custom theme css file.
  // example: https://giscus.app/themes/custom_example.css
  themeURL: '',
};

export const Giscus = () => {
  const [enableLoadComments, setEnabledLoadComments] = useState(true)
  const { theme, resolvedTheme } = useTheme()
  const commentsTheme = 'dark';

  const COMMENTS_ID = 'comments-container'

  useEffect(() => {
    setEnabledLoadComments(false)

    const {
      repo,
      repositoryId,
      category,
      categoryId,
      mapping,
      reactions,
      metadata,
      inputPosition,
      lang,
    } = giscusConfig;

    const script = document.createElement('script')
    script.src = 'https://giscus.app/client.js'
    script.setAttribute('data-repo', repo!)
    script.setAttribute('data-repo-id', repositoryId!)
    script.setAttribute('data-category', category!)
    script.setAttribute('data-category-id', categoryId!)
    script.setAttribute('data-mapping', mapping)
    script.setAttribute('data-reactions-enabled', reactions)
    script.setAttribute('data-emit-metadata', metadata)
    script.setAttribute('data-input-position', inputPosition)
    script.setAttribute('data-lang', lang)
    script.setAttribute('data-theme', commentsTheme!)
    script.setAttribute('crossorigin', 'anonymous')
    script.async = true

    const comments = document.getElementById(COMMENTS_ID)
    if (comments) comments.appendChild(script)

    return () => {
      const comments = document.getElementById(COMMENTS_ID)
      if (comments) comments.innerHTML = ''
    }
  }, [])

  return (
    <div className="pt-6 pb-6 text-center text-gray-700 dark:text-gray-300">
      <div className="giscus" id={COMMENTS_ID} />
    </div>
  )
}