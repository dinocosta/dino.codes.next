'use client'

// Highlight.js setup - this sets up the syntax highlighting for code blocks in the blogposts.
// It is only importing configs for Python and Elixir as those are the only two languages
// present in the blogposts for now. Add other languages as needed.
import hljs from 'highlight.js/lib/core'
import python from 'highlight.js/lib/languages/python'
import elixir from 'highlight.js/lib/languages/elixir'
import 'highlight.js/styles/base16/grayscale-light.css'
hljs.registerLanguage('python', python)
hljs.registerLanguage('elixir', elixir)

import { useEffect } from 'react'

export default function CodeHighlighter() {
  useEffect(() => {
    hljs.initHighlighting()
  }, [])

  return <span></span>
}
