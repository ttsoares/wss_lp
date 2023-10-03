"use client";

import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
  faBookOpen,
  faChartLine,
  faUserShield,
  faLock,
  faBriefcase,
  faArrowTrendUp,
  faFolderTree,
  faCloudArrowUp,
  faFlask,
} from "@fortawesome/free-solid-svg-icons";

import {
  faBookmark,
  faClone,
  faLightbulb,
} from "@fortawesome/free-regular-svg-icons";

const Icons = () => {
  return (
    <div id="home" className="w-full h-screen border-2 border-green-500">
      <h1>Icons</h1>

      <FontAwesomeIcon
        icon={faBookOpen}
        className="p-5 text-4xl text-amber-600"
      />

      <FontAwesomeIcon
        icon={faBookmark}
        className="p-5 text-4xl text-amber-600"
      />

      <FontAwesomeIcon
        icon={faChartLine}
        className="p-5 text-4xl text-amber-600"
      />

      <FontAwesomeIcon
        icon={faUserShield}
        className="p-5 text-4xl text-amber-600"
      />

      <FontAwesomeIcon icon={faClone} className="p-5 text-4xl text-amber-600" />

      <FontAwesomeIcon
        icon={faLightbulb}
        className="p-5 text-4xl text-amber-600"
      />
      <FontAwesomeIcon icon={faLock} className="p-5 text-4xl text-amber-600" />
      <FontAwesomeIcon
        icon={faBriefcase}
        className="p-5 text-4xl text-amber-600"
      />
      <FontAwesomeIcon
        icon={faArrowTrendUp}
        className="p-5 text-4xl text-amber-600"
      />
      <FontAwesomeIcon
        icon={faFolderTree}
        className="p-5 text-4xl text-amber-600"
      />
      <FontAwesomeIcon
        icon={faCloudArrowUp}
        className="p-5 text-4xl text-amber-600"
      />
      <FontAwesomeIcon icon={faFlask} className="p-5 text-4xl text-amber-600" />
    </div>
  );
};

export default Icons;
