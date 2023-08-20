import { ReactElement, ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ChakraProvider } from "@chakra-ui/react";
import { render, RenderOptions, RenderResult } from "@testing-library/react";
import {
  renderHook,
  RenderHookOptions,
  RenderHookResult,
} from "@testing-library/react-hooks";

const AllProviders = ({ children }: { children?: ReactNode }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
        // @ts-ignore we know it is an error
        onError: (err) => console.error("Error", err?.message),
        cacheTime: 0,
      },
    },
  });

  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ChakraProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options: RenderOptions = {}
): RenderResult => {
  const OptionWrapper = options.wrapper;

  const FinalWrapper = OptionWrapper
    ? ({ children }: { children: ReactElement }) => (
        <AllProviders>
          <OptionWrapper>
            <>{children}</>
          </OptionWrapper>
        </AllProviders>
      )
    : AllProviders;

  return render(ui, {
    wrapper: FinalWrapper,
  });
};

const customRenderHook = <
  TProps extends JSX.IntrinsicAttributes & { children?: ReactNode },
  TResult
>(
  callback: (props: TProps) => TResult,
  options: RenderHookOptions<TProps> = {}
): RenderHookResult<TProps, TResult> => {
  const OptionWrapper = options.wrapper;

  const FinalWrapper = OptionWrapper
    ? (props: TProps) => (
        <AllProviders>
          <OptionWrapper {...props} />
        </AllProviders>
      )
    : AllProviders;

  return renderHook(callback, {
    ...options,
    wrapper: FinalWrapper,
  });
};

export * from "@testing-library/react";
export { customRender as render };
export { customRenderHook as renderHook };
