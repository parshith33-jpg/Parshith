import { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle: string;
  loading?: 'eager' | 'lazy';
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackTitle,
  loading = 'lazy',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 via-blue-50 to-orange-50 p-6 text-center text-slate-600 ${className}`}
      >
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-blue-700 shadow-xs">
          <ImageIcon className="h-6 w-6" aria-hidden="true" />
        </div>
        <p className="font-display text-sm font-semibold text-slate-800">{fallbackTitle}</p>
        <p className="mt-1 text-xs text-slate-500">Future Skill Innovation Centre · Chennai</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
