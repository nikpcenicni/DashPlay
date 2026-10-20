// src/components/theme/SeasonalDecorations.jsx
import { useTheme } from '../../context/ThemeContext';

const PARTICLE_COUNT = 14;

// Golden-ratio spread gives a stable, even-looking scatter without Math.random in render
const spread = (i, offset = 0) => ((i + offset) * 0.618034) % 1;

export const SeasonalDecorations = () => {
  const { season } = useTheme();
  if (!season) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden" aria-hidden="true">
      {Array.from({ length: PARTICLE_COUNT }, (_, i) => (
        <span
          key={`${season.id}-${i}`}
          className={`season-particle season-${season.motion}`}
          style={{
            left: `${spread(i) * 100}%`,
            fontSize: `${14 + spread(i, 3) * 16}px`,
            animationDuration: `${14 + spread(i, 7) * 14}s`,
            animationDelay: `${-spread(i, 11) * 28}s`
          }}
        >
          {season.particles[i % season.particles.length]}
        </span>
      ))}
    </div>
  );
};
