import { FC } from 'react'

import './details.css'

interface DetailsProps {
  title: string
  details: string[][]
}

export const Details: FC<DetailsProps> = ({ title, details }) => (
  <>
    <h2>{title}</h2>
    {details.map(([gherkin, step], i) => (
      // Could use 'i' here as a key due to these items order will never change
      <div className="detail" key={i}>
        <span className="detail-gherkin">{gherkin}</span>
        {step}
      </div>
    ))}
  </>
)