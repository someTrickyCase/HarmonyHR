import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

const History = () => {
  const history = [
    {
      date: "23/05/2024",
      description: "20/11/2024",
      usedDays: "",
      earnedDays: "3.00",
      balance: "3.00",
    },
    {
      date: "23/05/2024",
      description: "20/11/2024",
      usedDays: "-6",
      earnedDays: "",
      balance: "3.00",
    },
    {
      date: "23/05/2024",
      description: "20/11/2024",
      usedDays: "",
      earnedDays: "3.00",
      balance: "3.00",
    },
    {
      date: "23/05/2024",
      description: "20/11/2024",
      usedDays: "",
      earnedDays: "3.00",
      balance: "3.00",
    },
    {
      date: "23/05/2024",
      description: "20/11/2024",
      usedDays: "-6",
      earnedDays: "",
      balance: "3.00",
    },
    {
      date: "23/05/2024",
      description: "20/11/2024",
      usedDays: "",
      earnedDays: "3.00",
      balance: "3.00",
    },
  ];

  return (
    <div className='flex flex-col mt-[16px] gap-[16px]'>
      <div className='flex gap-[8px] items-center'>
        <svg
          width='16'
          height='17'
          viewBox='0 0 16 17'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M1.49994 13.5235V3.00623C1.51299 3.00274 1.52974 3.00006 1.5503 3.00006H14.356C14.3766 3.00006 14.3933 3.00274 14.4064 3.00623V8.26485C14.4064 8.67907 14.7422 9.01485 15.1564 9.01485C15.5706 9.01485 15.9064 8.67907 15.9064 8.26485V2.91837C15.9064 2.0141 15.0799 1.50006 14.356 1.50006H1.5503C0.826379 1.50006 -6.10352e-05 2.0141 -6.10352e-05 2.91837V13.6113C-6.10352e-05 14.5156 0.826379 15.0296 1.5503 15.0296H5.15191C5.56612 15.0296 5.90191 14.6939 5.90191 14.2796C5.90191 13.8654 5.56612 13.5296 5.15191 13.5296H1.5503C1.52974 13.5296 1.51299 13.527 1.49994 13.5235ZM8.70332 4.92389C8.70332 4.50967 8.36754 4.17389 7.95332 4.17389C7.53911 4.17389 7.20332 4.50967 7.20332 4.92389V7.51544H4.75189C4.33768 7.51544 4.00189 7.85122 4.00189 8.26544C4.00189 8.67965 4.33768 9.01544 4.75189 9.01544H7.95332C8.36754 9.01544 8.70332 8.67965 8.70332 8.26544V4.92389ZM15.3347 9.82829C15.7466 9.86923 16.0429 10.2364 15.9966 10.6484C15.8963 11.5408 15.6075 12.3047 15.1295 12.9347C14.6528 13.5629 14.0188 14.0172 13.2883 14.3391C12.2949 14.7769 11.0892 14.9839 9.76126 15.0501L9.81945 15.0804C10.1848 15.2712 10.3223 15.7237 10.1267 16.0912C9.93109 16.4586 9.47635 16.6019 9.11103 16.4112L6.93826 15.277C6.73588 15.1713 6.59425 14.9783 6.55384 14.7531C6.51343 14.5278 6.5787 14.2952 6.73098 14.1216L8.19491 12.4529C8.4698 12.1396 8.94403 12.1049 9.25414 12.3755C9.56424 12.6461 9.59279 13.1195 9.31789 13.4329L9.19728 13.5704C10.64 13.5391 11.8194 13.3556 12.6976 12.9685C13.2399 12.7296 13.6475 12.4214 13.9379 12.0387C14.227 11.6577 14.4309 11.1623 14.5053 10.5002C14.5516 10.0882 14.9229 9.78736 15.3347 9.82829Z'
            fill='#1C3144'
          />
        </svg>
        <p className='text-[#204973]'>History</p>
      </div>

      <div className='sm:flex sm:items-center gap-[8px] grid grid-cols-3 grid-rows-2'>
        <Select>
          <SelectTrigger className='z-20 sm:w-[180px] w-full border border-[#7C96B1] col-span-full'>
            <SelectValue placeholder='Sick' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='light'>Light</SelectItem>
            <SelectItem value='dark'>Dark</SelectItem>
            <SelectItem value='system'>System</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className='z-20 sm:w-[180px] w-full border border-[#7C96B1] col-span-1'>
            <SelectValue placeholder='All' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='light'>Light</SelectItem>
            <SelectItem value='dark'>Dark</SelectItem>
            <SelectItem value='system'>System</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className='sm:w-[180px] sm:absolute right-[20px] w-full  border border-[#7C96B1] col-start-2 col-span-full'>
            <SelectValue placeholder='Balance History' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='light'>Light</SelectItem>
            <SelectItem value='dark'>Dark</SelectItem>
            <SelectItem value='system'>System</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Table>
        <TableHeader className='bg-[#DAE6F2]'>
          <TableRow>
            <TableHead className='w-[100px]'>Date &darr;</TableHead>
            <TableHead className='ml-[30px]'>Description</TableHead>
            <TableHead className='ml-[210px]'>Used Days (-)</TableHead>
            <TableHead className='ml-[180px]'>Earned Days (+)</TableHead>
            <TableHead className='ml-[250px]'>Balance</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {history.map((item) => (
            <TableRow key={JSON.stringify(item)}>
              <TableCell className='font-medium'>{item.date}</TableCell>
              <TableCell className='ml-[40px]'>{`Actual for ${item.date} to ${item.description}`}</TableCell>
              <TableCell className='ml-[50px] w-[100px]'>{item.usedDays}</TableCell>
              <TableCell className='ml-[180px] w-[100px]'>{item.earnedDays}</TableCell>
              <TableCell className='ml-[260px]'>{item.balance}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default History;
