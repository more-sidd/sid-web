import { BookOpen, ExternalLink, FileText } from 'lucide-react';
import { publications } from '../data/portfolioData';

const Publications = () => {
  return (
  <section id="publications" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Publications
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto" />
        </div>

        <div className="space-y-6">
          {publications.map((publication) => (
            <div
              key={publication.id}
              className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <BookOpen className="text-blue-600" size={24} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    {publication.title}
                  </h3>
                  <p className="text-gray-700 mb-2">
                    {publication.authors.join(', ')}
                  </p>
                  <p className="text-blue-600 font-medium mb-4">
                    {publication.venue} ({publication.year})
                  </p>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {publication.abstract}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {publication.pdfUrl && (
                      <a
                        href={publication.pdfUrl}
                        download
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                      >
                        <FileText size={18} />
                        Download PDF
                      </a>
                    )}
                    {publication.externalUrl && (
                      <a
                        href={publication.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                      >
                        <ExternalLink size={18} />
                        View Online
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
