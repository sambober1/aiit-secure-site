import React from 'react';

/**
 * Props for the SectionLoader component
 */
interface SectionLoaderProps {
  /** Minimum height for the loading placeholder */
  minHeight?: string;
  /** Accessible label for screen readers */
  label?: string;
}

/**
 * Loading component for lazy-loaded sections
 * 
 * Provides a visually consistent loading placeholder with accessibility support
 * 
 * @param props - Component props
 * @returns JSX loading component
 */
const SectionLoader: React.FC<SectionLoaderProps> = ({ 
  minHeight = '200px', 
  label = 'Loading content' 
}) => (
  <div 
    className="section-loader"
    style={{ 
      minHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.02)',
      borderRadius: '8px',
      margin: '1rem 0'
    }}
    role="status"
    aria-label={label}
  >
    <div 
      className="loader-spinner"
      style={{
        width: '32px',
        height: '32px',
        border: '3px solid rgba(255, 255, 255, 0.1)',
        borderTop: '3px solid var(--accent, #00ff88)',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }}
      aria-hidden="true"
    />
    <span className="sr-only">{label}</span>
    
    <style jsx>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
    `}</style>
  </div>
);

export default SectionLoader;