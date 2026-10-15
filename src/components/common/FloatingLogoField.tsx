import React from 'react'
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
  SiOnnx,
  SiOpencv,
  SiPandas,
  SiPython,
  SiPytorch,
  SiScikitlearn,
  SiTensorflow,
  SiUltralytics,
} from '@icons-pack/react-simple-icons'
import { floatingTechnologyLogos } from '../../config/skills.config'

const iconRegistry: Record<string, React.ComponentType<{ 'aria-hidden'?: boolean }>> = {
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
  Docker: SiDocker,
  Onnx: SiOnnx,
  Firebase: SiFirebase,
  Git: SiGit,
  Github: SiGithub,
  Linux: SiLinux,
}

interface FloatingLogoFieldProps {
  variant: 'home' | 'skills'
}

export const FloatingLogoField: React.FC<FloatingLogoFieldProps> = ({ variant }) => {
  return (
    <div
      className={`logo-field logo-field-${variant}`}
      role="list"
      aria-label="Technology logos"
    >
      {floatingTechnologyLogos.map(({ name, iconKey, home, skills }, index) => {
        const Icon = iconRegistry[iconKey] || SiPython
        const [left, top, size] = variant === 'home' ? home : skills

        return (
          <span
            className={`floating-logo float-path-${index % 4}`}
            key={name}
            role="listitem"
            aria-label={name}
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: `${size}px`,
              height: `${size}px`,
              animationDelay: `${index * -1.17}s`,
              animationDuration: `${10 + (index % 5) * 2.4}s`,
            }}
          >
            <Icon aria-hidden={true} />
          </span>
        )
      })}
    </div>
  )
}
