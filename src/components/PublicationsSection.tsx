import React, { useState } from 'react';
import { 
  Search, 
  ChevronRight,
  BookOpen,
  FileText
} from 'lucide-react';
import { PUBLICATIONS } from '../data/profileData';
import { PublicationItem } from '../types';

interface PublicationsSectionProps {
  onSelectPublication: (item: PublicationItem) => void;
}

export const PublicationsSection: React.FC<PublicationsSectionProps> = ({ onSelectPublication }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Space & Satellites', 'Aviation & FSTD', 'UAV & Drones', 'Software & Systems'];

  const filteredPublications = PUBLICATIONS.filter((pub) => {
    const matchesCat = selectedCategory === 'All' || pub.category === selectedCategory;
    const matchesSearch = 
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <section id="publications" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-[102.4rem] mx-auto border-t border-slate-200">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
        <div>
          <span className="font-sans text-xs font-bold uppercase tracking-wider text-blue-700">
            Published Works & Technical Briefs
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
            Technical Publications & Research
          </h2>
          <p className="font-body text-sm sm:text-base text-slate-600 mt-2 max-w-2xl leading-relaxed">
            Research on communication satellite systems, Dornier 228 maintenance and overhaul, and the JFK Watcher surveillance drone and autonomous charging station, alongside technical briefs.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            id="pub-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search papers & topics..."
            className="w-full pl-9 pr-3 py-2 rounded-xl font-sans text-xs bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 shadow-2xs"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center gap-1.5 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            id={`pub-filter-${cat.replace(/\s+/g, '-').toLowerCase()}`}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-lg font-sans text-xs font-medium transition-all cursor-pointer ${
              selectedCategory === cat
                ? 'bg-slate-900 text-white font-semibold shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:text-slate-950 hover:bg-slate-200/80 border border-slate-200/60'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Publications List */}
      <div className="divide-y divide-slate-200 border-y border-slate-200">
        {filteredPublications.map((pub) => (
          <div
            key={pub.id}
            id={`publication-item-${pub.id}`}
            onClick={() => onSelectPublication(pub)}
            className="py-6 group flex flex-col sm:flex-row sm:items-start justify-between gap-4 cursor-pointer hover:bg-blue-50/30 px-3 -mx-3 rounded-xl transition-colors"
          >
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-2 font-mono text-xs text-slate-500">
                <span className="font-semibold text-blue-800">{pub.category}</span>
                {[pub.kind, pub.date, pub.readTime].filter(Boolean).map((value, index) => (
                  <React.Fragment key={index}><span>•</span><span>{value}</span></React.Fragment>
                ))}
              </div>

              <h3 className="font-heading text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
                {pub.title}
              </h3>

              <p className="font-body text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                {pub.abstract}
              </p>

              <div className="flex flex-wrap items-center gap-1.5 pt-1.5">
                {pub.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-1 font-sans text-xs font-semibold text-blue-700 group-hover:text-blue-900 shrink-0 self-start sm:self-center mt-2 sm:mt-0">
              <span>Examine Paper</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
