"use client";

import { scanReceipt } from "@/actions/transaction";
import { Button } from "@/components/ui/button";
import useFetch from "@/hooks/use-fetch";
import { Camera, LoaderCircle } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { toast } from "sonner";

function ReceiptScanner({ onScanComplete }) {
  const fileInputRef = useRef();

  const {
    loading:scanReceiptLoading,
    fn:scanReceiptFn,
    data:scannedData,
  }= useFetch(scanReceipt)

  const handleReceiptScan = async (file) =>{
    if(file.size > 5 * 1024* 1024){
      toast.error('File size should be less than 5MB')
      return;
    }
    await scanReceiptFn(file)
  }

  useEffect(()=>{
if(scannedData && !scanReceiptLoading){
  onScanComplete(scannedData)
  toast.success("Receipt scanned successfully")
}
  },[scanReceiptLoading,scannedData])

  return (
    <div>
      <input type="file" 
      className="hidden"
      accept="image/*"
      capture='environment'
      ref={fileInputRef} 
      onChange={(e) =>{
        const file = e.target.files?.[0];
        if(file) handleReceiptScan(file)
      }}
      />
      <Button variant='outline' type='button' onClick={() => fileInputRef.current?.click()}
      disabled={scanReceiptLoading} className='w-full h-10 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-500 animate-gradient hover:opacity-90 transition-opacity text-white hover:text-white'>{scanReceiptLoading?(<>
      <LoaderCircle className="animate-spin mr-2" />
      <span>Scanning Receipt...</span>
      </>):<>
      <Camera className="mr-2" />
      <span>Scan Receipt With AI</span>
      </>}</Button>
    </div>
  );
}

export default ReceiptScanner;
