import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

interface Pages {
  ClickBackPage: () => void;
  ClickNextPage: () => void;
  // ClickLessSizeDataPage?: () => void;
  // ClickMoreSizeDataPage?: () => void;
  page: number;
  // size: number;
}

export const PaginationComponent = ({
  page,
  ClickBackPage,
  ClickNextPage,
}: Pages) => {
  return (
    // <section className="pagination">
    //     {/* {
    //         page === 0 ?
    //             <button disabled>atras pagina</button>
    //             :
    //             <button onClick={ClickBackPage}>atras pagina</button>
    //     } */}
    //     <p>pag actual ({page})</p>
    //     <button onClick={ClickNextPage}>sig pagina</button>
    //     {/* {
    //         size === 1 ?
    //             <button disabled>menos data</button>
    //             :
    //             <button onClick={ClickLessSizeDataPage}>menos data</button>
    //     } */}
    //     <p>size: ({size})</p>
    //     <button onClick={ClickMoreSizeDataPage}>mas data</button>
    // </section>

    <Pagination>
      <PaginationContent>
        {page === 0 ? (
          <PaginationItem>
            <PaginationLink href="#" onClick={ClickBackPage} aria-disabled>
              Atras
            </PaginationLink>
          </PaginationItem>
        ) : (
          <PaginationItem>
            <PaginationLink href="#" onClick={ClickBackPage}>
              Atras
            </PaginationLink>
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationLink href="#"  className="active:bg-[#cecdcd]">
           Actual ({page})
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" onClick={ClickNextPage}>
            Adelante
          </PaginationLink>
        </PaginationItem>
        {/* <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem> */}
      </PaginationContent>
    </Pagination>
  );
};
