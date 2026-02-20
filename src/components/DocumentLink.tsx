import { FileText } from 'lucide-react';

interface DocumentLinkProps {
    title: string;
    href?: string; // Link para o PDF (opcional por enquanto)
}

export function DocumentLink({ title, href = "#" }: DocumentLinkProps) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 mb-3 bg-gray-50 rounded-lg hover:bg-blue-50 hover:shadow-sm transition-all duration-200 border border-transparent hover:border-blue-100 group"
        >
            <div className="p-2 bg-blue-100 rounded-lg text-blue-600 mr-4 group-hover:bg-blue-200 transition-colors">
                <FileText className="w-6 h-6" />
            </div>
            <span className="font-medium text-gray-700 group-hover:text-blue-800 text-lg">
                {title}
            </span>
        </a>
    );
}
