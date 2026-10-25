import React, { useLayoutEffect, useMemo, useRef, useState } from 'react'
import {
  SiDocker,
  SiFastapi,
  SiFirebase,
  SiGit,
  SiGithub,
  SiKeras,
  SiLinux,
  SiMediapipe,
  SiNumpy,
  SiNvidia,
  SiOnnx,
  SiOpencv,
  SiPandas,
  SiPython,
  SiPytorch,
  SiScikitlearn,
  SiScipy,
  SiTensorflow,
  SiUltralytics,
} from '@icons-pack/react-simple-icons'
import {
  Aperture,
  Binary,
  Blend,
  Boxes,
  Brain,
  ChartColumn,
  ChartLine,
  Clock,
  CodeXml,
  Cpu,
  Database,
  Film,
  FlaskConical,
  Funnel,
  Gauge,
  GitFork,
  GitMerge,
  Globe,
  Grid2x2,
  Languages,
  Layers,
  List,
  Network,
  Orbit,
  Package,
  Puzzle,
  Repeat,
  Scale,
  ScanEye,
  Server,
  Shapes,
  SlidersHorizontal,
  Sparkles,
  Target,
  Terminal,
  TrendingUp,
  WavesHorizontal,
  Waypoints,
} from 'lucide-react'
import { floatingTechnologyLogos } from '../../config/skills.config'

type SkillIcon = React.ComponentType<{ 'aria-hidden'?: boolean; className?: string }>

/**
 * Single source of truth for every skill/technology icon.
 * Keys are referenced by `iconKey` in `src/config/skills.config.ts`.
 */
export const iconRegistry: Record<string, SkillIcon> = {
  // Brand icons (simple-icons)
  Python: SiPython,
  Numpy: SiNumpy,
  Pandas: SiPandas,
  Scikitlearn: SiScikitlearn,
  Pytorch: SiPytorch,
  Tensorflow: SiTensorflow,
  Keras: SiKeras,
  Opencv: SiOpencv,
  Ultralytics: SiUltralytics,
  Mediapipe: SiMediapipe,
  Fastapi: SiFastapi,
  Onnx: SiOnnx,
  Nvidia: SiNvidia,
  Scipy: SiScipy,
  Docker: SiDocker,
  Firebase: SiFirebase,
  Git: SiGit,
  Github: SiGithub,
  Linux: SiLinux,

  // Conceptual & tooling icons (lucide)
  Brain,
  CodeXml,
  Cpu,
  Network,
  Layers,
  Grid2x2,
  GitMerge,
  Waypoints,
  ScanEye,
  Aperture,
  Blend,
  WavesHorizontal,
  Boxes,
  Target,
  Shapes,
  TrendingUp,
  Puzzle,
  Funnel,
  Scale,
  Repeat,
  Gauge,
  GitFork,
  SlidersHorizontal,
  FlaskConical,
  Matplotlib: ChartLine,
  Seaborn: ChartColumn,
  Server,
  Package,
  Film,
  Clock,
  Binary,
  Terminal,
  Languages,
  Database,
  Globe,

  // View toggle icons
  List,
  Orbit,
}

/** Resolves an `iconKey` to its icon component, falling back to a neutral icon. */
export const resolveSkillIcon = (iconKey: string): SkillIcon => iconRegistry[iconKey] ?? Sparkles

/** Deterministic PRNG (mulberry32) so every icon keeps its own stable random swim path. */
const createRandom = (seed: string) => {
  let hash = 2166136261
  for (let i = 0; i < seed.length; i += 1) {
    hash ^= seed.charCodeAt(i)
    hash = Math.imul(hash, 16777619)
  }
  return () => {
    hash += 0x6d2b79f5
    let t = hash
    t = Math.imul(t ^ (t >>> 15), 1 | t)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/** Conservative inflation of the icon box: the glyph leans and scales up slightly while swimming. */
const GLYPH_FACTOR = 1.18

/** Breathing room kept between two swimming icons (and between an icon and the field edge). */
const ORBIT_MARGIN = 8

interface Point {
  x: number
  y: number
}

interface OrbitBounds {
  /** How far the icon centre may wander horizontally. */
  x: number
  /** How far the icon centre may wander vertically. */
  y: number
  /** Hard ceiling on the total displacement, so no pair of icons can ever close the gap. */
  cap: number
}

/**
 * Safe travelling room for every icon, measured from the real field size.
 * Two icons can only meet when `distance < radiusA + radiusB`, so halving the leftover distance
 * caps how far each centre may wander. Horizontal and vertical room are measured separately: in
 * the short `home` field an icon near the top or bottom edge still gets the full width to swim
 * across, instead of being pinned to a single spot.
 */
const computeOrbitBounds = (
  centers: Point[],
  glyphRadii: number[],
  width: number,
  height: number,
): OrbitBounds[] =>
  centers.map((center, index) => {
    const radius = glyphRadii[index]
    const edgeX = Math.min(center.x - radius - ORBIT_MARGIN, width - center.x - radius - ORBIT_MARGIN)
    const edgeY = Math.min(center.y - radius - ORBIT_MARGIN, height - center.y - radius - ORBIT_MARGIN)

    let cap = Math.hypot(width, height)
    for (let other = 0; other < centers.length; other += 1) {
      if (other === index) continue
      const distance = Math.hypot(center.x - centers[other].x, center.y - centers[other].y)
      cap = Math.min(cap, (distance - radius - glyphRadii[other] - ORBIT_MARGIN) / 2)
    }
    cap = Math.max(0, cap)

    return { x: Math.max(0, Math.min(edgeX, cap)), y: Math.max(0, Math.min(edgeY, cap)), cap }
  })

/** Waypoints of the closed loop each icon swims along — an irregular blob, never a clean circle. */
const ORBIT_STEPS = 8

/**
 * Builds a unique random swim per icon: every vertex of the closed orbit gets its own random
 * distance and angular jitter, so the path reads as drifting debris instead of a spinning wheel.
 * `bounds` is the safety ceiling measured from the real field, so two icons can never collide.
 */
const buildSwimStyle = (seed: string, bounds: OrbitBounds): React.CSSProperties => {
  const random = createRandom(seed)
  const range = (min: number, max: number) => min + random() * (max - min)
  const stepAngle = (Math.PI * 2) / ORBIT_STEPS
  const phase = range(0, Math.PI * 2)
  const duration = range(11, 29)
  const style: Record<string, string> = {
    '--dur': `${duration.toFixed(1)}s`,
    '--delay': `${-range(0, duration).toFixed(1)}s`,
    '--orbit-dir': random() < 0.5 ? 'reverse' : 'normal',
    '--tilt-dur': `${(duration * range(0.6, 1.4)).toFixed(1)}s`,
    '--logo-depth': range(0.82, 1).toFixed(2),
    '--lx1': `${range(-7, 7).toFixed(1)}deg`,
    '--ly1': `${range(-7, 7).toFixed(1)}deg`,
    '--lz1': `${range(-5, 5).toFixed(1)}deg`,
    '--ls1': range(0.93, 0.99).toFixed(3),
    '--lx2': `${range(-7, 7).toFixed(1)}deg`,
    '--ly2': `${range(-7, 7).toFixed(1)}deg`,
    '--lz2': `${range(-5, 5).toFixed(1)}deg`,
    '--ls2': range(1.01, 1.06).toFixed(3),
  }

  for (let step = 0; step < ORBIT_STEPS; step += 1) {
    const angle = phase + step * stepAngle + range(-0.42, 0.42) * stepAngle
    const reach = range(0.5, 1)
    let x = bounds.x * reach * Math.cos(angle)
    let y = bounds.y * reach * Math.sin(angle)

    // Keep the total displacement under the cap that keeps this icon clear of every neighbour.
    const magnitude = Math.hypot(x, y)
    if (magnitude > bounds.cap) {
      const shrink = bounds.cap / magnitude
      x *= shrink
      y *= shrink
    }

    style[`--x${step}`] = `${x.toFixed(1)}px`
    style[`--y${step}`] = `${y.toFixed(1)}px`
  }

  return style as React.CSSProperties
}

interface FloatingLogoFieldProps {
  variant: 'home' | 'skills'
}

export const FloatingLogoField: React.FC<FloatingLogoFieldProps> = ({ variant }) => {
  const fieldRef = useRef<HTMLDivElement>(null)
  const [fieldSize, setFieldSize] = useState({ width: 0, height: 0 })

  // The safe orbit radius depends on the rendered size, so measure the field before painting.
  useLayoutEffect(() => {
    const field = fieldRef.current
    if (!field) return

    const sync = () => {
      const width = field.clientWidth
      const height = field.clientHeight
      setFieldSize((prev) => (prev.width === width && prev.height === height ? prev : { width, height }))
    }

    sync()
    const observer = new ResizeObserver(sync)
    observer.observe(field)
    return () => observer.disconnect()
  }, [])

  const logos = useMemo(() => {
    const placed = floatingTechnologyLogos.map((logo) => {
      const [left, top, size] = variant === 'home' ? logo.home : logo.skills
      return { logo, left, top, size }
    })

    const centers = placed.map(({ left, top }) => ({
      x: (left / 100) * fieldSize.width,
      y: (top / 100) * fieldSize.height,
    }))
    const glyphRadii = placed.map(({ size }) => (size / 2) * GLYPH_FACTOR)
    const bounds = computeOrbitBounds(centers, glyphRadii, fieldSize.width, fieldSize.height)

    return placed.map((item, index) => ({
      ...item,
      swim: buildSwimStyle(`${variant}-${item.logo.name}`, bounds[index]),
    }))
  }, [fieldSize, variant])

  return (
    <div
      ref={fieldRef}
      className={`logo-field logo-field-${variant}`}
      role="list"
      aria-label="Technology logos"
    >
      {logos.map(({ logo, left, top, size, swim }) => {
        const Icon = resolveSkillIcon(logo.iconKey)

        return (
          <span
            className="floating-logo"
            key={logo.name}
            role="listitem"
            aria-label={logo.name}
            style={{
              ...swim,
              left: `${left}%`,
              top: `${top}%`,
              width: `${size}px`,
              height: `${size}px`,
            }}
          >
            <span className="floating-logo-lean">
              <Icon aria-hidden={true} />
            </span>
          </span>
        )
      })}
    </div>
  )
}
