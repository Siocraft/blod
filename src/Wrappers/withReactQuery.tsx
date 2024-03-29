import { queryClient } from "@config";
import { QueryClientProvider } from "@tanstack/react-query";

export const withReactQuery = (Component: React.FC) => {
  return () => {
    return (
      <QueryClientProvider client={queryClient}>
        <Component />
      </QueryClientProvider>
    );
  };
};