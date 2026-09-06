/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Markdown from "react-markdown";

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return <div className="size-full bg-muted" />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className="aspect-video w-full object-cover"
      onError={() => setImageError(true)}
    />
  );
}

interface Props {
  title: string;
  href?: string;
  description: string;
  dates?: string;
  type?: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  type,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={cn(
        "flex h-full flex-col border border-border rounded-xl overflow-hidden hover:ring-2 cursor-pointer hover:ring-muted transition-all duration-200",
        className
      )}
    >
      <div className="relative shrink-0 aspect-video bg-muted">
        <Link
          href={href || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          {video ? (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="size-full object-cover"
            />
          ) : image ? (
            <ProjectImage src={image} alt={title} />
          ) : null}
        </Link>
        {links && links.length > 0 && (
          <div className="absolute top-2 right-2 flex flex-wrap gap-2">
            {links.map((projectLink, index) => (
              <Link
                href={projectLink.href}
                key={`${projectLink.href}-${index}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => event.stopPropagation()}
                aria-label={`${projectLink.type} for ${title}`}
                className="rounded-md"
              >
                <Badge className="flex items-center gap-1.5 bg-black text-xs text-white hover:bg-black/90">
                  {projectLink.icon}
                  {projectLink.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col gap-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold">{title}</h3>
            {(type || dates) && (
              <time className="text-xs text-muted-foreground">{type || dates}</time>
            )}
          </div>
          <button
            type="button"
            onClick={() => setIsExpanded((expanded) => !expanded)}
            className="inline-flex size-8 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-expanded={isExpanded}
            aria-label={`${isExpanded ? "Collapse" : "Expand"} ${title}`}
          >
            <ChevronDown
              className={cn("size-4 transition-transform duration-300", isExpanded && "rotate-180")}
              aria-hidden
            />
          </button>
        </div>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="text-[11px] font-medium border border-border h-6 w-fit px-2"
                variant="outline"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
        <div
          className={cn(
            "grid transition-[grid-template-rows,opacity,visibility] duration-300 ease-out",
            isExpanded
              ? "visible grid-rows-[1fr] opacity-100"
              : "invisible grid-rows-[0fr] opacity-0"
          )}
          aria-hidden={!isExpanded}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="flex flex-col gap-3 pt-1">
              <div className="text-xs prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
                <Markdown>{description}</Markdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
