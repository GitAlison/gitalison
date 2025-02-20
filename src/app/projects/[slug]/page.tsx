import { projects_data } from "@/utils/data";


interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {

    return projects_data.map((project) => ({
        slug: project.folder,
    }))
}
const Page = async ({ params }: PageProps) => {
    const { slug } = await params;

    return <div>Page for {slug}</div>;
};

export default Page;