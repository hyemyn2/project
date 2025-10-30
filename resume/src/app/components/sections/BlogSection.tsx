import React from 'react'

interface IBlogSectionProps {
  id: string
}

function BlogSection({id}: IBlogSectionProps) {
  return (
    <div
      id={id}
      className="w-full mt-80"
    >
      <span className="text-zinc-500 text-4xl font-bold inline-block mb-10">BLOG</span>
    <div>
      {/* blog */}
    </div>
  </div>
  )
}

export default BlogSection