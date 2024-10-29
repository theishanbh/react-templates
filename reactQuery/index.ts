import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabin"],
    queryFn: getCabins,
  });

  const queryClient = useQueryClient();
  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: deleteCabin,
    onSucces: () => {
      queryClient.invalidateQueries({
        querykey: ["cabins"],
      });
    },
    onError: (err) => alert(err.message),
  });
  return (
    <>
      <QueryClientProvider client={queryClient}></QueryClientProvider>
    </>
  );
}
