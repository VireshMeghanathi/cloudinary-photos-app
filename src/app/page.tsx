"use client";

import Image from "next/image";
import { CldUploadButton } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';
import { useState } from "react";

export type UploadResult = {
  info:{
    public_id: string;
  };
  event: 'success';
}

export default function Home() {

  const [imageid ,setImageId]= useState("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CldUploadButton 
      onSuccess={(results:UploadResult) => {
        return setImageId(results.info.public_id);
      }}
      uploadPreset="np9lonvj" />

      {imageid &&(
      <CldImage
        width="960"
        height="600"
        src={imageid}
        sizes="100vw"
        alt="Description of my image"
      />
    )}
    </main>
  );
}
