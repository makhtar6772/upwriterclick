import React from "react";
import DownloadCard from "./DownloadCard";
import app from "./images/app.svg";
import playstore from "./images/playstore.svg";
import webstore from "./images/webstore.png";

export default function DownloadOptions() {
  return (
    <div className="">
      <div className="flex flex-col">
        <h1 className="text-[18px] font-bold">Download on:</h1>
        <DownloadCard logo={app} name="App Store" />
        <DownloadCard logo={playstore} name="Play Store" />
        <DownloadCard logo={webstore} name="Web Store" />
      </div>
    </div>
  );
}
