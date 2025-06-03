import React from 'react';

type LabelProps = {
    text: string;
};

export default function Label({ text }: LabelProps): React.ReactElement {
    return (
        <span className="bg-emerald-500 sm:text-base inline-block px-2 py-1 text-sm font-semibold text-gray-100 align-top rounded cursor-default">
            {text}
        </span>
    );
}
