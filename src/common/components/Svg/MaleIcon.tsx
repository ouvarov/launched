import React from 'react';
import SvgIcon from './SvgIcon';

type MaleIconOptionalPropsType = {
    className: string;
    fill?: string;
};

type ExpertIconPropsType = Partial<MaleIconOptionalPropsType>;

const MaleIcon: React.FC<ExpertIconPropsType> = ({ className = '', fill = '#5B5B5B' }) => (
    <SvgIcon className={className} viewBox="0 0 32 32" width="32" height="32">
        <path
            fill={fill}
            d="M31.063 0h-8.75a.937.937 0 1 0 0 1.875h6.486L17.98 12.694a10.855 10.855 0 0 0-7.043-2.569 10.866 10.866 0 0 0-7.733 3.204A10.866 10.866 0 0 0 0 21.061c0 2.922 1.138 5.669 3.204 7.735A10.866 10.866 0 0 0 10.936 32c2.922 0 5.669-1.138 7.735-3.203a10.866 10.866 0 0 0 3.203-7.735c0-2.606-.906-5.073-2.569-7.042L30.125 3.2v6.487a.937.937 0 1 0 1.875 0V.938A.937.937 0 0 0 31.062 0ZM17.346 27.47a9.004 9.004 0 0 1-6.409 2.655 9.004 9.004 0 0 1-6.408-2.654 9.003 9.003 0 0 1-2.654-6.409c0-2.42.943-4.696 2.654-6.408A9.004 9.004 0 0 1 10.938 12c2.42 0 4.696.943 6.408 2.654A9.004 9.004 0 0 1 20 21.063c0 2.42-.943 4.696-2.654 6.408Z"
        />
    </SvgIcon>
);

export default MaleIcon;
