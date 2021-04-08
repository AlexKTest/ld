import { FC } from "react";
import cn from "classnames";

import FeatureIcon from "../../icons/feature.svg";

import { IFeature, isFolderOrFeatureMatchFilter } from '../../data'

import "./feature.css";

interface FeatureProps {
  feature: IFeature,
  selectedFeature: IFeature | null;
  setSelectedFeature: (feature: IFeature | null) => void;
  filter: string;
}

export const Feature: FC<FeatureProps> = ({
  filter,
  feature,
  selectedFeature,
  setSelectedFeature,
}) => {
  const {id, title} = feature
  const filtered = isFolderOrFeatureMatchFilter(feature, filter)
  return (
    <div className={cn("feature", {selected: id === selectedFeature?.id})} onClick={() => setSelectedFeature(feature)}>
      <img src={FeatureIcon} className="feature-icon" />
      <div className={cn("feature-title", {filtered})}>{title}</div>
    </div>
  );
};
