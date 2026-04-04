type PrinciplesListProps = {
    principles: string[];
};

export default function PrinciplesList({ principles }: PrinciplesListProps) {
    return (
        <div className="sm:mx-auto sm:mb-20 flex flex-wrap -mx-2 text-xl">
            {principles.map((principle) => (
                <div key={principle} className="sm:w-1/2 w-full p-2">
                    <div className="flex items-center h-full p-4 bg-muted rounded">
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            className="shrink-0 w-6 h-6 mr-4 text-green-500"
                            viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                        <span className="title-font font-medium">{principle}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}
