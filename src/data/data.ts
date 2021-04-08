export type IData = {
  title: string;
  folders: IFolder[];
};
export type IFolder = {
  id: string;
  title: string;
  folders: IFolder[];
  features: IFeature[];
};
export type IFeature = {
  id: string;
  title: string;
  details: string[][];
};

export const data: IData = {
  title: "LivingDoc Demo",
  folders: [
    {
      id: "b3ce6fe9-cc11-48fe-a34c-6bf1b7f8dd25",
      title: "Demo",
      folders: [
        {
          id: "3e19b514-8095-4dfd-9185-1290b55b8a14",
          title: "Filtering",
          folders: [],
          features: [
            {
              id: "feature 1",
              title: "Filtering Positive Test",
              details: [
                ["Given", "I have opened LivingDoc"],
                ["When", 'I ented "Filtering Test" into filter input'],
                ["Then", '"Filtering Test" folder should be displayed'],
                ["Then", '"Tree Test" folder should not be displayed'],
                ["When", "I click on the clear filter icon"],
                ["Then", '"Filtering Test" folder should be displayed'],
                ["Then", '"Tree Test" folder should be displayed'],
              ],
            },
          ],
        },
        {
          id: "fe506e9f-c720-4de8-822d-b85f00635ff3",
          title: "Tree",
          folders: [],
          features: [
            {
              id: "3c49ffbb-5acd-4943-9420-48c9dcebe739",
              title: "Feature Opening Test",
              details: [
                ["Given", "I have opened LivingDoc"],
                ["When", 'I expand "Filtering Test" folder'],
                ["When", 'I click on the "Feature Opening Test" folder'],
                ["Then", 'Details title should be "Feature Opening Test"'],
              ],
            },
          ],
        },
      ],
      features: [],
    },
  ],
};

export const isFolderOrFeatureMatchFilter = (
  { title }: { title: string },
  filter: string
) => filter && title.includes(filter);

export const isFolderOrChildMatchFilter = (
  folder: IFolder,
  filter: string
) => {
  const { folders, features } = folder
  if (isFolderOrFeatureMatchFilter(folder, filter)) {
    return true
  }
  if (
    folders.some((childFolder) =>
      isFolderOrChildMatchFilter(childFolder, filter)
    )
  ) {
    return true;
  }
  if (features.some((feature) => isFolderOrFeatureMatchFilter(feature, filter))) {
    return true;
  }
  return false;
};

export const filterFolders = (folders: IFolder[], filter: string) => {
  if (filter === "") {
    return folders;
  }
  return folders.reduce((acc, folder) => {
    if (isFolderOrFeatureMatchFilter(folder, filter)) {
      acc.push(folder);
    } else if (isFolderOrChildMatchFilter(folder, filter)) {
      const { title, folders, features, id } = folder
      acc.push({
        id,
        title,
        folders: folders.filter((folder) =>
          isFolderOrChildMatchFilter(folder, filter)
        ),
        features: features.filter((feature) =>
          isFolderOrFeatureMatchFilter(feature, filter)
        ),
      });
    }
    return acc;
  }, [] as IFolder[]);
};
