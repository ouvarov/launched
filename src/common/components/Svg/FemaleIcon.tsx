import React from 'react';
import SvgIcon from './SvgIcon';

type FemaleIconOptionalPropsType = {
    className: string;
    fill?: string;
};

type ExpertIconPropsType = Partial<FemaleIconOptionalPropsType>;

const FemaleIcon: React.FC<ExpertIconPropsType> = ({ className = '', fill = '#5B5B5B' }) => (
    <SvgIcon className={className} viewBox="-6 0 32 32" width="32" height="32">
        <path
            fill={fill}
            d="M19.688 9.688C19.688 4.346 15.341 0 10 0 4.658 0 .312 4.346.312 9.688c0 5.025 3.847 9.168 8.75 9.641v6.421H5.626a.938.938 0 0 0 0 1.875h3.438v3.438a.938.938 0 0 0 1.874 0v-3.438h3.438a.938.938 0 0 0 0-1.875h-3.438v-6.42c4.904-.474 8.75-4.617 8.75-9.642Zm-17.5 0c0-4.308 3.504-7.813 7.812-7.813s7.813 3.505 7.813 7.813c0 4.307-3.505 7.812-7.813 7.812s-7.813-3.505-7.813-7.813Z"
        />
    </SvgIcon>
);

export default FemaleIcon;
