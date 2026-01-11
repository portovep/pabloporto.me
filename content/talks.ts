export type TalkData = {
    id: string;
    year: number;
    title: string;
    event: string;
    url?: string | null;
};

export const talks: TalkData[] = [
    {
        id: 'data-mesh-101-jonthebeach-2023',
        year: 2023,
        title: 'Data Mesh 101',
        event: 'JonTheBeach',
        url: 'https://www.youtube.com/watch?v=V0i2KyMp9pY&ab_channel=JOnTheBeach'
    },
    {
        id: 'data-mesh-101-commitconf-2023',
        year: 2023,
        title: 'Data Mesh 101',
        event: 'Commitconf'
    },
    {
        id: 'data-products-lifecycle-thoughtworks-2023',
        year: 2023,
        title: 'An overview of the data products lifecycle',
        event: 'Thoughtworks'
    },
    {
        id: 'tdd-in-sql-thoughtworks-2023',
        year: 2023,
        title: 'TDD in SQL',
        event: 'Thoughtworks'
    },
    {
        id: 'learning-continuous-delivery-factoria5-2022',
        year: 2022,
        title: 'Learning continous delivery with examples',
        event: 'Factoria5 bootcamp'
    },
    {
        id: 'data-project-postmortem-thoughtworks-2022',
        year: 2022,
        title: 'A data project post-mortem through Data Mesh lenses',
        event: 'Thoughtworks'
    },
    {
        id: 'functional-programming-factoria5-2021',
        year: 2021,
        title: 'Introduction to functional programming',
        event: 'Factoria5 bootcamp'
    },
    {
        id: 'observability-distributed-tracing-client-2020',
        year: 2020,
        title: 'Observability: An introduction to distributed tracing',
        event: 'Client'
    },
    {
        id: 'agile-software-development-factoria5-2019',
        year: 2019,
        title: 'Introduction to agile software development',
        event: 'Factoria5 bootcamp'
    },
    {
        id: 'design-systems-storybook-thoughtworks-2018',
        year: 2018,
        title: 'Design systems and UI component libraries with React and Storybook',
        event: 'Thoughtworks'
    },
    {
        id: 'component-library-scale-frontend-client-2017',
        year: 2017,
        title: 'How we built a component library to scale frontend development across multiple teams',
        event: 'Client'
    },
    {
        id: 'phoenix-server-pattern-thoughtworks-2016',
        year: 2016,
        title: 'Introduction to the phoenix server pattern',
        event: 'Thoughtworks'
    },
    {
        id: 'living-styleguide-thoughtworks-2016',
        year: 2016,
        title: 'Creating a living style-guide for ThoughtWorks.com',
        event: 'Thoughtworks'
    },
    {
        id: 'roles-in-agile-team-meetup-2016',
        year: 2016,
        title: 'What are the different roles in an agile team',
        event: 'Meetup'
    },
    {
        id: 'securing-web-applications-thoughtworks-2015',
        year: 2015,
        title: 'Securing web applications 101',
        event: 'Thoughtworks'
    }
];
