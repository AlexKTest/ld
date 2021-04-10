import { FC, useState } from "react";
import cn from "classnames";

import { IFolder, IFeature, isFolderOrFeatureMatchFilter } from "../../data";
import { Feature } from "./feature";

import FolderIcon from "../../icons/folder.svg";
import ArrowIcon from "../../icons/arrow.svg";

import "./folder.css";

interface FolderProps {
  title: string;
  filter: string;
  folders: IFolder[];
  features: IFeature[];
  selectedFeature: IFeature | null;
  setSelectedFeature: (feature: IFeature | null) => void;
}

export const Folder: FC<FolderProps> = ({
  title,
  filter,
  folders,
  features,
  selectedFeature,
  setSelectedFeature,
}) => {
  const [expanded, setExpanded] = useState(false);
  const filtered = isFolderOrFeatureMatchFilter({ title }, filter)
  return (
    <>
      <div className="folder-row" onClick={() => setExpanded(!expanded)}>
        <img
          src={ArrowIcon}
          className={cn("folder-arrow-icon", { expanded })}
        />
        <img src={FolderIcon} className="folder-icon" />
        <div className={cn("folder-title", {filtered })} data-cu="folder-title">{title}</div>
      </div>
      {expanded && (
        <div className="folder-content">
          {folders.map(({ title, folders, features, id }) => (
            <Folder
              key={id}
              title={title}
              filter={filter}
              folders={folders}
              features={features}
              setSelectedFeature={setSelectedFeature}
              selectedFeature={selectedFeature}
            />
          ))}
          {features.map(feature => (
            <Feature
              key={feature.id}
              filter={filter}
              feature={feature}
              setSelectedFeature={setSelectedFeature}
              selectedFeature={selectedFeature}
            />
          ))}
        </div>
      )}
    </>
  );
};
