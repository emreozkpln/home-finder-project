"use client";

import { type ReactNode, useCallback } from "react";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./pagination";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

export interface PaginationWithLinksProps {
	pageSizeSelectOptions?: {
		pageSizeSearchParam?: string;
		pageSizeOptions: number[];
	};
	totalCount: number;
	pageSize: number;
	page: number;
	pageSearchParam?: string;
}

/**
 * Navigate with Nextjs links (need to update your own `pagination.tsx` to use Nextjs Link)
 * 
 * @example
 * ```
 * <PaginationWithLinks
    page={0}
    pageSize={20}
    totalCount={500}
  />
 * ```
 */
export function PaginationWithLinks({ pageSizeSelectOptions, pageSize, totalCount, page, pageSearchParam }: PaginationWithLinksProps) {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const totalPageCount = Math.ceil(totalCount / pageSize);

	const buildLink = useCallback(
		(newPage: number) => {
			const key = pageSearchParam || "page";
			if (!searchParams) return `${pathname}?${key}=${newPage}`;
			const newSearchParams = new URLSearchParams(searchParams);
			newSearchParams.set(key, String(newPage));
			return `${pathname}?${newSearchParams.toString()}`;
		},
		[searchParams, pathname]
	);

	const navToPageSize = useCallback(
		(newPageSize: number) => {
			const key = pageSizeSelectOptions?.pageSizeSearchParam || "pageSize";
			const newSearchParams = new URLSearchParams(searchParams || undefined);
			newSearchParams.set(key, String(newPageSize));
			newSearchParams.delete(pageSearchParam || "page");
			router.push(`${pathname}?${newSearchParams.toString()}`);
		},
		[searchParams, pathname]
	);

	const renderPageNumbers = () => {
		const items: ReactNode[] = [];
		const maxVisiblePages = 5;

		if (totalPageCount <= maxVisiblePages) {
			for (let i = 0; i < totalPageCount; i++) {
				items.push(
					<PaginationItem key={i}>
						<PaginationLink href={buildLink(i)} isActive={page === i}>
							{i + 1}
						</PaginationLink>
					</PaginationItem>
				);
			}
		} else {
			items.push(
				<PaginationItem key={0}>
					<PaginationLink href={buildLink(0)} isActive={page === 0}>
						1
					</PaginationLink>
				</PaginationItem>
			);

			if (page > 2) {
				items.push(
					<PaginationItem key="ellipsis-start">
						<PaginationEllipsis />
					</PaginationItem>
				);
			}

			const start = Math.max(1, page - 1);
			const end = Math.min(totalPageCount - 2, page + 1);

			for (let i = start; i <= end; i++) {
				items.push(
					<PaginationItem key={i}>
						<PaginationLink href={buildLink(i)} isActive={page === i}>
							{i + 1}
						</PaginationLink>
					</PaginationItem>
				);
			}

			if (page < totalPageCount - 3) {
				items.push(
					<PaginationItem key="ellipsis-end">
						<PaginationEllipsis />
					</PaginationItem>
				);
			}

			items.push(
				<PaginationItem key={totalPageCount - 1}>
					<PaginationLink href={buildLink(totalPageCount - 1)} isActive={page === totalPageCount - 1}>
						{totalPageCount}
					</PaginationLink>
				</PaginationItem>
			);
		}

		return items;
	};

	return (
		<div className="flex items-center gap-3">
			{pageSizeSelectOptions && (
				<div className="flex flex-col gap-4 flex-1">
					<SelectRowsPerPage options={pageSizeSelectOptions.pageSizeOptions} setPageSize={navToPageSize} pageSize={pageSize} />
				</div>
			)}
			<Pagination className={cn({ "md:justify-end": pageSizeSelectOptions })}>
				<PaginationContent className="max-sm:gap-0">
					<PaginationItem>
						<PaginationPrevious href={buildLink(Math.max(page - 1, 0))} aria-disabled={page === 0} tabIndex={page === 0 ? -1 : undefined} className={page === 0 ? "pointer-events-none opacity-50" : undefined} />
					</PaginationItem>
					{renderPageNumbers()}
					<PaginationItem>
						<PaginationNext href={buildLink(Math.min(page + 1, totalPageCount - 1))} aria-disabled={page === totalPageCount - 1} tabIndex={page === totalPageCount - 1 ? -1 : undefined} className={page === totalPageCount - 1 ? "pointer-events-none opacity-50" : undefined} />
					</PaginationItem>
				</PaginationContent>
			</Pagination>
		</div>
	);
}

function SelectRowsPerPage({ options, setPageSize, pageSize }: { options: number[]; setPageSize: (newSize: number) => void; pageSize: number }) {
	return (
		<div className="flex items-center gap-4">
			<span className="whitespace-nowrap text-sm">Rows per page</span>

			<Select value={String(pageSize)} onValueChange={(value: any) => setPageSize(Number(value))}>
				<SelectTrigger>
					<SelectValue placeholder="Select page size">{String(pageSize)}</SelectValue>
				</SelectTrigger>
				<SelectContent>
					{options.map((option) => (
						<SelectItem key={option} value={String(option)}>
							{option}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
}
