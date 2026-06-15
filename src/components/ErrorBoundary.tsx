"use client";

import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error("ErrorBoundary caught:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-bg-primary px-6">
          <div className="text-center max-w-md">
            <div className="text-accent-gold text-6xl font-bold mb-4">!</div>
            <h2 className="text-white text-2xl font-semibold mb-2">
              Something went wrong
            </h2>
            <p className="text-text-secondary/60 text-sm">
              Please try refreshing the page. If the issue persists, contact us.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="mt-6 gold-gradient text-black font-semibold px-6 py-3 rounded-lg text-sm"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
