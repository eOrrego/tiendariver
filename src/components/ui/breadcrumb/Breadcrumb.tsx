import Link from 'next/link';

interface Path {
    href: string;
    label: string;
}
export const Breadcrumb = ({ paths }: { paths: Path[] }) => {
    return (
        <nav aria-label="breadcrumb" className='pb-3'>
            <ol className="flex text-gray-500 space-x-2 text-xs">
                {paths.map((path, index) => (
                    <li key={`${index}-${path.label}`} className="flex items-center">
                        <Link href={path.href} className="hover:text-black">
                            {path.label}
                        </Link>
                        {index < paths.length - 1 && <span className="mx-2">/</span>}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

