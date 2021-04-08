import { FC } from "react";

import { Folder } from "./folder";

import { IFolder, IFeature } from "../../data";

interface TreeProps {
  folders: IFolder[];
  filter: string;
  selectedFeature: IFeature | null;
  setSelectedFeature: (feature: IFeature | null) => void;
}

export const Tree: FC<TreeProps> = ({ folders, filter, setSelectedFeature, selectedFeature }) => {
  if (!folders.length) {
    return <h2>No Features found</h2>
  }
  return (
    <div>
      {folders.map(({ title, folders, features, id }) => (
        <Folder
          filter={filter}
          key={id}
          folders={folders}
          title={title}
          features={features}
          setSelectedFeature={setSelectedFeature}
          selectedFeature={selectedFeature}
        />
      ))}
    </div>
  );
};
