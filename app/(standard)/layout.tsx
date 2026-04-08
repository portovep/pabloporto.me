import PageContainer from '@/components/PageContainer';

export default function StandardLayout({ children }: { children: React.ReactNode }) {
    return <PageContainer>{children}</PageContainer>;
}
