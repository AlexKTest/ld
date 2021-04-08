import { FC, useState } from "react";

import { Filter, Tree, Details } from "./components";
import { data, IFeature, filterFolders } from "./data";

import "./App.css";

export const App: FC = () => {
  const [filter, setFilter] = useState("");
  const [selectedFeature, setSelectedFeature] = useState<IFeature | null>(null);
  const { title, folders } = data;
  const filteredFolders = filterFolders(folders, filter)

  return (
    <div className="app">
      <h1 className="app-title">{title}</h1>
      <div className="app-body">
        <div className="app-left-part">
          <Filter filter={filter} setFilter={setFilter} />
          <Tree
            folders={filteredFolders}
            filter={filter}
            setSelectedFeature={setSelectedFeature}
            selectedFeature={selectedFeature}
          />
        </div>
        <div className="app-right-part">
          {selectedFeature && (
            <Details
              title={selectedFeature.title}
              details={selectedFeature.details}
            />
          )}
        </div>
      </div>
    </div>
  );
};
