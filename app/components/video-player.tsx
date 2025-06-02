"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Play, Pause, Volume2, VolumeX, Maximize, SkipBack, SkipForward } from "lucide-react"
import { cn } from "@/lib/utils"

interface VideoPlayerProps {
  title: string
  poster: string
  videoUrl?: string // Optional video URL
  className?: string
}

export function VideoPlayer({ title, poster, videoUrl, className }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime
      const total = videoRef.current.duration
      setCurrentTime(current)
      setProgress((current / total) * 100)
    }
  }

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration)
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect()
      const clickX = e.clientX - rect.left
      const width = rect.width
      const clickTime = (clickX / width) * duration
      videoRef.current.currentTime = clickTime
    }
  }

  return (
    <div className={cn("relative rounded-lg overflow-hidden bg-black", className)}>
      {/* Video Element */}
      <div className="aspect-video relative">
        {videoUrl ? (
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            poster={poster}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${poster})` }} />
        )}

        {/* Play button overlay (only shown when not playing or no video) */}
        {(!isPlaying || !videoUrl) && (
          <div
            className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer"
            onClick={togglePlay}
          >
            <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Play className="w-10 h-10 text-white fill-white" />
            </div>
          </div>
        )}
      </div>

      {/* Video Controls */}
      <div className="bg-black/90 text-white p-2 px-4">
        <div className="flex items-center justify-between mb-2">
          <div className="text-sm font-medium truncate flex-1">{title}</div>
          <div className="text-xs text-gray-400">
            {videoUrl ? `${formatTime(currentTime)} / ${formatTime(duration)}` : "05:23 / 15:00"}
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-1 bg-gray-700 rounded-full mb-3 relative cursor-pointer" onClick={handleProgressClick}>
          <div className="absolute h-full bg-primary rounded-full" style={{ width: `${progress}%` }} />
          <div
            className="absolute h-3 w-3 bg-white rounded-full top-1/2 -translate-y-1/2 cursor-pointer"
            style={{ left: `${progress}%` }}
          />
        </div>

        {/* Control buttons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="text-gray-400 hover:text-white">
              <SkipBack className="w-4 h-4" />
            </button>
            <button className="text-white hover:text-primary" onClick={togglePlay}>
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>
            <button className="text-gray-400 hover:text-white">
              <SkipForward className="w-4 h-4" />
            </button>
            <button className="text-gray-400 hover:text-white" onClick={toggleMute}>
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>
          <div>
            <button className="text-gray-400 hover:text-white">
              <Maximize className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
