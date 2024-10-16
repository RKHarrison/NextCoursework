"use client";

import { type ElementRef, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import Link from "next/link";

type ModalProps = {
  children: React.ReactNode;
  title: string;
};

export default function Modal({ children, title }: ModalProps) {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="p-8 border w-96 shadow-lg rounded-md bg-white">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 m-5">{title}</h3>
          {children}
          <div className="flex justify-center mt-4">
            {/* Navigates back to the base URL - closing the modal */}
            <Link href="/" className="btn btn-ghost">
              Close
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
