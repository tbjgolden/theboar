import cn from 'classnames'
import Link from 'next/link'

export default function CoverImage({ title, coverImage, slug, aspectRatio }) {
  aspectRatio = aspectRatio ?? null

  const image = (
    <img
      src={coverImage?.sourceUrl}
      className={cn('shadow-small inline-block', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
      style={aspectRatio === null ? {} : {
        position: 'absolute',
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }}
    />
  )
  return (
    <div className="sm:mx-0 text-center" style={aspectRatio === null ? {} : {
      position: "relative",
      padding: `${(1 / aspectRatio) * 100}% 0 0`
    }}>
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
