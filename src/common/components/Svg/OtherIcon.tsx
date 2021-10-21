import React from 'react';
import SvgIcon from './SvgIcon';

type OtherIconOptionalPropsType = {
    className: string;
    fill?: string;
};

type ExpertIconPropsType = Partial<OtherIconOptionalPropsType>;

const OtherIcon: React.FC<ExpertIconPropsType> = ({ className = '', fill = '#5B5B5B' }) => (
    <SvgIcon className={className} viewBox="0 0 32 32" width="32" height="32">
        <g clipPath="url(#a)">
            <path
                fill={fill}
                d="M29.125 0H23.5a.938.938 0 0 0 0 1.875h3.362l-5.06 5.06A9.637 9.637 0 0 0 16 5c-2.174 0-4.184.72-5.802 1.935L8.124 4.86l1.87-.501a.937.937 0 1 0-.486-1.811l-1.87.5.502-1.869A.937.937 0 1 0 6.329.695l-.501 1.87-1.26-1.26A.937.937 0 1 0 3.242 2.63l1.26 1.26-1.87.5a.937.937 0 1 0 .486 1.812l1.87-.5-.502 1.868a.937.937 0 1 0 1.811.485l.501-1.869L8.812 8.2a9.649 9.649 0 0 0-2.5 6.488c0 5.025 3.847 9.168 8.75 9.641V27H12.25a.938.938 0 0 0 0 1.875h2.813v2.188a.938.938 0 0 0 1.875 0v-2.188h2.812a.937.937 0 1 0 0-1.875h-2.812v-2.67c4.903-.473 8.75-4.617 8.75-9.642a9.649 9.649 0 0 0-2.5-6.488l5-5v3.363a.938.938 0 0 0 1.875 0V.938A.937.937 0 0 0 29.125 0Zm-5.312 14.688c0 4.307-3.505 7.812-7.813 7.812s-7.812-3.505-7.812-7.813c0-4.307 3.504-7.812 7.812-7.812s7.813 3.505 7.813 7.813Z"
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h32v32H0z" />
            </clipPath>
        </defs>
    </SvgIcon>
);

export default OtherIcon;
