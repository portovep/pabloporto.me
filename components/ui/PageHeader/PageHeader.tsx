import React from 'react';

type PageHeaderProps = {
    title: string;
    children?: React.ReactNode;
};

export default function PageHeader({ title, children }: PageHeaderProps): React.ReactElement {
    return (
        <div className="space-y-4">
            <h1 className="text-gray-900 lg:text-5xl inline-block text-4xl font-extrabold tracking-tight">
                {title}
            </h1>
            {children && <p className="text-gray-600 text-xl">{children}</p>}
        </div>
    );
}
