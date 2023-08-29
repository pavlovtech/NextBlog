"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { useRouter } from 'next/router';
 
import { Button, buttonVariants } from "../../components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/dropdown-menu"
import Link from "next/link";

async function deleteData(url: string, sha: string) {
    // Default options are marked with *
    await fetch(url, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
        "sha": sha
      }
    });
  }

  const onDelete = async(post: PostItem) => {
    await deleteData(`/api/posts/${post.name}`, post.sha);

    window.location.href = "/admin/posts"
  };

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type PostItem = {
  name: string,
  sha: string,
  status: string
}

export const columns: ColumnDef<PostItem>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row } : any) => {
      const fileName: string = row.getValue("name");

      return  <Link href={`/admin/posts/${fileName}`}>{fileName}</Link>
    }
  },
  {
    id: "actions",
    cell: ({ row, router }: any) => {
      const post = {...row.original};
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => onDelete(post)}>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
    }
]
