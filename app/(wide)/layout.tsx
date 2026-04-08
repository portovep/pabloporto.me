import PageContainer from '@/components/PageContainer';

export default function WideLayout({ children }: { children: React.ReactNode }) {
    return <PageContainer wide>{children}</PageContainer>;
}
