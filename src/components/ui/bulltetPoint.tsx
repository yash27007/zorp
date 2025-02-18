import { CircleCheckBig } from 'lucide-react';
import { ReactNode } from 'react';

const BulletPoint = ({ content, children }: { content: string; children?: ReactNode }) => {
    return (
        <div className="w-full">
            <div className="flex items-center gap-4 px-10 py-4 w-full">
                {/* Use the passed-in logo if available, otherwise default to CircleCheckBig */}
                {children ? (
                    <span className="flex-shrink-0">{children}</span>
                ) : (
                    <CircleCheckBig size={20} color="#051700" className="flex-shrink-0" />
                )}
                <p className="text-para text-logo-green-900">{content}</p>
            </div>
        </div>
    );
}

export { BulletPoint };
