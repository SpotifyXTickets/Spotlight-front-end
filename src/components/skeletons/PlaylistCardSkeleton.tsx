'use client'
import React from 'react'

export const PlaylistCardSkeleton: React.FC = () => {
  return (
    <label
      className="playlist-card__checkbox-label animate-pulse"
      htmlFor={`playlist-card__checkbox-skeleton`}
    >
      <div className="playlist-card">
        <div className="playlist-card__content">
          <h2 className="playlist-card__title">
            <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-2 max-w-[100%]"></div>
            <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-4 max-w-[100%]"></div>
          </h2>
          <p className="playlist-card__description"></p>
        </div>
        <div className="playlist-card__checkbox-area">
          <input
            type="checkbox"
            disabled={true}
            className="playlist-card__checkbox"
            id={`playlist-card__checkbox-skeleton`}
          />
        </div>
      </div>
    </label>
  )
}

export default PlaylistCardSkeleton
