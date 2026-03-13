interface StarRatingProps {
  value: number;
  onChange: (value: number) => void;
}

export function StarRating({ value, onChange }: StarRatingProps) {
  return (
    <div className="flex gap-2">
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = star <= value;
        return (
          <button
            key={star}
            type="button"
            onClick={() => onChange(star)}
            className="w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all"
            style={{
              borderColor: filled ? '#d4a017' : 'var(--color-border)',
              backgroundColor: filled ? '#fef3c7' : 'var(--color-card-inner)',
            }}
            aria-label={`${star} star${star > 1 ? 's' : ''}`}
          >
            <svg
              className="w-5 h-5 transition-colors"
              viewBox="0 0 24 24"
              fill={filled ? '#d4a017' : 'none'}
              stroke={filled ? '#d4a017' : 'var(--color-text-muted)'}
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6z"
              />
            </svg>
          </button>
        );
      })}
    </div>
  );
}
