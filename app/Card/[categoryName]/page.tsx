import { categories, Word } from '@/data/categories';
import Navigation from '@/app/navigation/navigation';
import CardClient from './CardClient';

interface PageProps {
    params: {
        categoryName: string;
    };
}

export async function generateStaticParams() {
    return categories.map((category) => ({
        categoryName: category.category,
    }));
}

export default function CardPage({ params }: PageProps) {
    return (
        <div>
            <Navigation headerText={params.categoryName} />
            <CardClient categoryName={params.categoryName} />
        </div>
    );
}
