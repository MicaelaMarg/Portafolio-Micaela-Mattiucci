"use client"

import { useState } from "react"

interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  fallback?: string
  loading?: "lazy" | "eager"
}

export function OptimizedImage({
  src,
  alt,
  className = "",
  fallback = "/placeholder.svg?height=40&width=40",
  loading = "lazy",
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  return (
    <div className={`relative ${className}`}>
      {!isLoaded && !hasError && <div className="absolute inset-0 bg-gray-700 animate-pulse rounded" />}
      <img
        src={hasError ? fallback : src}
        alt={alt}
        className={`${className} transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        loading={loading}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          setHasError(true)
          setIsLoaded(true)
        }}
      />
    </div>
  )
}
