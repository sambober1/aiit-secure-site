/**
 * TypeScript type definitions for components
 */

/**
 * Props for components that don't require any specific props
 */
export interface BaseComponentProps {
  className?: string;
}

/**
 * Props for components that support fade-in animations
 */
export interface FadeableComponentProps extends BaseComponentProps {
  'data-fade'?: boolean;
}

/**
 * Hook return type for useFadeIn
 */
export interface UseFadeInReturn {
  isSupported: boolean;
}

/**
 * Error boundary state interface
 */
export interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

/**
 * Error boundary props interface
 */
export interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error?: Error }>;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}