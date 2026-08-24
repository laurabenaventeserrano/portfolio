import type { CSSProperties } from 'react'

interface FigureProps {
  src: string
  width: number
  height: number
  alt: string
  caption: string
  /** "Before" / "Proposed" / "From" / "To" label above the image. */
  tag?: string
  reveal?: boolean
  mask?: boolean
  drift?: boolean
  dataD?: string
  style?: CSSProperties
  imgStyle?: CSSProperties
  className?: string
}

export function Figure({
  src,
  width,
  height,
  alt,
  caption,
  tag,
  reveal = false,
  mask = false,
  drift = false,
  dataD,
  style,
  imgStyle,
  className,
}: FigureProps) {
  const classes = [className, reveal && 'rv', mask && 'rv--mask', drift && 'drift'].filter(Boolean).join(' ')
  return (
    <figure className={classes || undefined} style={style} data-d={dataD}>
      {tag && <p className="tag-d">{tag}</p>}
      <img className="figimg" src={src} width={width} height={height} loading="lazy" decoding="async" alt={alt} style={imgStyle} />
      <figcaption>{caption}</figcaption>
    </figure>
  )
}
