import React from 'react';
import { parseISO, format } from 'date-fns';

type DateProps = {
    dateString: string;
    dateFormat?: string;
};

const DATE_FORMAT_MONTH_DAY_YEAR = 'LLLL d, yyyy';

export default function Date({
    dateString,
    dateFormat = DATE_FORMAT_MONTH_DAY_YEAR
}: DateProps): React.ReactElement {
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, dateFormat)}</time>;
}
