"use client";
import {
  DoubleArrowRightIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  DoubleArrowLeftIcon,
} from "@radix-ui/react-icons";
import { Flex, Text } from "@radix-ui/themes";
import React from "react";
import SoftButton from "./SoftButton";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  itemCount: number;
  pageSize: number;
  currentPage: number;
}

const Pagination = ({ itemCount, pageSize, currentPage }: Props) => {
  const router = useRouter();

  const pageCount = Math.ceil(itemCount / pageSize);
  if (pageCount <= 1) return null;

  const changePage = (page: number) => {
    const query = page ? `?page=${page}` : "";
    router.push(query);
  };
  return (
    <Flex align="center" gap="1">
      <SoftButton
        color="accent"
        disabled={currentPage === pageCount}
        onClick={() => changePage(pageCount)}
      >
        <DoubleArrowRightIcon />
      </SoftButton>
      <SoftButton
        color="light"
        disabled={currentPage === pageCount}
        onClick={() => changePage(currentPage + 1)}
      >
        <ChevronRightIcon />
      </SoftButton>
      <Text className="text-dark">
        صفحه ی {currentPage} از {pageCount}
      </Text>
      <SoftButton
        color="light"
        disabled={currentPage === 1}
        onClick={() => changePage(currentPage - 1)}
      >
        <ChevronLeftIcon />
      </SoftButton>
      <SoftButton
        color="accent"
        disabled={currentPage === 1}
        onClick={() => changePage(1)}
      >
        <DoubleArrowLeftIcon />
      </SoftButton>
    </Flex>
  );
};

export default Pagination;
