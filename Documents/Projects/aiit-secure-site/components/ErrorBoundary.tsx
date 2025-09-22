import React from 'react';
import type { ErrorBoundaryProps, ErrorBoundaryState } from './types';

/**
 * Default error fallback component
 */
const DefaultErrorFallback: React.FC<{ error?: Error }> = ({ error }) => (
  <div 
    role="alert" 
    className="error-boundary" 
    style={{ 
      padding: '1rem', 
      border: '1px solid #ff6b6b', 
      borderRadius: '8px', 
      backgroundColor: '#fee',
      color: '#c92a2a',
      margin: '1rem 0'
    }}
  >
    <h3>Something went wrong</h3>
    <p>This section couldn&apos;t load properly. Please try refreshing the page.</p>
    {process.env.NODE_ENV === 'development' && error && (
      <details style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>
        <summary>Error Details</summary>
        <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
          {error.message}
        </pre>
      </details>
    )}
  </div>
);

/**
 * Error boundary component for handling component errors gracefully
 * 
 * @example
 * ```tsx
 * <ErrorBoundary>
 *   <SomeComponent />
 * </ErrorBoundary>
 * ```
 */
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error('Error boundary caught an error:', error, errorInfo);
    this.props.onError?.(error, errorInfo);
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback;
      return <FallbackComponent error={this.state.error} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;