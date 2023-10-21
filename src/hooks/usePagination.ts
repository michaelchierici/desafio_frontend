import { useCallback, useState } from "react";

export default function UsePagination() {
  const [page, setPage] = useState(1);
  const [take, setTake] = useState(6);

  const handleChangePage = useCallback((event: any) => {
    const { pageIndex, pageSize } = event;
    setPage(pageIndex + 1);
    setTake(pageSize);
  }, []);

  return { page, take, handleChangePage };
}
